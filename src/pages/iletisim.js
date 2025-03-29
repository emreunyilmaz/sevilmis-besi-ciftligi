import PageHeader from "../components/PageHeader";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Iletisim() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // EmailJS'i başlat
    emailjs.init("C-zfuQybbx4icjyiw"); // EmailJS public key'inizi buraya yazın
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    emailjs
      .send(
        "service_nydfhcz", // EmailJS service ID'niz
        "template_qif8ctj", // EmailJS template ID'niz
        {
          to_email: "sevilmisbesiciftligi25@gmail.com",
          from_name: formData.user_name,
          from_email: formData.user_email,
          phone: formData.user_phone,
          message: formData.message,
        }
      )
      .then((result) => {
        setSubmitStatus("success");
        setFormData({
          user_name: "",
          user_email: "",
          user_phone: "",
          message: "",
        });
      })
      .catch((error) => {
        setSubmitStatus("error");
        console.error("Email gönderme hatası:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative w-full">
      <PageHeader
        title="İletişim"
        image="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div data-aos="fade-right">
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-12 text-center">
                  İletişim Bilgileri
                </h2>
                <div className="space-y-8 ">
                  <div className="flex  space-x-10">
                    <div className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-start">
                      <h3 className="font-semibold text-xl mb-2">Adres</h3>
                      <p className="text-gray-600 text-lg">
                      Ankara Mah. Ankara Cad. No:1
                      <br />
                        Çankaya /ANKARA
                      </p>
                    </div>
                  </div>

                  <div className="flex  space-x-10">
                    <div className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="text-start">
                      <h3 className="font-semibold text-xl mb-2">Telefon</h3>
                      <p className="text-gray-600 text-lg">
                        +90 (312) 123 45 67
                      </p>
                      <p className="text-gray-600 text-lg">
                        +90 (532) 123 45 67
                      </p>
                    </div>
                  </div>

                  <div className="flex  space-x-10">
                    <div className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-start">
                      <h3 className="font-semibold text-xl mb-2">E-posta</h3>
                      <p className="text-gray-600 text-lg">
                        info@besiciftligi.com
                      </p>
                    </div>
                  </div>

                  <div className="flex  space-x-10">
                    <div className="text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
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
                    <div className="text-start">
                      <h3 className="font-semibold text-xl mb-2">
                        Çalışma Saatleri
                      </h3>
                      <div className="text-gray-600 text-lg">
                        <p>Pazartesi - Cuma: 08:00 - 18:00</p>
                        <p>Cumartesi: 09:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div data-aos="fade-left">
            <div className="card bg-base-100 shadow-xl h-full">
              <div className="card-body">
                <h2 className="text-3xl font-bold mb-8">Bize Ulaşın</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">
                        Adınız Soyadınız
                      </span>
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full bg-white"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">
                        E-posta Adresiniz
                      </span>
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="input input-bordered w-full bg-white"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">
                        Telefon Numaranız
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      className="input input-bordered w-full bg-white"
                      placeholder="0(5XX) XXX XX XX"
                    />
                  </div>

                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-lg">Mesajınız</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="textarea textarea-bordered h-32 bg-white"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  {submitStatus === "success" && (
                    <div className="alert alert-success">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Mesajınız başarıyla gönderildi!</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="alert alert-error">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Bir hata oluştu. Lütfen tekrar deneyin.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-primary w-full text-white hover:bg-primary-dark transition-colors duration-300 ${
                      loading ? "loading" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Gönderiliyor..." : "Gönder"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Harita */}
        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Konum</h2>
          <div className="w-full h-[400px] bg-gray-200 rounded-lg">
            {/* Google Maps iframe'i buraya eklenecek */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12238.558696491959!2d32.85652678326537!3d39.92006900263553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xc3943d4d4626f358!2sK%C4%B1z%C4%B1lay%2C%20Ankara!5e0!3m2!1str!2str!4v1647095861540!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
