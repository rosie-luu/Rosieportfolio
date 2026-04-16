import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion, AnimatePresence } from "motion/react";

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-200 selection:text-teal-900" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Background ambient light */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-200/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] rounded-full bg-violet-200/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-orange-200/20 blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="pt-32 min-h-[calc(100vh-100px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
