import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Code2, Layout, Smartphone, Shield, Bot, Gamepad2, Sparkles, Target, Lightbulb, PenTool, Image as ImageIcon, ExternalLink } from "lucide-react";

// Project Images
import imgOhora from "../../imports/ohora_1.png";
import imgYahoo from "../../imports/image-1.png";
import imgAlibi from "../../imports/image-2.png";
import imgAIEmo from "../../imports/image-4.png";
import imgAITarot from "../../imports/image-5.png";
import imgNPC from "../../imports/image-6.png";
import imgLaunchpad from "../../imports/image-10.png";
import imgBarkBuddy from "../../imports/BarkBuddy.png";

type ThemeType = 'peach' | 'lavender' | 'mint' | 'rose' | 'blue';

const themes: Record<ThemeType, { bg: string; border: string; text: string; iconText: string; gradient: string; badge: string; placeholder: string; buttonHover: string }> = {
  peach: {
    bg: "bg-orange-50/60",
    border: "border-orange-200/60",
    text: "text-orange-900",
    iconText: "text-orange-500",
    gradient: "from-orange-100/50 to-rose-50/50",
    badge: "bg-orange-100/80 text-orange-800",
    placeholder: "border-orange-200",
    buttonHover: "hover:bg-orange-200"
  },
  lavender: {
    bg: "bg-violet-50/60",
    border: "border-violet-200/60",
    text: "text-violet-900",
    iconText: "text-violet-500",
    gradient: "from-violet-100/50 to-fuchsia-50/50",
    badge: "bg-violet-100/80 text-violet-800",
    placeholder: "border-violet-200",
    buttonHover: "hover:bg-violet-200"
  },
  mint: {
    bg: "bg-emerald-50/60",
    border: "border-emerald-200/60",
    text: "text-emerald-900",
    iconText: "text-emerald-500",
    gradient: "from-emerald-100/50 to-teal-50/50",
    badge: "bg-emerald-100/80 text-emerald-800",
    placeholder: "border-emerald-200",
    buttonHover: "hover:bg-emerald-200"
  },
  rose: {
    bg: "bg-rose-50/60",
    border: "border-rose-200/60",
    text: "text-rose-900",
    iconText: "text-rose-500",
    gradient: "from-rose-100/50 to-pink-50/50",
    badge: "bg-rose-100/80 text-rose-800",
    placeholder: "border-rose-200",
    buttonHover: "hover:bg-rose-200"
  },
  blue: {
    bg: "bg-blue-50/60",
    border: "border-blue-200/60",
    text: "text-blue-900",
    iconText: "text-blue-500",
    gradient: "from-blue-100/50 to-cyan-50/50",
    badge: "bg-blue-100/80 text-blue-800",
    placeholder: "border-blue-200",
    buttonHover: "hover:bg-blue-200"
  }
};

