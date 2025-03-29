import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Kurumsal from "../pages/kurumsal";
import Galeri from "../pages/galeri";
import Iletisim from "../pages/iletisim";
import Bakim from "../pages/hizmetler/bakim";
import Beslenme from "../pages/hizmetler/beslenme";
import Yetistiricilik from "../pages/hizmetler/yetistiricilik";
import Hayvancilik from "../pages/hizmetler/hayvancilik";
import Navbar from "../components/Navbar";
import Blog from "../pages/blog";
import AdminLogin from "../pages/admin/login";
import AdminPanel from "../pages/admin/panel";
import BlogDetail from "../pages/blog/[id]";
import CustomCursor from "../components/CustomCursor";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CustomCursor />
      <Navbar />
      <div className="flex-grow flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurumsal" element={<Kurumsal />} />
            <Route path="/hizmetler/bakim" element={<Bakim />} />
            <Route path="/hizmetler/beslenme" element={<Beslenme />} />
            <Route path="/hizmetler/yetistiricilik" element={<Yetistiricilik />} />
            <Route path="/hizmetler/hayvancilik" element={<Hayvancilik />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/iletisim" element={<Iletisim />} />
            {/* <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} /> */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/panel" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppRouter;
