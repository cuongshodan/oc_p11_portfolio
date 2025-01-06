'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { countries } from '../../../../lib/countries';
import Link from 'next/link';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';
console.log('Environment Variables:', process.env);
// Type definition so TypeScript doesn't complain about global grecaptcha.
declare global {
    interface Window {
        grecaptcha?: {
            render: (element: string | HTMLElement, options: {
                sitekey: string;
                callback?: (response: string) => void;
                'expired-callback'?: () => void;
                'error-callback'?: () => void;
                theme?: string;
                size?: string;
                tabindex?: number;
                badge?: string;
            }) => string;
            reset: (widgetId?: string) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
            getResponse: (widgetId?: string) => string;
            enterprise: {
                ready: (callback: () => void) => void;
            };
            [key: string]: unknown;
        };
    }
}

export default function ContactPage() {
    const [agreed, setAgreed] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [recaptchaReady, setRecaptchaReady] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const validateForm = (form: HTMLFormElement) => {
        const requiredFields = [
            'first-name',
            'last-name',
            'email',
            'message'
        ];

        const fieldsValid = requiredFields.every(field => {
            const element = form[field] as HTMLInputElement;
            return element && element.value.trim() !== '';
        });

        // Include the agreed state in the validation
        setFormValid(fieldsValid && agreed);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        validateForm(e.currentTarget);
    };

    useEffect(() => {
        console.log('Initializing reCAPTCHA...');

        const loadRecaptcha = () => {
            if (window.grecaptcha) {
                console.log('grecaptcha is available.');
                window.grecaptcha.enterprise.ready(() => {
                    console.log('grecaptcha is ready.');
                    setRecaptchaReady(true);
                });
            } else {
                console.log('grecaptcha is not available.');
            }
        };

        if (typeof window !== 'undefined') {
            if (!window.grecaptcha) {
                const script = document.createElement('script');
                script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
                script.async = true;
                script.defer = true;
                script.onload = loadRecaptcha;

                document.head.appendChild(script);

                return () => {
                    document.head.removeChild(script);
                };
            } else {
                loadRecaptcha();
            }
        }
    }, []);

    useEffect(() => {
        const form = document.querySelector('form');
        if (form) {
            validateForm(form);
        }
    }, [agreed]); // Re-validate when agreed state changes

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: (formData.get('first-name') as string) || '',
            lastName: (formData.get('last-name') as string) || '',
            company: (formData.get('company') as string) || '',
            email: (formData.get('email') as string) || '',
            phoneNumber: (formData.get('phone-number') as string) || '',
            country: (formData.get('country') as string) || '',
            message: (formData.get('message') as string) || '',
            agreed,
            botField: (formData.get('botField') as string) || '',
            recaptchaToken: '',
        };

        if (!recaptchaReady || !window.grecaptcha) {
            setErrorMessage('reCAPTCHA not ready yet. Please wait or refresh.');
            return;
        }

        try {
            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
                action: 'submit',
            });
            data.recaptchaToken = token;

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const json = await response.json();
            if (!response.ok) {
                throw new Error(json.error || 'Something went wrong');
            }

            setSuccessMessage('Email sent successfully! Thank you for contacting me.');
        } catch (err) {
            if (err instanceof Error) {
                setErrorMessage(err.message || 'Something went wrong');
            } else {
                setErrorMessage('Something went wrong');
            }
        }
    }

    console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
    if (typeof window !== 'undefined') {
        console.log('Hostname:', window.location.hostname);
    }

    useEffect(() => {
        console.log('Initializing reCAPTCHA...');

        const loadRecaptcha = () => {
            if (window.grecaptcha) {
                console.log('grecaptcha is available.');
                window.grecaptcha.enterprise.ready(() => {
                    console.log('grecaptcha is ready.');
                    setRecaptchaReady(true);
                });
            } else {
                console.log('grecaptcha is not available.');
            }
        };

        if (typeof window !== 'undefined') {
            if (!window.grecaptcha) {
                const script = document.createElement('script');
                script.src = `https://www.google.com/recaptcha/enterprise.js?render=${RECAPTCHA_SITE_KEY}`;
                script.async = true;
                script.defer = true;
                script.onload = loadRecaptcha;

                document.head.appendChild(script);
            } else {
                loadRecaptcha();
            }
        }
    }, []);

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Let&apos;s Connect</h2>
                <p className="mt-2 text-lg/8 text-gray-600">
                    Have a question, need advice, or want to collaborate?<br />I&apos;m here to help—reach out, and let&apos;s make something great together.
                </p>

            </div>

            <form
                onChange={handleInputChange}
                onSubmit={handleSubmit}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* Honeypot field */}
                    <input
                        type="text"
                        name="botField"
                        autoComplete="off"
                        style={{ display: 'none' }}
                    />

                    {/* First Name */}
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            First name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                id="first-name"
                                name="first-name"
                                type="text"
                                autoComplete="given-name"
                                placeholder="Required field"
                                className="block w-full rounded-md bg-white px-3.5 py-2
                                    text-base text-gray-900 outline outline-1
                                    -outline-offset-1 outline-gray-300
                                    placeholder:text-gray-400 focus:outline
                                    focus:outline-2 focus:-outline-offset-2
                                    focus:outline-orange-500"
                            />
                        </div>
                    </div>

                    {/* Last Name */}
                    <div>
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Last name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
                                placeholder="Required field"
                                className="block w-full rounded-md bg-white px-3.5 py-2
                                    text-base text-gray-900 outline outline-1
                                    -outline-offset-1 outline-gray-300
                                    placeholder:text-gray-400 focus:outline
                                    focus:outline-2 focus:-outline-offset-2
                                    focus:outline-orange-500"
                            />
                        </div>
                    </div>

                    {/* Company */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="company"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Company <span className="text-gray-400">(Optional)</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="organization"
                                className="block w-full rounded-md bg-white px-3.5 py-2
                           text-base text-gray-900 outline outline-1
                           -outline-offset-1 outline-gray-300
                           placeholder:text-gray-400 focus:outline
                           focus:outline-2 focus:-outline-offset-2
                           focus:outline-orange-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Email <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <input
                                required
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="Required field"
                                className="block w-full rounded-md bg-white px-3.5 py-2
                                    text-base text-gray-900 outline outline-1
                                    -outline-offset-1 outline-gray-300
                                    placeholder:text-gray-400 focus:outline
                                    focus:outline-2 focus:-outline-offset-2
                                    focus:outline-orange-500"
                            />
                        </div>
                    </div>

                    {/* Phone Number + Country */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone-number"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Phone number <span className="text-gray-400">(Optional)</span>
                        </label>
                        <div className="mt-2.5">
                            <div
                                className="flex rounded-md bg-white outline outline-1
                           -outline-offset-1 outline-gray-300
                           has-[input:focus-within]:outline
                           has-[input:focus-within]:outline-2
                           has-[input:focus-within]:-outline-offset-2
                           has-[input:focus-within]:outline-orange-500"
                            >
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country"
                                        aria-label="Country"
                                        className="col-start-1 row-start-1 w-full appearance-none
                               rounded-md py-2 pl-3.5 pr-7 text-base
                               text-gray-500 placeholder:text-gray-400
                               focus:outline focus:outline-2
                               focus:-outline-offset-2
                               focus:outline-orange-500
                               sm:text-sm"
                                    >
                                        {countries.map((c) => (
                                            <option key={c.code} value={c.code}>
                                                {c.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDownIcon
                                        aria-hidden="true"
                                        className="pointer-events-none col-start-1 row-start-1
                               mr-2 size-5 self-center justify-self-end
                               text-gray-500 sm:size-4"
                                    />
                                </div>
                                <input
                                    id="phone-number"
                                    name="phone-number"
                                    type="text"
                                    placeholder="123-456-7890"
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3
                             text-base text-gray-900 placeholder:text-gray-400
                             focus:outline focus:outline-0 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold text-gray-900"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                required
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Required field"
                                className="block w-full rounded-md bg-white px-3.5 py-2
                                    text-base text-gray-900 outline outline-1
                                    -outline-offset-1 outline-gray-300
                                    placeholder:text-gray-400 focus:outline
                                    focus:outline-2 focus:-outline-offset-2
                                    focus:outline-orange-500"
                            />
                        </div>
                    </div>

                    {/* Agree to privacy policy */}
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className="group flex w-8 flex-none cursor-pointer
                           rounded-full bg-gray-200 p-px ring-1
                           ring-inset ring-gray-900/5 transition-colors
                           duration-200 ease-in-out
                           focus-visible:outline
                           focus-visible:outline-2
                           focus-visible:outline-offset-2
                           focus-visible:outline-orange-500
                           data-[checked]:bg-orange-500"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="size-4 transform rounded-full
                             bg-white shadow-sm ring-1 ring-gray-900/5
                             transition duration-200 ease-in-out
                             group-data-[checked]:translate-x-3.5"
                                />
                            </Switch>
                        </div>
                        <p className="text-sm text-gray-600">
                            By selecting this, you agree to our{' '}
                            <Link href="#" className="font-semibold text-orange-500">
                                privacy&nbsp;policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                {/* Error / Success messages */}
                {errorMessage && (
                    <div className="mt-4 rounded-md bg-red-50 p-4 text-sm text-red-700">
                        {errorMessage}
                    </div>
                )}
                {successMessage && (
                    <div className="mt-4 rounded-md bg-green-50 p-4 text-sm text-green-700">
                        {successMessage}
                    </div>
                )}

                <div className="mt-10">
                    <button
                        type="submit"
                        disabled={!formValid}
                        className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm
                            ${formValid
                                ? 'bg-orange-500 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500'
                                : 'bg-gray-400 cursor-not-allowed'
                            }
                        `}
                    >
                        Let&apos;s talk
                    </button>
                </div>
            </form>
        </div>
    );
}
