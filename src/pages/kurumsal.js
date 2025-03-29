import PageHeader from "../components/PageHeader";
import AOS from "aos";
import { useEffect } from "react";

export default function Kurumsal() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative w-full">
      <PageHeader
        title="Kurumsal"
        image="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3"
      />
      <div className="container mx-auto px-4 py-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right ">
            <h2 className="text-3xl text-start font-bold mb-6">Hakkımızda</h2>
            <div className="prose text-start max-w-none lg:max-w-[620px]">
              <p className="text-lg mb-4">
                40 yıllık tecrübemizle Türkiye'nin önde gelen besi
                çiftliklerinden biri olarak, modern hayvancılık tekniklerini
                kullanarak en kaliteli hizmeti sunuyoruz.
              </p>
              <p className="text-lg mb-4">
                5000'den fazla büyükbaş hayvan kapasitemiz ve 100'ün üzerinde
                uzman personelimizle, sektörde öncü konumdayız.
              </p>

              <p className="text-lg mb-4">
                40 yıllık tecrübemizle Türkiye'nin önde gelen besi
                çiftliklerinden biri olarak, modern hayvancılık tekniklerini
                kullanarak en kaliteli hizmeti sunuyoruz. 5000'den fazla
                büyükbaş hayvan kapasitemiz ve 100'ün üzerinde uzman
                personelimizle, sektörde öncü konumdayız.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="relative">
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3"
              alt="Çiftlik"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            data-aos="fade-up"
          >
            Değerlerimiz
          </h2>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="card  bg-base-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body !items-center ">
                <div className="text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title text-xl lg:text-2xl mb-3">Kalite</h3>
                <p>En yüksek kalite standartlarında hizmet sunuyoruz.</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="card bg-base-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body  !items-center  ">
                <div className="text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                 
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3 lg:text-2xl ">
                  Yenilikçilik
                </h3>
                <p>Modern teknolojileri takip ediyor ve uyguluyoruz.</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="card bg-base-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body  !items-center ">
                <div className="text-primary mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="card-title text-xl mb-3 lg:text-2xl ">
                  Sürdürülebilirlik
                </h3>
                <p>
                  Çevre dostu uygulamalarla sürdürülebilir hayvancılık
                  yapıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Vizyonumuz & Misyonumuz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title flex justify-center text-2xl mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-lg">
                  Türkiye'nin en modern ve en büyük besi çiftliği olarak,
                  sektörde öncü ve örnek olmak.
                </p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title flex justify-center text-2xl mb-4">
                  Misyonumuz
                </h3>
                <p className="text-lg">
                  Modern teknolojiler ve uzman kadromuzla en kaliteli hizmeti
                  sunarak, müşterilerimizin güvenini kazanmak ve sürdürmek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
