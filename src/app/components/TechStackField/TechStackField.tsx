import {
    CodeBracketIcon,
    ServerIcon,
    CpuChipIcon,
    FolderIcon,

    PaintBrushIcon,
    LockClosedIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

interface Action {
    title: string;
    href: string;
    icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;
    iconForeground: string;
    iconBackground: string;
    description: string;
}

const actions: Action[] = [
    {
        title: 'Frontend Development',
        href: '#',
        icon: CodeBracketIcon,
        iconForeground: 'text-blue-700',
        iconBackground: 'bg-blue-50',
        description:
            'Building responsive and dynamic user interfaces with React, Next.js, TypeScript, Tailwind CSS, Sass, and HTML/CSS.',
    },
    {
        title: 'Backend Development',
        href: '#',
        icon: ServerIcon,
        iconForeground: 'text-gray-700',
        iconBackground: 'bg-gray-50',
        description:
            'Developing scalable server-side applications and APIs using Node.js, Encore.ts, and Python.',
    },
    {
        title: 'Databases & Infrastructure',
        href: '#',
        icon: FolderIcon,
        iconForeground: 'text-green-700',
        iconBackground: 'bg-green-50',
        description:
            'Managing data with MongoDB and PostgreSQL. Configuring high-performance servers and infrastructure with Nginx and Docker.',
    },
    {
        title: 'Design & Prototyping',
        href: '#',
        icon: PaintBrushIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
        description:
            'Creating intuitive designs and prototypes using Figma, ensuring pixel-perfect implementation.',
    },
    {
        title: 'AI & Emerging Technologies',
        href: '#',
        icon: CpuChipIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
        description:
            'Exploring AI, machine learning, and Web3 technologies to integrate innovative solutions into modern applications.',
    },
    {
        title: 'Cybersecurity & Network Setup',
        href: '#',
        icon: LockClosedIcon,
        iconForeground: 'text-red-700',
        iconBackground: 'bg-red-50',
        description:
            'Specializing in OPNsense installation and maintenance, Cisco device setup and configuration (CCNA certified), and providing robust cybersecurity solutions.',
    },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function TechStackField() {
    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
                <div
                    key={action.title}
                    className={classNames(
                        actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                        actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                        actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                        actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                        'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
                    )}
                >
                    <div>
                        <span
                            className={classNames(
                                action.iconBackground,
                                action.iconForeground,
                                'inline-flex rounded-lg p-3 ring-4 ring-white',
                            )}
                        >
                            <action.icon aria-hidden="true" className="h-6 w-6" />
                        </span>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-base font-semibold text-gray-900">
                            {/* Extend touch target to entire panel */}
                            <span aria-hidden="true" className="absolute inset-0" />
                            {action.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">{action.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
