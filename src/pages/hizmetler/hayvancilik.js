import PageHeader from '../../components/PageHeader';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Hayvancilik() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div className="relative w-full">
            <PageHeader 
                title="Hayvancılık Hizmetlerimiz" 
                image="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3"
            />
            <div className="container mx-auto px-4 py-12">
                <div className="prose max-w-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div data-aos="fade-right" className="card bg-base-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body">
                                <h3 className="card-title text-2xl mb-4 flex justify-center">Profesyonel Sürü Yönetimi</h3>
                                <p className="text-gray-600 lg:mx-40">
                                    Uzman ekibimizle profesyonel sürü yönetimi hizmeti sunuyoruz.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="card bg-base-200 hover:shadow-xl transition-shadow duration-300">
                            <div className="card-body">
                                <h3 className="card-title text-2xl mb-4 flex justify-center">Sağlık Kontrolleri</h3>
                                <p className="text-gray-600 lg:mx-40">
                                    Düzenli veteriner kontrolleri ile hayvan sağlığını sürekli takip ediyoruz.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="mt-12">
                        <h2 className="text-3xl font-bold mb-6">Modern Hayvancılık</h2>
                        <p className="text-lg mb-6">
                            Modern hayvancılık teknikleri ve sürdürülebilir yaklaşımlarla, sektörde öncü hizmetler sunuyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
} 