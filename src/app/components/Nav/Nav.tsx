"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import { Bars3Icon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const Nav = () => {
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-center p-6 lg:px-8">
                {isContactPage ? (
                    // Back arrow for contact page
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center text-gray-900">
                            <ArrowLeftIcon aria-hidden="true" className="w-6 h-6 mr-2" />
                            <span className="text-sm font-semibold">Back to Home</span>
                        </Link>
                    </div>
                ) : (
                    // Normal menu for other pages
                    <>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Nav