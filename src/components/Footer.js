import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo ve Sosyal Medya */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <Link to="/">
              <img
                src="/assets/logo.png"
                alt="Hertat Besi Çiftliği"
                className="w-24 h-24 lg:w-36 lg:h-36 object-contain"
              />
            </Link>
          </div>

          {/* İletişim Bilgileri */}
          <div className="text-center md:text-right">
            <p className="text-white/80 mb-2">
              Cumaköy Köyü Harkakası Mevkii 235/19
              <br />
              Kocaeli/Gebze
            </p>
            <p className="text-white/80 mb-2">+90 (539) 286 92 63 </p>
            <p className="text-white/80">hertatbesiciftligi@gmail.com</p>
            
            {/* Sosyal Medya İkonları */}
            <div className="flex justify-center md:justify-end gap-4 mt-4">
              <a
                href="https://www.instagram.com/hertat_besi_ciftligi?igsh=MWR2NmE2dGYwenZ2Ng=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61574735042960"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaSquareFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@hertatbesiciftligi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Kısım - Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex md:flex-row flex-col-reverse gap-4 justify-between px-4 py-6">
          <p className="text-white/60 text-sm flex justify-center items-center text-center">
            © {new Date().getFullYear()} Hertat Besi Çiftliği. Tüm hakları saklıdır.
          </p> 
          <div className="flex justify-center text-white/60 items-center">
            <a href="https://4peakdigital.com" target="_blank" className="text-white/60 text-sm text-center">
              <img src="/assets/4peak.png" className="max-w-20"/>
            </a>
            creation
          </div>
        </div>
      </div>
    </footer>
  );
}