import TechStackField from "../TechStackField/TechStackField";

export default function TechStack() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-2xl lg:mx-0">
                    <h2 className="text-base/7 font-semibold text-orange-600">Tech Stack</h2>
                    <h3 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Tools of choice</h3>

                    <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                        My tech stack is a carefully crafted collection of modern tools and technologies, enabling me to build scalable, secure, and user-focused solutions tailored to meet diverse business needs.
                    </p>
                </div>
                <TechStackField />
            </div>
        </div>
    )
}

