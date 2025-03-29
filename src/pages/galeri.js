import PageHeader from '../components/PageHeader';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Galeri() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const images = [
        { src: '/assets/cow-4.jpg', alt: 'Çiftlik Görünümü 4' },
        { src: '/assets/cow-5.jpg', alt: 'Çiftlik Görünümü 5' },
        { src: '/assets/cow-6.jpg', alt: 'Çiftlik Görünümü 6' },
        { src: '/assets/cow-7.jpg', alt: 'Çiftlik Görünümü 7' },
        { src: '/assets/cow-8.jpg', alt: 'Çiftlik Görünümü 8' },
        { src: '/assets/lamb-3.jpg', alt: 'Çiftlik Görünümü 11' },
        { src: '/assets/lamb-2.jpg', alt: 'Çiftlik Görünümü 12' },
        { src: '/assets/lamb-4.jpg', alt: 'Çiftlik Görünümü 14' },

    ];

    return (
        <div className="overflow-x-hidden">
            <PageHeader 
                title="Galeri" 
                image="/assets/cow-10.jpg"
            />
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className="group relative overflow-hidden rounded-xl shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="aspect-w-16 aspect-h-12">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full lg:max-h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                {/* <p className="text-white text-lg font-semibold">{image.alt}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 