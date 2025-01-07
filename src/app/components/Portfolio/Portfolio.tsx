import Image from 'next/image';
import Link from 'next/link';

export default function Portfolio() {



    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-base/7 font-semibold text-orange-500">Portfolio</h2>
                <h3 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Newest projects
                </h3>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Booki
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    The second project I did during the Openclassroom training. This project just brings back memories. It was a simple project but it brings you slowly into the web development with good practices from the beginning.
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-orange-600 hover:text-orange-400 max-lg:text-center underline ">
                                    <Link href="https://github.com/cuongshodan/OC_project2">Booki Git</Link>
                                </p>

                            </div>
                            <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                                    <Image
                                        className="size-full object-cover object-top"
                                        src="/images/booki.png"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Ohmyfood</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Le 3e projet sur OC. Très fun mais CSS poussé et utilisation de SASS
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-orange-600 hover:text-orange-400 underline max-lg:text-center">
                                    <Link href="https://github.com/cuongshodan/oc_p3_omyfood_htmlcss">Ohmyfood Git</Link>
                                </p>
                            </div>
                            <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                <Image
                                    className=""
                                    src="/images/ohmyfood.png"
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">ArgentBank</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Un des derniers projets de OC. Le site d&apos;ArgentBank est fait avec React.js et aussi connecter au back-end. Dans ce projet on doit utiliser Redux pour gérer les états de l&apos;application au lieu de React usestate.
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-orange-600 hover:text-orange-400 underline max-lg:text-center">
                                    <Link href="https://github.com/cuongshodan/oc_p10_argentbank">ArgentBank Git</Link>
                                </p>
                            </div>
                            <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                                <Image
                                    className="object-cover"
                                    src="/images/argentbank.png"
                                    alt=""
                                    width={300}
                                    height={300}
                                />
                            </div>

                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Sophie Bluel Photos</p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                    Le projet 6 de OC. Un projet ou on travaille surtout avec Javascript. Connecter le front au back et faire des requêtes API. Création du modal et du carousel.
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-orange-600 hover:text-orange-400 underline max-lg:text-center">
                                    <Link href="https://github.com/cuongshodan/oc_project6_sophiebluel">Sophie Bluel Git</Link>
                                </p>
                            </div>
                            <div className="relative min-h-[30rem] w-full grow">
                                <div className="px-6 pb-14 pt-6">
                                    <Image
                                        className="object-cover"
                                        src="/images/sophiebluel.png"
                                        alt=""
                                        width={700}
                                        height={700}
                                    />
                                </div>

                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
