import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { initSmoothScrolling } from "../../lib/smoothScroll";

const MainLayout = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    initSmoothScrolling();
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      {/* Main content wrapper */}
      <div className="px-4 md:px-6 lg:px-8 pt-16">
        <main className="max-w-7xl mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
