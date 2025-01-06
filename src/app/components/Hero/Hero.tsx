import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    return (
        <div className="bg-white">


            <div className="relative isolate pt-14">
                <svg
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
                </svg>
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Nguyen Ngoc Cuong
                        </h1>
                        <h2 className="mt-6 text-pretty text-4xl text-orange-500">Your trusted IT consultant</h2>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            With years of experience in IT consulting and software development, I specialize in providing tailored solutions to help businesses thrive in a digital-first world. Whether it’s enhancing your online presence, optimizing workflows, or securing your digital assets, I’m here to guide you every step of the way.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href="/contact"
                                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                            >
                                Contact me
                            </Link>
                        </div>
                    </div>
                    <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">

                        <Image
                            alt=""
                            src="/images/hero.webp"
                            width={400}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
