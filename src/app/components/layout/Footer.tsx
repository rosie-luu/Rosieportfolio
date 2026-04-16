import { Link } from "react-router";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/50 bg-slate-50/50 font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:flex md:items-center md:justify-between">
        
        {/* Left Side Message */}
        <div className="md:order-1 mb-8 md:mb-0">
          <p className="text-center md:text-left text-lg font-medium text-slate-800">
            Let's build the future of digital together.
          </p>
          <p className="text-center md:text-left text-sm text-slate-500 mt-2">
            &copy; 2026 Rosie Luu. Built with curiosity in Toronto.
          </p>
        </div>

        {/* Right Side Links */}
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://linkedin.com/in/llqn" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-500 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-5 w-5" aria-hidden="true" />
          </a>
          <a href="mailto:rosieluu2910@gmail.com" className="text-slate-400 hover:text-violet-500 transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
