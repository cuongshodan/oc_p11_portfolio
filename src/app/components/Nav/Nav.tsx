"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { name: 'Contact', href: '/contact' },
]

const Nav = () => {
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';

    return (

        <header className="bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex justify-center px-8 mx-auto">
                    <Link href="/">
                        <Image src="./images/logo/cn_logo.svg" alt="Logo" width={120} height={40} />
                    </Link>

                    <nav aria-label="Global" className="flex items-center justify-center">
                        {isContactPage ? (
                            // Back arrow for contact page
                            <div className="flex items-center">
                                <Link href="/" className="flex items-center text-gray-900 underline hover:text-orange-500">
                                    <ArrowLeftIcon aria-hidden="true" className="w-6 h-6 mr-2" />
                                    <span className="text-sm font-semibold">Back to Home</span>
                                </Link>
                            </div>
                        ) : (
                            // Normal menu for other pages
                            <>
                                <div className="pr-12 lg:flex lg:gap-x-12">
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 underline hover:text-orange-500">
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav