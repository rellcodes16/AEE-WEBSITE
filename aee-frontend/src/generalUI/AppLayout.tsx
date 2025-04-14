import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import HeroSection from "../pages/home/HeroSection";
import Footer from "./Footer";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const location = useLocation(); 

  const isHomePage = location.pathname === "/";

  return (
<div className="grid grid-layout min-h-screen">
  {isSidebarOpen && (
    <div
      className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-opacity duration-300"
      onClick={() => setIsSidebarOpen(false)}
    />
  )}

  <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

  {isHomePage ? (
    <HeroSection toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
  ) : (
    <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
  )}

  <main className="overflow-auto bg-gray-100 col-end-[-1] p-0 m-0">
    <div className="max-w-[120rem] h-full flex flex-col bg-gray-100">
      <Outlet />
    </div>
  </main>

  <Footer />
</div>

  );
};

export default AppLayout;
