export default function PageHeader({ title, image = "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3" }) {
    return (
        <div className="relative h-[40vh] mb-8">
            <div className="absolute inset-0">
                <img 
                        src="/assets/cow-10.jpg"
                        alt={title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4" data-aos="fade-up">{title}</h1>
                <nav className="text-sm md:text-base breadcrumbs" data-aos="fade-up" data-aos-delay="100">
                    <ul>
                        <li><a href="/">Ana Sayfa</a></li>
                        <li>{title}</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
} 