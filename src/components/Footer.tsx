import { Icon } from '@iconify-icon/react'

function Footer() {
    return (
        <footer className="border-t border-main-dark text-white py-12 px-4 md:px-14 mt-20">
            <div className="w-full mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">


                    <div className="lg:col-span-2">
                        <h2 className="font-inknut text-3xl font-bold text-main-light mb-4">
                            I-World
                        </h2>
                        <p className="text-secondary-light mb-6 leading-relaxed max-w-md">
                            Explore the world's countries with detailed information about flags, regions,
                            population, and more. Your gateway to global knowledge.
                        </p>
                    </div>


                    <div>
                        <h3 className="font-inknut text-lg font-semibold text-main-light mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="text-secondary-light hover:text-main-light transition-colors duration-300 flex items-center">
                                    <Icon icon="mdi:chevron-right" width={16} height={16} className="mr-2" />
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="text-secondary-light hover:text-main-light transition-colors duration-300 flex items-center">
                                    <Icon icon="mdi:chevron-right" width={16} height={16} className="mr-2" />
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-inknut text-lg font-semibold text-main-light mb-4">
                            Contact Info
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <Icon icon="mdi:map-marker" width={20} height={20} className="text-main-light mr-3 mt-1 flex-shrink-0" />
                                <p className="text-secondary-light text-sm">
                                    Samarinda, Indonesia
                                </p>
                            </div>
                            <div className="flex items-center">
                                <Icon icon="mdi:email" width={20} height={20} className="text-main-light mr-3 flex-shrink-0" />
                                <p className="text-secondary-light text-sm">ifnuu01@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <Icon icon="mdi:github" width={20} height={20} className="text-main-light mr-3 flex-shrink-0" />
                                <p className="text-secondary-light text-sm">ifnuu01</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-t border-secondary-dark my-8"></div>


                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Icon icon="mdi:copyright" width={16} height={16} className="text-secondary-light mr-2" />
                        <p className="text-secondary-light text-sm">
                            2025 I-World. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-secondary-light hover:text-main-light text-sm transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-secondary-light hover:text-main-light text-sm transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-secondary-light hover:text-main-light text-sm transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </div>


                <div className="fixed bottom-8 right-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-main-light cursor-pointer hover:bg-main-dark text-main-dark hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                        aria-label="Back to top"
                    >
                        <Icon icon="mdi:chevron-up" width={24} height={24} />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer