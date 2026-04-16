import { motion } from "motion/react";
import { Download, GraduationCap, Briefcase } from "lucide-react";

export function Resume() {
  const experiences = [
    {
      year: "2024 - 2026",
      title: "Master of Digital Media",
      company: "Toronto Metropolitan University (TMU)",
      type: "education",
      details: [
        "Focused on Interaction Design, Creative AI, and Digital Product Strategy.",
        "Developed 'Alibi.ai', a speculative future product utilizing Sora AI to generate synthetic digital footprints.",
        "Designed and prototyped 'Launchpad', an interactive career simulation game.",
      ]
    },
    {
      year: "2023 - 2024",
      title: "Digital Marketing Specialist",
      company: "ohora USA",
      type: "work",
      details: [
        "Led cross-channel performance marketing strategies across Meta Ads and Google Ads.",
        "Built and nurtured a community of 2,000+ followers, achieving a 50% increase in Return on Ad Spend (ROI).",
        "Optimized e-commerce conversion funnels, directly impacting quarterly revenue growth.",
      ]
    },
    {
      year: "2022 - 2023",
      title: "B2B Marketing Lead",
      company: "ReferReach",
      type: "work",
      details: [
        "Spearheaded B2B lead generation campaigns for major trade events including the Singapore Business Show.",
        "Captured a record-breaking 50% conversion rate for enterprise networking signups.",
        "Streamlined the lead-capture flow and automated email nurturing sequences.",
      ]
    },
    {
      year: "2021 - 2022",
      title: "Postgraduate Digital Media Marketing",
      company: "George Brown College",
      type: "education",
      details: [
        "Specialized in advanced digital analytics, social media strategy, and paid media execution.",
        "Graduated with Honors.",
      ]
    },
    {
      year: "2019 - 2021",
      title: "User Acquisition Specialist",
      company: "VNG Corporation",
      type: "work",
      details: [
        "Engineered scalable user acquisition campaigns for top-tier esports and mobile game titles.",
        "Drove consistent 20-30% Month-over-Month (MoM) growth in Monthly Active Users (MAU).",
        "Conducted extensive A/B testing on ad creatives to lower Cost Per Install (CPI).",
      ]
    },
    {
      year: "2017 - 2021",
      title: "Bachelor of Marketing",
      company: "University of Economics Ho Chi Minh City (UEH)",
      type: "education",
      details: [
        "Built foundational knowledge in consumer behavior, traditional advertising, and market research.",
      ]
    }
  ];

  return (
    <div className="space-y-24 pb-24 font-sans relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <section className="pt-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            The <span className="text-orange-500">Journey</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            A comprehensive look at my professional and academic background, tracing the evolution from traditional marketing to creative technology.
          </p>
        </motion.div>
      </section>

      {/* Vertical Timeline */}
      <section className="relative">
        <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-slate-200" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-start ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 -ml-3 mt-1.5 w-6 h-6 rounded-full bg-white border-4 border-slate-200 shadow-sm z-10 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${exp.type === 'education' ? 'bg-orange-400' : 'bg-teal-400'}`} />
              </div>

              {/* Year Label */}
              <div className={`pl-12 md:pl-0 w-full md:w-1/2 flex ${idx % 2 === 0 ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16"} pt-1`}>
                <span className="text-lg font-bold text-slate-400 tracking-wider">
                  {exp.year}
                </span>
              </div>

              {/* Content Box */}
              <div className={`mt-4 md:mt-0 pl-12 md:pl-0 w-full md:w-1/2 ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-shadow duration-300 relative overflow-hidden group`}>
                  {/* Subtle Background Accent */}
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${exp.type === 'education' ? 'bg-orange-400' : 'bg-teal-400'}`} />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-xl ${exp.type === 'education' ? 'bg-orange-50 text-orange-600' : 'bg-teal-50 text-teal-600'}`}>
                      {exp.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                      {exp.title}
                    </h3>
                  </div>

                  <h4 className="text-lg font-bold text-slate-500 mb-6 uppercase tracking-wider">
                    {exp.company}
                  </h4>

                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.type === 'education' ? 'bg-orange-300' : 'bg-teal-300'}`} />
                        <span className="text-slate-600 font-medium leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-full bg-slate-900 text-white font-bold shadow-[0_10px_30px_rgba(15,23,42,0.3)] border border-slate-700 hover:bg-slate-800 transition-colors group"
      >
        <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
        <span className="hidden sm:inline">Download PDF</span>
      </motion.a>
    </div>
  );
}
