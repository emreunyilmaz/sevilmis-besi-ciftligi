import { useEffect } from "react";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      image: "/assets/humans/5-min.png", // Varsayılan bir avatar kullanabilirsiniz
      content:
        "Hertat Besi Çiftliği ile çalışmaya başladığımızdan beri hayvanlarımızın sağlığı ve verimi gözle görülür şekilde arttı. Profesyonel ekipleri ve modern yaklaşımları ile sektörde fark yaratıyorlar.",
    },
    {
      id: 1,
      name: "Mehmet Kaya",
      image: "/assets/humans/6-min.png", // Varsayılan bir avatar kullanabilirsiniz
      content:
        "Hertat Besi Çiftliği ile çalışmaya başladığımızdan beri hayvanlarımızın sağlığı ve verimi gözle görülür şekilde arttı. Profesyonel ekipleri ve modern yaklaşımları ile sektörde fark yaratıyorlar.",
    },
    {
      id: 1,
      name: "Hasan Yıldız",
      image: "/assets/humans/7-min.png", // Varsayılan bir avatar kullanabilirsiniz
      content:
        "Hertat Besi Çiftliği ile çalışmaya başladığımızdan beri hayvanlarımızın sağlığı ve verimi gözle görülür şekilde arttı. Profesyonel ekipleri ve modern yaklaşımları ile sektörde fark yaratıyorlar.",
    },
    {
      id: 1,
      name: "Fatma Dikmen",
      image: "/assets/humans/9-min.png", // Varsayılan bir avatar kullanabilirsiniz
      content:
        "Hertat Besi Çiftliği ile çalışmaya başladığımızdan beri hayvanlarımızın sağlığı ve verimi gözle görülür şekilde arttı. Profesyonel ekipleri ve modern yaklaşımları ile sektörde fark yaratıyorlar.",
    },
    {
      id: 2,
      name: "Mehmet Demir",
      image: "/assets/humans/8-min.png",
      content:
        "Uzun yıllardır hayvancılık sektöründeyim ve Hertat Besi Çiftliği'nin uyguladığı bakım ve besleme teknikleri gerçekten takdire şayan. Hayvan sağlığına verdikleri önem ve kullandıkları modern yöntemler örnek alınmalı.",
    },
    {
      id: 3,
      name: "Ayşe Kaya",
      image: "/assets/humans/10-min.png",
      content:
        "Müşteri memnuniyetini ön planda tutan yaklaşımları ve kaliteli hizmetleri ile sektörde öncü bir kuruluş. Tecrübeli ekipleri ve sürdürülebilir hayvancılık anlayışları ile tam bir güven veriyorlar.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/assets/cow-10.jpg"
            alt="Çiftlik"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative flex items-center justify-center min-h-screen text-center text-white px-4 pt-16">
          <div data-aos="fade-up" className="max-w-4xl">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold  lg:mb-4 leading-tight">
                Modern Hayvancılığın{" "}
              </h1>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {" "}
                Öncü Adresi{" "}
              </h1>
            </div>
            <p className="text-lg md:text-2xl lg:mt-4 mb-12 opacity-90">
              Profesyonel ekibimizle Türkiye'nin en kaliteli besi çiftliği
              hizmetini sunuyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kurumsal"
                className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Hakkımızda
              </Link>
              <Link
                to="/iletisim"
                className="btn bg-accent/90 border-2 border-accent text-primary hover:bg-accent transition-all duration-300"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* İstatistikler Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm opacity-80">Yıllık Tecrübe</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-sm opacity-80">Büyükbaş Hayvan</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold mb-2">70+</div>
              <div className="text-sm opacity-80">Uzman Personel</div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">İş Ortağı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Hizmetlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card-body">
                <div className="text-primary mb-4">
                <img
                    src="/assets/icons/bakim.svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
               
                </div>
                <h3 className="card-title text-xl mb-3">Bakım</h3>
                <p className="text-gray-600">
                  Modern tekniklerle hayvanlarımızın sağlığı ve konforu için en
                  iyi bakım hizmetlerini sunuyoruz.
                </p>
                <Link
                  to="/hizmetler/bakim"
                  className="mt-4 inline-block text-primary hover:text-primary-hover"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
            <div
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card-body">
                <div className="text-primary mb-4">
                  <img
                    src="/assets/icons/beslenme.svg"
                    className="h-14 w-14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
               
                </div>
                <h3 className="card-title text-xl mb-3">Beslenme</h3>
                <p className="text-gray-600">
                  Uzman veterinerlerimiz tarafından hazırlanan özel beslenme
                  programları ile sağlıklı büyüme sağlıyoruz.
                </p>
                <Link
                  to="/hizmetler/beslenme"
                  className="mt-4 inline-block text-primary hover:text-primary-hover"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
            <div
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card-body">
                <div className="text-primary mb-4">
                <img
                    src="/assets/icons/yetistiricilik.svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
               
                </div>
                <h3 className="card-title text-xl mb-3">Yetiştiricilik</h3>
                <p className="text-gray-600">
                  Yılların deneyimi ile en kaliteli yetiştiricilik hizmetlerini
                  sunuyoruz.
                </p>
                <Link
                  to="/hizmetler/yetistiricilik"
                  className="mt-4 inline-block text-primary hover:text-primary-hover"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
            <div
              className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card-body">
                <div className="text-primary mb-4">
                <img
                    src="/assets/icons/hayvancilik.svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
               
                </div>
                <h3 className="card-title text-xl mb-3">Hayvancılık</h3>
                <p className="text-gray-600">
                  Modern çiftlik yönetimi ile sürdürülebilir hayvancılık için
                  çalışıyoruz.
                </p>
                <Link
                  to="/hizmetler/hayvancilik"
                  className="mt-4 inline-block text-primary hover:text-primary-hover"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeri Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Çiftliğimizden Kareler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/galeri">
              <div
                className="group relative overflow-hidden rounded-xl"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <img
                  src="/assets/cow-1.jpg"
                  alt="Çiftlik"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Modern Tesislerimiz
                </span>
              </div> */}
              </div>
            </Link>
            <Link to="/galeri">
              <div
                className="group relative overflow-hidden rounded-xl"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <img
                  src="/assets/cow-2.jpg"
                  alt="Çiftlik"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Hayvanlarımız
                  </span>
                </div>
              </div>
            </Link>
            <Link to="/galeri">
              <div
                className="group relative overflow-hidden rounded-xl"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3"
                  alt="Çiftlik"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Çiftlik Çevresi
                </span>
              </div> */}
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-primary/10 relative overflow-hidden">
        {/* Dekoratif elementler */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-6">Müşteri Yorumları</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Değerli müşterilerimizin bizimle ilgili düşüncelerini paylaşıyoruz
            </p>
          </div>

          <div data-aos="fade-up">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="testimonials-swiper !py-16 !px-8"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="!lg:w-[460px] !w-[350px]"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 mx-4 h-full transform transition-transform hover:scale-105 duration-300">
                    <div className="relative">
                      {/* Quote Icon */}
                      <div className="absolute -top-10 -left-6">
                        <svg
                          className="w-16 h-16 text-accent/20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="mb-8 pt-6">
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {testimonial.content}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-accent/20">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-xl font-semibold text-primary">
                            {testimonial.name}
                          </h4>
                          <p className="text-accent">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Harita Section */}
      <section className="py-20 bg-white">
        <div className="">
          <h2
            className="text-4xl font-bold text-center mb-16"
            data-aos="fade-up"
          >
            Bizi Ziyaret Edin
          </h2>
          <div
            className="w-full h-[300px] md:h-[350px] lg:h-[400px]"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3584.879659111162!2d29.514099114251398!3d40.92643472864088!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1744127835794!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="shadow-lg"
            ></iframe>
          </div>
          {/* <div className="mt-8 text-center" data-aos="fade-up">
                        <h3 className="text-2xl font-semibold mb-4">Adres</h3>
                           Cumaköy Köyü Harkakası Mevkii 235/19
              <br />
              Kocaeli/Gebze
                    </div> */}
        </div>
      </section>
    </div>
  );
}
