import { motion } from "motion/react";
import { ArrowRight, BarChart2, ShoppingCart, Users, PenTool, Sparkles, Layout as LayoutIcon } from "lucide-react";
import { Link } from "react-router";

// Project Images
import imgOhora from "../../imports/ohora_1.png";
import imgVal from "../../imports/image-3.png";
import imgSamsung from "../../imports/image-11.png";
import imgProfile from "../../imports/your-photo.jpg";

const projects = [
  {
    title: "ohora USA",
    category: "Influencer Marketing",
    image: imgOhora,
    stat: "+50% ROI",
    link: "/work",
  },
  {
    title: "VALORANT (VNG)",
    category: "Gaming Growth",
    image: imgVal,
    stat: "10M+ Impressions",
    link: "/work",
  },
  {
    title: "Samsung",
    category: "Creative Production",
    image: imgSamsung,
    stat: "High-Fidelity Assets",
    link: "/work",
  },
];

const skills = [
  { name: "Performance Marketing", detail: "Meta & Google Ads", icon: <BarChart2 size={24} />, color: "bg-teal-50 text-teal-700 border-teal-200" },
  { name: "E-commerce & Analytics", detail: "Shopify, GA4, & Website Optimization", icon: <ShoppingCart size={24} />, color: "bg-violet-50 text-violet-700 border-violet-200" },
  { name: "Influencer & Content Strategy", detail: "End-to-end Creator Management", icon: <Users size={24} />, color: "bg-orange-50 text-orange-700 border-orange-200" },
  { name: "Digital Design", detail: "Figma Prototyping & UX/UI", icon: <LayoutIcon size={24} />, color: "bg-rose-50 text-rose-700 border-rose-200" },
];



export function Home() {
  return (
    <div className="space-y-32 pb-24 font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50/80 border border-green-200/50 text-base font-semibold text-green-700 mb-8 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Available for freelance & full-time roles
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              I'm Rosie Luu — <br />
              Marketing Strategist <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-violet-500 to-orange-400">
                & Creative Explorer.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-10 font-light">
              A digital marketer focused on performance growth and creative experimentation. Currently pursuing a Master of Digital Media in Toronto.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/work" className="group flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-[0_4px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_4px_25px_rgba(15,23,42,0.25)] hover:-translate-y-0.5">
                View Case Studies
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/lab" className="group flex items-center gap-2 px-7 py-3.5 bg-white/60 backdrop-blur-md border border-slate-200 text-slate-800 rounded-full font-medium hover:bg-white hover:border-slate-300 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:-translate-y-0.5">
                Explore The Lab
                <Sparkles size={18} className="text-violet-500" />
              </Link>
            </div>
          </motion.div>

          {/* Personal Photo & About Me Snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/60 bg-slate-100 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={imgProfile} 
                alt="Rosie Luu" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating About Me Badge */}
            <div className="absolute -bottom-8 -left-8 sm:-left-12 p-6 bg-white/90 backdrop-blur-xl border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-3xl max-w-[90%] sm:max-w-xs z-10 hidden sm:block">
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                "Bridging the gap between performance and creativity."
              </p>
            </div>
          </motion.div>

        </div>
      </section>



      {/* About Me Details Section */}
      <section className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-10 h-10 mx-auto text-violet-400 mb-6" />
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed font-medium">
            With over 5 years of experience in the Asian and North American markets, I’ve helped global brands scale through data-backed strategies. From driving 50% ROI in e-commerce to managing 10M+ impressions in gaming, I thrive where performance meets creativity.
          </p>
        </motion.div>
      </section>

      {/* Toolkit */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Toolkit & Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-start gap-5 p-6 rounded-3xl border bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all ${skill.color}`}
            >
              <div className="p-3 bg-white rounded-2xl shadow-sm">
                {skill.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-slate-900">{skill.name}</h3>
                <p className="text-slate-600 font-medium">{skill.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Endeavors */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">Featured Endeavors</h2>
            <p className="text-lg text-slate-500 font-medium">Big Brands, Measurable Impact.</p>
          </div>
          <Link to="/work" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors">
            View all work <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
            >
              <Link to={project.link} className="group block relative rounded-[2rem] overflow-hidden bg-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)]">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Card Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-end mb-4">
                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white shadow-sm">
                          {project.category}
                        </span>
                        <div className="bg-white text-slate-900 px-3 py-1.5 rounded-xl text-sm font-extrabold shadow-lg">
                          {project.stat}
                        </div>
                      </div>
                      <h3 className="text-3xl font-extrabold text-white leading-tight mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 text-white/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        View Case Study <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