const labCategories = [
  {
    title: "I. Web Development & UX Design",
    subtitle: "Bridging the gap between marketing strategy and technical execution.",
    projects: [
      {
        course: "Basic Coding",
        title: "ohora USA: Custom Web Feature",
        goal: "To understand the 'engine under the hood' of e-commerce by building a functional web component from scratch.",
        description: "I developed a custom product feature section for ohora's website using HTML and CSS. This allowed me to go beyond drag-and-drop editors and gain full control over the layout.",
        insightTitle: "The Insight",
        insight: "This project sharpened my ability to communicate with developers and make quick, technical optimizations to marketing landing pages.",
        tags: ["HTML", "CSS", "Web Development"],
        theme: "peach" as ThemeType,
        icon: Code2,
        image: imgOhora
      },
      {
        course: "Interaction Design",
        title: "Yahoo.com: Homepage Redesign",
        goal: "To modernize a digital legacy brand for today's fast-paced users.",
        description: "Using Figma, I re-engineered the layout of Yahoo's homepage. The focus was on improving the 'Information Hierarchy' - making sure the most important news and tools are easy to find without overwhelming the user.",
        insightTitle: "The Insight",
        insight: "Good design isn't just about looks; it's about reducing 'clutter' so users can find what they need in seconds.",
        tags: ["Figma", "UI/UX", "Information Hierarchy"],
        theme: "lavender" as ThemeType,
        icon: Layout,
        image: imgYahoo,
        link: "https://yahoo-homepage.figma.site/",
        linkText: "View Figma Site"
      },
      {
        course: "UX Design",
        title: "BarkBuddy: Pet Care App Prototype",
        goal: "To design a user-friendly mobile solution for the modern pet owner.",
        description: "I created a high-fidelity prototype of 'BarkBuddy,' an app that centralizes pet health tracking and community connection. I handled everything from user research and wireframing to the final interactive prototype in Figma.",
        insightTitle: "The Insight",
        insight: "Focusing on the user journey helped me understand how to turn a complex set of needs into a simple, clickable experience.",
        tags: ["UX Research", "Wireframing", "Prototyping"],
        theme: "mint" as ThemeType,
        icon: Smartphone,
        image: imgBarkBuddy,
        link: "https://www.figma.com/proto/wq7PlQLL2oMvYGDVkZRmk2/BarkBuddy---A3?node-id=1-28&p=f&t=YeK2sk6WuicScXGZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A28",
        linkText: "Play Prototype"
      }
    ]
  },
  {
    title: "II. Creative AI & Future Concepts",
    subtitle: "Exploring how AI can enhance creativity and personal privacy.",
    projects: [
      {
        course: "Foundations of Digital Media",
        title: "Alibi.ai: A Concept for Future Privacy",
        goal: "To imagine a tool that helps users reclaim their privacy in an age of constant data tracking.",
        description: "Alibi.ai is a conceptual service that creates a 'digital shadow' for you. It uses AI to simulate fake but realistic GPS data, phone usage patterns, and even generates 'proof' photos (like a fake gym selfie) to keep your real location private.",
        insightTitle: "Execution",
        insight: "I used Sora AI to create a concept video and Figma to design the service's interface.",
        tags: ["Sora AI", "Figma", "Privacy Concept"],
        theme: "rose" as ThemeType,
        icon: Shield,
        image: imgAlibi,
        link: "https://alibiai.figma.site/",
        linkText: "View Concept Site"
      },
      {
        course: "Creative AI",
        title: "AI Emotional Personality",
        goal: "To master 'Prompt Engineering' and create an AI interface with consistent, engaging behavior.",
        description: "Built an AI Emotional Personality interface that responds with specific emotional traits and nuances, making the AI interaction feel more human and less robotic.",
        insightTitle: "Execution",
        insight: "Emergent for tool building and Figma for interface design.",
        tags: ["Prompt Engineering", "Emergent", "AI Interfaces"],
        theme: "blue" as ThemeType,
        icon: Bot,
        image: imgAIEmo,
        link: "https://driver-revel-34227233.figma.site/",
        linkText: "Try AI Interface"
      },
      {
        course: "Creative AI",
        title: "AI Tarot Reading",
        goal: "To design a narrative-driven AI experience using prompt structuring.",
        description: "Developed an AI Tarot Reading application that generates meaningful, thematic readings based on user inputs, focusing on storytelling and aesthetic formatting.",
        insightTitle: "Execution",
        insight: "Emergent for logical processing and Figma for the mystical interface.",
        tags: ["Prompt Engineering", "Emergent", "Narrative Design"],
        theme: "lavender" as ThemeType,
        icon: Sparkles,
        image: imgAITarot,
        link: "https://finder-top-32263899.figma.site/",
        linkText: "Get a Reading"
      },
      {
        course: "Creative AI",
        title: "NPC Summoner",
        goal: "To generate living characters with distinct backstories for immersive environments.",
        description: "Created an NPC Summoner tool that instantly generates rich character profiles, stats, and dialog styles based on minimal inputs.",
        insightTitle: "Execution",
        insight: "Prompt engineering combined with standard API parameters in Emergent.",
        tags: ["Prompt Engineering", "Emergent", "Game Mechanics"],
        theme: "rose" as ThemeType,
        icon: Target,
        image: imgNPC,
        link: "https://character-prompt-gen.preview.emergentagent.com/",
        linkText: "Summon NPC"
      }
    ]
  },
  {
    title: "III. Game Design",
    subtitle: "Applying game mechanics to understand real-world challenges.",
    projects: [
      {
        course: "Intro to Game Design",
        title: "Launchpad: The Freelance Economy Simulator",
        goal: "To simulate the life of a modern freelancer through a career-building game.",
        description: "In Launchpad, players must balance their personal bills and career growth with the success of their 'Co-working Hub.' It's a game about the gig economy, resource management, and community collaboration.",
        insightTitle: "Execution",
        insight: "I used AI tools for asset generation and Emergent for rapid game-mechanic testing.",
        tags: ["Game Design", "Emergent", "Resource Management"],
        theme: "peach" as ThemeType,
        icon: Gamepad2,
        image: imgLaunchpad,
        link: "https://sira-narrative.preview.emergentagent.com/",
        linkText: "Play Launchpad"
      }
    ]
  }
];

