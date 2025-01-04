import { CodeBracketIcon, ServerIcon, ShieldCheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const services = [
    {
        name: 'Web Development',
        description: 'Building modern, responsive websites and web applications with cutting-edge technologies like React, Next.js, and TailwindCSS to bring your ideas to life.',
        icon: CodeBracketIcon,
    },
    {
        name: 'IT Consulting',
        description: 'Providing tailored IT strategies to optimize your business processes, infrastructure, and digital transformation goals.',
        icon: ServerIcon,
    },
    {
        name: 'AI Consulting',
        description: 'Helping businesses leverage AI solutions, from implementing AI-powered tools to integrating automation and machine learning into their workflows.',
        icon: LightBulbIcon,
    },
    {
        name: 'Cybersecurity',
        description: 'Ensuring your systems are secure with robust solutions, including firewalls, network security, and data protection strategies.',
        icon: ShieldCheckIcon,
    },
];

export default function MyServices() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Services I Offer</h2>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                        I specialize in empowering businesses with innovative technology solutions. From crafting seamless web applications to securing your digital assets, my services are designed to help you thrive in a competitive landscape.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
                    {services.map((service) => (
                        <div key={service.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                            <service.icon aria-hidden="true" className="h-7 w-7 flex-none text-indigo-400" />
                            <div className="text-base/7">
                                <h3 className="font-semibold text-white">{service.name}</h3>
                                <p className="mt-2 text-gray-300">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
