import { Link } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const services = [
        { name: 'Bakım', href: '/hizmetler/bakim' },
        { name: 'Beslenme', href: '/hizmetler/beslenme' },
        { name: 'Yetiştiricilik', href: '/hizmetler/yetistiricilik' },
        { name: 'Hayvancılık', href: '/hizmetler/hayvancilik' },
    ];

    const closeMobileMenu = () => {
        setIsOpen(false);
        setIsMobileServicesOpen(false);
    };

    return (
        <>
            <div className={`navbar h-24 fixed !flex !justify-between lg:px-20 top-0 left-0 right-0 z-50 transition-all duration-300 
                ${isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
                <div className="navbar-start w-1/4">
                    <button 
                        className="lg:hidden btn btn-ghost text-white"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <Link to="/" className="hidden lg:flex text-xl font-serif text-white">
                        <img src="/assets/logo.png" alt="logo" className="w-20 h-22" />
                    </Link>
                </div>
                <div className="navbar-center lg:hidden">
                    <Link to="/" className="text-xl font-serif text-white">
                        <img src="/assets/logo.png" alt="logo" className="w-16 h-18 object-contain " />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex flex-1 justify-center">
                    <nav className="flex items-center space-x-8">
                        <Link to="/" className="text-white text-lg hover:text-accent transition-colors duration-200">
                            Anasayfa
                        </Link>
                        <Link to="/kurumsal" className="text-white text-lg hover:text-accent transition-colors duration-200">
                            Kurumsal
                        </Link>
                        
                        <Menu as="div" className="relative">
                            {({ open }) => (
                                <>
                                    <Menu.Button className="flex items-center text-white text-lg hover:text-accent transition-colors duration-200 focus:outline-none">
                                        <span>Hizmetlerimiz</span>
                                        <ChevronDownIcon
                                            className={`ml-2 h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Menu.Items className="absolute left-1/2 z-10 mt-3 w-48 -translate-x-1/2 rounded-xl bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {services.map((service) => (
                                                <Menu.Item key={service.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            to={service.href}
                                                            className={`${
                                                                active ? 'bg-primary/5 text-primary' : 'text-gray-700'
                                                            } block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200`}
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>

                        <Link to="/galeri" className="text-white text-lg hover:text-accent transition-colors duration-200">
                            Galeri
                        </Link>
                        <Link to="/iletisim" className="text-white text-lg hover:text-accent transition-colors duration-200">
                            İletişim
                        </Link>
                        {/* <Link to="/blog" className="text-white text-lg hover:text-accent transition-colors duration-200">
                            Blog
                        </Link> */}
                    </nav>
                </div>
                <div className="navbar-end w-1/4 flex justify-end">
                    <Link 
                        to="/iletisim" 
                        className="hidden lg:flex btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
                    >
                        Bize Ulaşın
                    </Link>
                </div>
            </div>

            <div className={`fixed inset-0 z-50 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full flex flex-col relative">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/assets/ornek-gorsel.jpg" 
                            alt="background" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/90"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-center border-b border-white/10">
                            <button 
                                className="btn btn-ghost text-white"
                                onClick={closeMobileMenu}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <img src='/assets/logo.png' className='w-20 object-contain my-5'/>
                            <div className="w-14"></div>
                        </div>
                        <div className="flex-1 overflow-y-auto py-8 px-4">
                            <nav className="flex flex-col space-y-6 text-center">
                                <Link 
                                    to="/" 
                                    className="text-3xl text-white hover:text-accent transition-colors duration-300"
                                    onClick={closeMobileMenu}
                                >
                                    Anasayfa
                                </Link>
                                <Link 
                                    to="/kurumsal" 
                                    className="text-3xl text-white hover:text-accent transition-colors duration-300"
                                    onClick={closeMobileMenu}
                                >
                                    Kurumsal
                                </Link>
                                <div className="space-y-4">
                                    <button 
                                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                        className="text-3xl text-white hover:text-accent transition-colors duration-300 flex items-center justify-center space-x-2 w-full"
                                    >
                                        <span>Hizmetlerimiz</span>
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className={`h-6 w-6 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`flex flex-col space-y-4 overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {services.map((service) => (
                                            <Link 
                                                key={service.name}
                                                to={service.href} 
                                                className="text-xl text-white/90 hover:text-accent transition-colors duration-300"
                                                onClick={closeMobileMenu}
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <Link 
                                    to="/galeri" 
                                    className="text-3xl text-white hover:text-accent transition-colors duration-300"
                                    onClick={closeMobileMenu}
                                >
                                    Galeri
                                </Link>
                                <Link 
                                    to="/iletisim" 
                                    className="text-3xl text-white hover:text-accent transition-colors duration-300"
                                    onClick={closeMobileMenu}
                                >
                                    İletişim
                                </Link>
                                <Link 
                                    to="/blog" 
                                    className="text-3xl text-white hover:text-accent transition-colors duration-300"
                                    onClick={closeMobileMenu}
                                >
                                    Blog
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 