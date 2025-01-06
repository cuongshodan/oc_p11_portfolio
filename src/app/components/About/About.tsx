import Image from "next/image";

export default function About() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p className="text-base/7 font-semibold text-orange-500">A little about me</p>
                    <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Passionate about technology, teamwork, and innovation
                    </h1>
                    <p className="mt-6 text-balance text-xl/8 text-gray-700">
                        I&apos;m Nguyen Ngoc Cuong, an IT consultant and web developer dedicated to empowering businesses through technology. Whether it&apos;s building seamless web solutions, exploring cutting-edge AI, or ensuring robust cybersecurity, I thrive on solving challenges with creativity and precision.
                    </p>
                </div>
                <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">My journey</h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Growing up with a passion for problem-solving and technology, I&apos;ve spent years honing my skills in IT consulting, web development, and emerging fields like AI. My journey has been driven by a desire to empower individuals and businesses with tools and strategies to thrive in a digital-first world.
                        </p>
                        <p className="mt-8 text-base/7 text-gray-600">
                            Beyond work, I am an avid tea enthusiast and a fan of strategic games like Go, which keep my mind sharp and ready for the next challenge. I believe in continuous learning and exploring new frontiers in technology, creativity, and collaboration.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    alt="Coding workspace"
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    width={560}
                                    height={560}
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    alt="Tea brewing setup"
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    width={560}
                                    height={560}
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10">
                                <Image
                                    alt="Strategic game board"
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    width={560}
                                    height={560}
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <Image
                                    alt="Nature for inspiration"
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    width={560}
                                    height={560}
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1">
                        <p className="text-base/7 font-semibold text-gray-500">Key achievements</p>
                        <hr className="mt-6 border-t border-gray-200" />
                        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-sm/6 text-gray-600">Projects Delivered</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-orange-500">
                                    <span>50</span>+
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-sm/6 text-gray-600">Clients Supported</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-orange-500">
                                    <span>100</span>+
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                                <dt className="text-sm/6 text-gray-600">Hours of Development</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-orange-500">
                                    <span>10</span>K+
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <dt className="text-sm/6 text-gray-600">Years of Experience</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight text-orange-500">
                                    <span>5</span>+
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </div>
    );
}
