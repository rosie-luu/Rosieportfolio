import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase, Award, Sparkles } from "lucide-react";
import { ReactNode } from "react";

const RESUME_LINK = "https://drive.google.com/file/d/1VA0tAa2ZYjrghcSCSuXh19q2xL3jChLg/view?usp=sharing";

// Theme definitions to avoid dynamic class issues in Tailwind
const themes = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-400",
    bullet: "bg-blue-300"
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-400",
    bullet: "bg-emerald-300"
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-400",
    bullet: "bg-violet-300"
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-400",
    bullet: "bg-rose-300"
  }
};

type ThemeType = keyof typeof themes;

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  bullets: ReactNode[];
}

function TimelineSection({ 
  title, 
  icon: Icon, 
  items, 
  themeName 
}: { 
  title: string; 
  icon: any; 
  items: TimelineItem[]; 
  themeName: ThemeType;
}) {
  const theme = themes[themeName];

  return (
    <section className="mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-10"
      >
        <div className={`p-3 rounded-2xl ${theme.bg} ${theme.text} shadow-sm border border-white`}>
          <Icon size={28} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
      </motion.div>

      <div className="relative">
        {/* The thin line on the left */}
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-200 shadow-sm" />

        <div className="space-y-16">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-10 md:pl-14"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full bg-white border-4 ${theme.border} shadow-sm z-10`} />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">{item.role}</h3>
                  <h4 className={`text-lg font-bold ${theme.text} mt-1 tracking-wide`}>{item.company}</h4>
                </div>
                <div className="shrink-0 mt-1 md:mt-0">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-sm font-bold text-slate-600 border border-slate-200/60 shadow-sm">
                    {item.period}
                  </span>
                </div>
              </div>

              {item.bullets.length > 0 && (
                <ul className="space-y-4 mt-5">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className={`mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${theme.bullet}`} />
                      <div className="text-slate-600 font-medium leading-relaxed text-[15px] md:text-base">
                        {bullet}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CTAButton = ({ text = "Download Full Resume" }: { text?: string }) => (
  <a
    href={RESUME_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-900 text-white font-bold shadow-[0_10px_30px_rgba(15,23,42,0.3)] hover:bg-slate-800 hover:shadow-[0_10px_40px_rgba(15,23,42,0.4)] transition-all duration-300 group hover:-translate-y-1"
  >
    <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
    <span>{text}</span>
  </a>
);

export function Resume() {
  const experienceData: TimelineItem[] = [
    {
      role: "Senior Influencer Marketing Specialist",
      company: "ohora USA",
      period: "Jan 2025 – Present",
      bullets: [
        <span key="1">Managed influencer-led e-commerce campaigns, achieving a <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">50%+ ROI</strong> and <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">30% MoM</strong> engagement growth.</span>,
        <span key="2">Scaled a dedicated UGC hub to <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">2,000+ followers</strong>, improving creator-product fit and conversion rates.</span>
      ]
    },
    {
      role: "Marketing Executive",
      company: "ReferReach / HashHire",
      period: "Aug 2023 – Dec 2024",
      bullets: [
        <span key="1">Optimized digital touchpoints and B2B content strategy, resulting in a <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">40% increase</strong> in CTR.</span>,
        <span key="2">Led on-site promotions at international trade shows, converting <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">50%</strong> of visitors into active app downloads.</span>
      ]
    },
    {
      role: "Marketing Executive",
      company: "VNG Corporation",
      period: "Apr 2022 – May 2023",
      bullets: [
        <span key="1">Orchestrated multi-channel strategies for gaming giants, achieving <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">5M+ reach</strong> and a <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">20-30% increase</strong> in MAU.</span>,
        <span key="2">Executed social listening and trend research to drive high-engagement activations with an average <strong className="font-extrabold text-slate-900 bg-emerald-100/50 px-1 py-0.5 rounded">6K CCU</strong>.</span>
      ]
    },
    {
      role: "Account Executive",
      company: "Circus Digital",
      period: "June 2021 – Apr 2022",
      bullets: [
        <span key="1">Managed Always-on (AWO) content and production for creative campaigns, ensuring quality and timeline across cross-functional teams.</span>,
        <span key="2">Coordinated with production houses and third-party vendors to deliver high-fidelity assets that met strict brand guidelines.</span>
      ]
    },
    {
      role: "Account Executive",
      company: "Wunderman Thompson",
      period: "Dec 2020 – June 2021",
      bullets: [
        <span key="1">Supported daily operations for global FMCG brands (Juicy Milk & Beverages), ensuring smooth campaign execution.</span>,
        <span key="2">Collaborated with Strategy and Media teams to produce data-driven post-campaign reports for key stakeholders.</span>
      ]
    }
  ];

  const educationData: TimelineItem[] = [
    {
      role: "Master of Digital Media",
      company: "Toronto Metropolitan University",
      period: "Expected Graduation 2026",
      bullets: [
        <span key="1">Focus: Interaction Design, Creative AI, and Narrative Production.</span>
      ]
    },
    {
      role: "Marketing Management - Digital Media (Post-grad)",
      company: "George Brown College",
      period: "2024 – 2025",
      bullets: [
        <span key="1">Focus: Omni-channel Marketing, SEO/SEM, and Digital Analytics.</span>
      ]
    },
    {
      role: "Bachelor of Marketing",
      company: "University of Economics Ho Chi Minh City",
      period: "2017 – 2021",
      bullets: []
    },
    {
      role: "High School",
      company: "Tran Dai Nghia High School for The Gifted",
      period: "2014 – 2017",
      bullets: []
    }
  ];

  const leadershipData: TimelineItem[] = [
    {
      role: "Event & Internal Relations",
      company: "Marketing Club of UEH (MarC)",
      period: "2018 – 2020",
      bullets: [
        <span key="1">Marketing 48H Challenge: Organized a large-scale marketing contest for over <strong className="font-extrabold text-slate-900 bg-rose-100/50 px-1 py-0.5 rounded">250 participants</strong>.</span>,
        <span key="2">Plasticphobia Campaign: Led a sustainability initiative reaching <strong className="font-extrabold text-slate-900 bg-rose-100/50 px-1 py-0.5 rounded">20,000+ people</strong> on social media and <strong className="font-extrabold text-slate-900 bg-rose-100/50 px-1 py-0.5 rounded">200+ offline</strong> participants.</span>,
        <span key="3">Managed sponsor relations and internal team activities to drive club engagement.</span>
      ]
    }
  ];

  const skillsData = [
    {
      category: "Strategy",
      items: ["Performance Marketing", "Influencer Strategy", "Campaign Planning"],
      theme: "emerald" as ThemeType
    },
    {
      category: "Technical",
      items: ["JavaScript", "HTML/CSS", "Shopify", "GA4", "Meta & Google Ads", "MailerLite"],
      theme: "blue" as ThemeType
    },
    {
      category: "Creative",
      items: ["Figma", "UX Optimization", "Content Production", "AI-assisted Design"],
      theme: "violet" as ThemeType
    }
  ];

  return (
    <div className="space-y-16 pb-32 font-sans relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <section className="pt-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 text-sm font-bold text-slate-700 mb-6 shadow-sm">
            <Sparkles size={16} className="text-orange-500" />
            Curriculum Vitae
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-500">Journey.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mb-10">
            A comprehensive look at my professional and academic background, tracing the evolution from traditional marketing to creative technology.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CTAButton />
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-4xl pt-8">
        <TimelineSection 
          title="1. Professional Experience" 
          icon={Briefcase} 
          items={experienceData} 
          themeName="emerald" 
        />

        <TimelineSection 
          title="2. Education" 
          icon={GraduationCap} 
          items={educationData} 
          themeName="blue" 
        />

        <TimelineSection 
          title="3. Leadership & Projects" 
          icon={Award} 
          items={leadershipData} 
          themeName="rose" 
        />

        {/* 4. Skills (Tag format) */}
        <section className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 rounded-2xl bg-violet-50 text-violet-600 shadow-sm border border-white">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">4. Skills</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillsData.map((skillGroup, idx) => {
              const theme = themes[skillGroup.theme];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                >
                  <h3 className={`text-xl font-extrabold ${theme.text} mb-6 tracking-wide`}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span 
                        key={i} 
                        className={`px-4 py-2 rounded-full text-sm font-bold bg-white border border-slate-200/60 shadow-sm text-slate-700 hover:-translate-y-0.5 transition-transform cursor-default`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pt-8 border-t border-slate-200 flex flex-col items-center text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Want a physical copy?</h2>
          <p className="text-slate-500 font-medium mb-8 max-w-md">Download my full resume as a PDF document for printing or offline reading.</p>
          <CTAButton text="Download Full Resume" />
        </section>
      </div>
    </div>
  );
}
