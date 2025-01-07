import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    return (
        <div className="bg-white">

            <div className="relative isolate pt-14">

                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
                        <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            Cuong N.
                        </h1>
                        <h2 className="mt-6 text-pretty text-4xl text-orange-500">Your trusted IT consultant</h2>
                        <h2 className="mt-6 text-base/7 font-semibold text-orange-500">06 January 2025</h2>
                        <div><p className="text-pretty text-xl text-orange-500">This is just a student project website. It is the project 11 web integration for openclassroom training. I will take the website offline as soon as the project ends. If you have any questions, please contact me at cn.ng1983@gmail.com</p></div>
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
                    <div className="flex justify-center mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">

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
