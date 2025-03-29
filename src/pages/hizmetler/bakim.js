import PageHeader from '../../components/PageHeader';

export default function Bakim() {
    return (
        <div className="relative w-full">
            <PageHeader 
                title="Bakım Hizmetlerimiz" 
                image="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3"
            />
            <div className="container mx-auto px-4 lg:pb-20 py-12">
                <div className="prose max-w-none">
                    <p className="mb-4 lg:mb-10 lg:text-xl text-lg">
                        Hayvanlarımızın sağlıklı gelişimi için özel olarak hazırlanmış bakım hizmetleri sunuyoruz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card bg-base-200">
                            <div className="card-body">
                                <h3 className="card-title  flex justify-center">Özel Bakım Programları</h3>
                                <p className='lg:mx-40'>Her hayvanın ihtiyacına göre özel olarak hazırlanmış bakım programları uyguluyoruz.</p>
                            </div>
                        </div>
                        <div className="card bg-base-200">
                            <div className="card-body">
                                <h3 className="card-title  flex justify-center">Düzenli Sağlık Kontrolleri</h3>
                                <p className='lg:mx-40'>Uzman veteriner ekibimiz ile düzenli sağlık kontrolleri yapıyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 