export function Lab() {
  return (
    <div className="space-y-20 pb-32 font-sans" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Header */}
      <section className="pt-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 text-sm font-bold text-slate-700 mb-6 shadow-sm">
            <Sparkles size={16} className="text-violet-500" />
            Toronto Metropolitan University — Master's Program
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">Creative Lab</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            A collection of my work where I experiment with AI, UX design, and coding to find new ways of digital storytelling and problem-solving. Bridging the gap between marketing strategy and technical execution.
          </p>
        </motion.div>
      </section>

      {/* Grouped Projects Sections */}
      <div className="space-y-32">
        {labCategories.map((category, catIdx) => (
          <section key={category.title} className="space-y-12">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-slate-200 pb-6"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">{category.title}</h2>
              <p className="text-lg text-slate-500 font-medium">{category.subtitle}</p>
            </motion.div>

            {/* Category Grid */}
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 2 }}>
              <Masonry gutter="2rem">
                {category.projects.map((project: any, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`group flex flex-col rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500`}
                  >
                    {/* Dynamic Image Area */}
                    {project.image ? (
                      <div className={`relative w-full overflow-hidden ${project.title.includes('BarkBuddy') ? 'bg-mint-50/50' : 'bg-slate-50/50'} border-b border-slate-100 group/img flex items-center justify-center`}>
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`block relative w-full h-full cursor-pointer flex items-center justify-center ${project.title.includes('BarkBuddy') ? 'p-12 sm:p-16' : ''}`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={`w-full block transition-transform duration-700 group-hover/img:scale-[1.03] ${project.title.includes('BarkBuddy') ? 'max-w-[200px] h-auto object-contain mx-auto drop-shadow-xl' : 'h-auto object-cover object-top'}`} 
                            />
                            {/* Permanent Click Indicator Top Right */}
                            <div className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-slate-900/40 backdrop-blur-md text-white rounded-full shadow-md group-hover/img:bg-slate-900 group-hover/img:scale-110 transition-all duration-300 z-20">
                              <ExternalLink size={18} />
                            </div>

                            {/* Hover Gradient & Floating "Visit Site" Tag */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10" />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-2.5 bg-white/95 backdrop-blur-md text-slate-900 text-sm font-bold rounded-full shadow-2xl transform translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-300 z-20 whitespace-nowrap">
                              {project.linkText} <ExternalLink size={16} />
                            </div>
                          </a>
                        ) : (
                          <div className={`block relative w-full h-full flex items-center justify-center ${project.title.includes('BarkBuddy') ? 'p-12 sm:p-16' : ''}`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={`w-full block transition-transform duration-700 group-hover/img:scale-[1.03] ${project.title.includes('BarkBuddy') ? 'max-w-[200px] h-auto object-contain mx-auto drop-shadow-xl' : 'h-auto object-cover object-top'}`} 
                            />
                          </div>
                        )}
                        
                        {/* Floating Theme Icon */}
                        <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white ${themes[project.theme as ThemeType].iconText} z-20 pointer-events-none`}>
                          <project.icon size={24} />
                        </div>
                      </div>
                    ) : (
                      // Fallback Placeholder if no image is provided
                      <div className={`relative w-full aspect-video p-6 sm:p-8 bg-slate-50/50 border-b border-slate-100`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${themes[project.theme as ThemeType].gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                        <div className={`relative w-full h-full rounded-2xl border-2 border-dashed ${themes[project.theme as ThemeType].placeholder} flex flex-col items-center justify-center text-center p-6 bg-white/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]`}>
                          <ImageIcon className={`w-12 h-12 mb-3 ${themes[project.theme as ThemeType].iconText} opacity-40`} />
                          <p className={`font-bold text-sm sm:text-base ${themes[project.theme as ThemeType].text} opacity-60`}>Project Visual</p>
                          <p className="text-xs text-slate-500 mt-1 max-w-[200px]">Space for {project.title.split(':')[0]} artwork</p>
                        </div>
                        <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white ${themes[project.theme as ThemeType].iconText}`}>
                          <project.icon size={24} />
                        </div>
                      </div>
                    )}

                    {/* Content Area */}
                    <div className="p-6 sm:p-8 flex flex-col grow">
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100/80 text-slate-600 backdrop-blur-sm border border-slate-200/50 shadow-sm">
                          {project.course}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-slate-800 transition-colors">
                        {project.title}
                      </h3>

                      <div className="space-y-6 grow">
                        {/* The Goal */}
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                            <Target size={14} className={themes[project.theme as ThemeType].iconText} />
                            The Goal
                          </h4>
                          <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                            {project.goal}
                          </p>
                        </div>

                        {/* The Project */}
                        <div>
                          <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                            <PenTool size={14} className={themes[project.theme as ThemeType].iconText} />
                            The Project
                          </h4>
                          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                            {project.description}
                          </p>
                        </div>

                        {/* The Insight / Execution */}
                        <div className={`p-5 rounded-2xl ${themes[project.theme as ThemeType].bg} ${themes[project.theme as ThemeType].border} border mt-auto`}>
                          <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">
                            <Lightbulb size={14} className={themes[project.theme as ThemeType].iconText} />
                            {project.insightTitle}
                          </h4>
                          <p className={`font-semibold text-sm sm:text-base leading-relaxed ${themes[project.theme as ThemeType].text}`}>
                            {project.insight}
                          </p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-100">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 rounded-lg bg-white/60 border border-slate-200/60 text-xs font-semibold text-slate-600 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Button for Links (Mobile Friendly & Explicit) */}
                      {project.link && (
                        <div className="mt-8">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${themes[project.theme as ThemeType].badge} ${themes[project.theme as ThemeType].buttonHover} hover:shadow-md border ${themes[project.theme as ThemeType].border}`}
                          >
                            {project.linkText} <ExternalLink size={18} />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </section>
        ))}
      </div>
    </div>
  );
}
