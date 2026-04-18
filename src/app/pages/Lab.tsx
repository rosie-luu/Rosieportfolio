import { motion } from "motion/react";
import { Code2, Layout, Smartphone, Shield, Bot, Gamepad2, Sparkles, Target, Lightbulb, PenTool, Image as ImageIcon, ExternalLink, Play, AudioLines, Video, Cpu, Figma, Box, Network, Database, FileCode2, Pen, Search } from "lucide-react";

// Project Images
import imgOhora from "../../imports/ohoralab.png";
import imgYahoo from "../../imports/yahoo.png";
import imgAlibi from "../../imports/Alibi.png";
import imgAIEmo from "../../imports/AIemotion.png";
import imgAITarot from "../../imports/AItarot.png";
import imgNPC from "../../imports/NPC.png";
import imgLaunchpad from "../../imports/Launchpad.png";
import imgBarkBuddy from "../../imports/BarkBuddy.png";
import imgMoonDrawer from "../../imports/moondrawer.png";
import imgMetroPets from "../../imports/Metropets.png";

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
    title: "I. Capstone Project",
    subtitle: "Industry collaborations and major academic milestones.",
    projects: [
      {
        course: "Creative Execution",
        title: "The Moon Drawer | Industry Partnership: CyberTrophy",
        goal: "Crafting a 100-episode AR-driven narrative for a reflective digital experience.",
        descriptionTitle: "The Context",
        description: "Designing a massive content ecosystem (100 episodes) for an AR app that balances reflective storytelling with game-based engagement.",
        insightTitle: "Strategic Insight",
        insight: [
          "Integrated **AI into the creative workflow**, allowing a small team of 3 to produce **high-fidelity assets at an industry-scale volume**."
        ],
        executionTitle: "Execution",
        execution: [
          "Co-developed the **100-episode storyline** and world-building logic.",
          "Concept sketching for **Characters and Trophies**.",
          "Used AI tools to generate **3D model bases** and high-fidelity cover art.",
          "Collaborated with developers to implement **AR mechanics** into the app."
        ],
        tags: [
          { name: "AR Technology", icon: Box },
          { name: "Gen-AI", icon: Sparkles },
          { name: "Creative Writing", icon: Pen }
        ],
        theme: "rose" as ThemeType,
        icon: Sparkles,
        image: imgMoonDrawer,
        link: "https://www.continuum.social/",
        linkText: "Live Demo"
      }
    ]
  },
  {
    title: "II. Creative AI & Future Concepts",
    subtitle: "Exploring how AI can enhance creativity and personal privacy.",
    projects: [
      {
        course: "Independent Researcher & Content Producer",
        title: "Stress-Testing ElevenLabs: The Limits of AI Sound Design",
        goal: "Investigating temporal reasoning and physical context in AI-generated Foley.",
        descriptionTitle: "The Context",
        description: "Investigating temporal reasoning and physical context in AI-generated Foley to test the limits of AI sound design.",
        insightTitle: "Strategic Insight",
        insight: [
          "Identified where AI sound tools fail, proving that human oversight is still essential for precise timing and emotional depth."
        ],
        executionTitle: "Execution",
        execution: [
          "Tested **ElevenLabs'** ability to generate cinematic sound effects based on physical and emotional triggers.",
          "Designed specific prompts requiring **chronological sequencing** and **material logic**.",
          "Used **HeyGen** to create a **video avatar** to present the concept and test results."
        ],
        tags: [
          { name: "ElevenLabs", icon: AudioLines },
          { name: "HeyGen", icon: Video },
          { name: "Gemini", icon: Bot }
        ],
        theme: "blue" as ThemeType,
        icon: Bot,
        video: {
          url: "https://youtu.be/Ohab1FQ-wGA",
          thumbnail: "https://img.youtube.com/vi/Ohab1FQ-wGA/hqdefault.jpg"
        }
      },
      {
        course: "Coursework",
        title: "Alibi.ai: A Concept for Future Privacy",
        goal: "To imagine a tool that helps users reclaim their privacy in an age of constant data tracking.",
        descriptionTitle: "The Context",
        description: "Alibi.ai is a conceptual service that creates a 'digital shadow' for you. It uses AI to simulate fake but realistic GPS data, phone usage patterns, and even generates 'proof' photos.",
        insightTitle: "Strategic Insight",
        insight: [
          "Explored how AI can be used to protect personal data rather than just collecting it, focusing on user safety."
        ],
        executionTitle: "Execution",
        execution: [
          "Used **Sora AI** to create a high-fidelity concept video demonstrating the service.",
          "Designed the service's mobile interface and user flow using **Figma**.",
          "Mapped out the **logical architecture** of how a 'digital shadow' would function."
        ],
        tags: [
          { name: "Sora AI", icon: Video },
          { name: "Figma", icon: Figma },
          { name: "Privacy Concept", icon: Shield }
        ],
        theme: "rose" as ThemeType,
        icon: Shield,
        image: imgAlibi,
        link: "https://alibiai.figma.site/",
        linkText: "View Concept Site"
      },
      {
        course: "Coursework",
        title: "AI Emotional Personality",
        goal: "To master 'Prompt Engineering' and create an AI interface with consistent, engaging behavior.",
        descriptionTitle: "The Context",
        description: "Built an AI Emotional Personality interface that responds with specific emotional traits and nuances, making the AI interaction feel more human and less robotic.",
        insightTitle: "Strategic Insight",
        insight: [
          "Created rules to keep AI personalities consistent, making digital interactions feel much more natural and human."
        ],
        executionTitle: "Execution",
        execution: [
          "Utilized **Emergent API** for backend tool building and prompt logic processing.",
          "Designed a responsive and thematic user interface in **Figma**.",
          "Iteratively tested and refined prompts to maintain **emotional consistency**."
        ],
        tags: [
          { name: "Prompt Engineering", icon: Bot },
          { name: "Emergent API", icon: Cpu },
          { name: "AI Interfaces", icon: Layout }
        ],
        theme: "blue" as ThemeType,
        icon: Bot,
        image: imgAIEmo,
        link: "https://driver-revel-34227233.figma.site/",
        linkText: "Try AI Interface"
      },
      {
        course: "Coursework",
        title: "AI Tarot Reading",
        goal: "To design a narrative-driven AI experience using prompt structuring.",
        descriptionTitle: "The Context",
        description: "Developed an AI Tarot Reading application that generates meaningful, thematic readings based on user inputs, focusing on storytelling and aesthetic formatting.",
        insightTitle: "Strategic Insight",
        insight: [
          "Built a system where the same data can be told through different perspectives without losing the original meaning."
        ],
        executionTitle: "Execution",
        execution: [
          "Designed an interactive, mystical interface entirely in **Figma**.",
          "Engineered **narrative-driven prompt structures** to guide the AI's interpretations.",
          "Implemented the **'Lenses' mechanic** to offer varying psychological perspectives."
        ],
        tags: [
          { name: "Prompt Engineering", icon: Bot },
          { name: "Figma", icon: Figma },
          { name: "Narrative Design", icon: Sparkles }
        ],
        theme: "lavender" as ThemeType,
        icon: Sparkles,
        image: imgAITarot,
        link: "https://finder-top-32263899.figma.site/",
        linkText: "Get a Reading"
      },
      {
        course: "Coursework",
        title: "NPC Summoner",
        goal: "To generate living characters with distinct backstories for immersive environments.",
        descriptionTitle: "The Context",
        description: "Created an NPC Summoner tool that instantly generates rich character profiles, stats, and dialog styles based on minimal inputs.",
        insightTitle: "Strategic Insight",
        insight: [
          "Used automation to speed up character creation, showing how to save time on large-scale creative projects."
        ],
        executionTitle: "Execution",
        execution: [
          "Combined **prompt engineering** with standard API parameters in **Emergent API**.",
          "Designed a streamlined input system for rapid **character generation**.",
          "Tested generated outputs to ensure consistency in **dialog styles and stats**."
        ],
        tags: [
          { name: "Prompt Engineering", icon: Bot },
          { name: "Emergent API", icon: Cpu },
          { name: "Game Mechanics", icon: Gamepad2 }
        ],
        theme: "mint" as ThemeType,
        icon: Target,
        image: imgNPC,
        link: "https://character-prompt-gen.preview.emergentagent.com/",
        linkText: "Summon NPC"
      }
    ]
  },
  {
    title: "III. Web Development & UX Design",
    subtitle: "Bridging the gap between marketing strategy and technical execution.",
    projects: [
      {
        course: "Frontend Developer & UX Designer",
        title: "MetroPets: Functional UX for Pet Adoption",
        goal: "Building a donor-centric web experience with robust JavaScript validation.",
        descriptionTitle: "The Context",
        description: "Pet shelters rely on donations, but complex or broken forms lead to 'donor drop-off.' I needed to create a flow that was both aesthetically welcoming and technically foolproof.",
        insightTitle: "Strategic Insight",
        insight: [
          "Designed a donation system that guides users and prevents mistakes, ensuring a smooth and trustworthy experience."
        ],
        executionTitle: "Execution",
        execution: [
          "Designed a welcoming **UX flow** specifically tailored for potential donors.",
          "Developed a **JavaScript-driven Donation Engine** from scratch.",
          "Implemented **real-time validation** to prevent empty fields, invalid emails, and negative numbers."
        ],
        tags: [
          { name: "HTML/CSS", icon: Code2 },
          { name: "JavaScript", icon: FileCode2 },
          { name: "UI/UX", icon: Layout }
        ],
        theme: "mint" as ThemeType,
        icon: Layout,
        image: imgMetroPets,
        link: "https://zxm3332872-glitch.github.io/MetroPets/donation.html",
        linkText: "View Website"
      },
      {
        course: "Coursework",
        title: "ohora USA: Custom Web Feature",
        goal: "To understand the 'engine under the hood' of e-commerce by building a functional web component from scratch.",
        descriptionTitle: "The Context",
        description: "I developed a custom product feature section for ohora's website using HTML and CSS. This allowed me to go beyond drag-and-drop editors and gain full control over the layout.",
        insightTitle: "Strategic Insight",
        insight: [
          "Used custom code to go beyond standard templates, giving the brand more flexibility and better performance."
        ],
        executionTitle: "Execution",
        execution: [
          "Referenced layouts from various top-tier beauty websites for **structural inspiration**.",
          "Custom-coded the entire feature section from scratch utilizing **HTML and CSS**.",
          "Ensured the new component integrated seamlessly with the **existing site architecture**."
        ],
        tags: [
          { name: "HTML/CSS", icon: Code2 },
          { name: "Web Development", icon: FileCode2 }
        ],
        theme: "peach" as ThemeType,
        icon: Code2,
        image: imgOhora
      },
      {
        course: "Coursework",
        title: "Yahoo.com: Homepage Redesign",
        goal: "To modernize a digital legacy brand for today's fast-paced users.",
        descriptionTitle: "The Context",
        description: "Using Figma, I re-engineered the layout of Yahoo's homepage. The focus was on improving the 'Information Hierarchy' - making sure the most important news and tools are easy to find without overwhelming the user.",
        insightTitle: "Strategic Insight",
        insight: [
          "Simplified a cluttered homepage to make it feel modern and easy for anyone to use."
        ],
        executionTitle: "Execution",
        execution: [
          "Created a comprehensive, interactive **Figma prototype** of the redesigned homepage.",
          "Conducted **usability testing sessions** to uncover navigation pain points and gather user insights.",
          "Iterated on the prototype design based on **direct user feedback**."
        ],
        tags: [
          { name: "Figma", icon: Figma },
          { name: "UI/UX", icon: Layout },
          { name: "Information Hierarchy", icon: Network }
        ],
        theme: "lavender" as ThemeType,
        icon: Layout,
        image: imgYahoo,
        link: "https://yahoo-homepage.figma.site/",
        linkText: "View Figma Site"
      },
      {
        course: "Coursework",
        title: "BarkBuddy: Pet Care App Prototype",
        goal: "To design a user-friendly mobile solution for the modern pet owner.",
        descriptionTitle: "The Context",
        description: "I created a high-fidelity prototype of 'BarkBuddy,' an app that centralizes pet health tracking and community connection. I handled everything from user research and wireframing to the final interactive prototype in Figma.",
        insightTitle: "Strategic Insight",
        insight: [
          "Organized complex features into a simple mobile app that feels intuitive and easy to navigate."
        ],
        executionTitle: "Execution",
        execution: [
          "Conducted initial **user research** to identify the core needs of modern pet owners.",
          "Created **wireframes** to map out the application's central user flows.",
          "Developed a final, high-fidelity **interactive prototype** within Figma, refining through usability testing."
        ],
        tags: [
          { name: "UX Research", icon: Search },
          { name: "Wireframing", icon: Box },
          { name: "Prototyping", icon: Figma }
        ],
        theme: "mint" as ThemeType,
        icon: Smartphone,
        image: imgBarkBuddy,
        link: "https://www.figma.com/proto/wq7PlQLL2oMvYGDVkZRmk2/BarkBuddy---A3?node-id=1-28&p=f&t=YeK2sk6WuicScXGZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A28",
        linkText: "Play Prototype"
      }
    ]
  },
  {
    title: "IV. Game & Prototyping",
    subtitle: "Applying narrative logic and balancing to interactive experiences.",
    projects: [
      {
        course: "Coursework",
        title: "Launchpad: A Gig Economy Game",
        goal: "To simulate the life of a modern freelancer through a career-building game.",
        descriptionTitle: "The Context",
        description: "In Launchpad, players must balance their personal bills and career growth with the success of their 'Co-working Hub.' It's a game about the gig economy, resource management, and community collaboration.",
        insightTitle: "Strategic Insight",
        insight: [
          "Designed game rules that make players feel connected to their community through shared goals."
        ],
        executionTitle: "Execution",
        execution: [
          "Utilized generative **AI tools** to rapidly produce diverse game assets and visuals.",
          "Used **Emergent API** for rapid prototyping and testing of core game mechanics.",
          "Designed and balanced the **resource management economy**."
        ],
        tags: [
          { name: "Game Design", icon: Gamepad2 },
          { name: "Emergent API", icon: Cpu },
          { name: "Resource Management", icon: Database }
        ],
        theme: "peach" as ThemeType,
        icon: Gamepad2,
        image: imgLaunchpad,
        link: "https://sira-narrative.preview.emergentagent.com/",
        linkText: "Play Launchpad"
      }
    ]
  }
];

const renderBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-extrabold text-slate-900">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};

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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Where <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">Research Meets Reality.</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl">
            A collection of experimental projects, industry collaborations, and technical deep-dives from my Master of Digital Media at TMU.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.projects.map((project: any, idx: number) => {
                const isFullWidth = category.projects.length % 2 !== 0 && idx === 0;

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`group flex flex-col ${isFullWidth ? 'lg:flex-row' : ''} rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ${isFullWidth ? 'lg:col-span-2' : ''}`}
                  >
                    {/* Dynamic Image Area */}
                    {project.video ? (
                      <div className={`relative ${isFullWidth ? 'w-full lg:w-5/12 lg:border-r lg:border-b-0 min-h-[300px]' : 'w-full aspect-video border-b'} bg-slate-900 border-slate-100 group/img flex items-center justify-center overflow-hidden shrink-0`}>
                        <a href={project.video.url} target="_blank" rel="noopener noreferrer" className="block relative w-full h-full cursor-pointer">
                          <img 
                            src={project.video.thumbnail} 
                            alt={project.title} 
                            className="w-full h-full absolute inset-0 object-cover transition-transform duration-700 group-hover/img:scale-[1.05] opacity-80 group-hover/img:opacity-100" 
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/20 group-hover/img:bg-transparent transition-colors duration-500">
                            <div className="w-16 h-16 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover/img:scale-110 transition-transform duration-500">
                              <Play size={28} className="ml-1" fill="currentColor" />
                            </div>
                          </div>
                        </a>
                        <div className={`absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white ${themes[project.theme as ThemeType].iconText} z-20 pointer-events-none`}>
                          <project.icon size={24} />
                        </div>
                      </div>
                    ) : project.image ? (
                      <div className={`relative overflow-hidden ${project.title.includes('BarkBuddy') ? 'bg-mint-50/50' : 'bg-slate-50/50'} border-slate-100 group/img flex items-center justify-center shrink-0 ${isFullWidth ? 'w-full lg:w-5/12 lg:border-r lg:border-b-0 min-h-[300px]' : 'w-full aspect-video border-b'}`}>
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`block relative w-full h-full cursor-pointer flex items-center justify-center ${project.title.includes('BarkBuddy') ? 'p-12 sm:p-16' : ''}`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={`block transition-transform duration-700 group-hover/img:scale-[1.03] ${project.title.includes('BarkBuddy') ? 'max-w-[200px] w-full h-auto object-contain mx-auto drop-shadow-xl relative z-10' : 'absolute inset-0 w-full h-full object-cover object-top'}`} 
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
                              className={`block transition-transform duration-700 group-hover/img:scale-[1.03] ${project.title.includes('BarkBuddy') ? 'max-w-[200px] w-full h-auto object-contain mx-auto drop-shadow-xl relative z-10' : 'absolute inset-0 w-full h-full object-cover object-top'}`} 
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
                      <div className={`relative shrink-0 p-6 sm:p-8 bg-slate-50/50 border-slate-100 ${isFullWidth ? 'w-full lg:w-5/12 lg:border-r lg:border-b-0 min-h-[300px]' : 'w-full aspect-video border-b'}`}>
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
                    <div className={`p-6 sm:p-8 flex flex-col grow ${isFullWidth ? 'lg:w-7/12 lg:justify-center' : 'w-full'}`}>
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100/80 text-slate-600 backdrop-blur-sm border border-slate-200/50 shadow-sm">
                          {project.course}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight group-hover:text-slate-800 transition-colors">
                        {project.title}
                      </h3>

                      <div className="space-y-6 grow">
                        {/* The Goal / Tagline */}
                        {project.goal && (
                          <div>
                            <p className="text-slate-700 font-bold leading-relaxed text-sm sm:text-base italic">
                              {project.goal}
                            </p>
                          </div>
                        )}

                        {/* The Description */}
                        {project.descriptionTitle && project.description && (
                          <div>
                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                              <PenTool size={14} className={themes[project.theme as ThemeType].iconText} />
                              {project.descriptionTitle}
                            </h4>
                            {Array.isArray(project.description) ? (
                              <ul className="list-disc list-outside pl-5 space-y-2 text-slate-600 leading-relaxed text-sm sm:text-base">
                                {project.description.map((item: string, i: number) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                {project.description}
                              </p>
                            )}
                          </div>
                        )}

                        {/* The Insight */}
                        {project.insightTitle && project.insight && (
                          <div className={`p-5 rounded-2xl ${themes[project.theme as ThemeType].bg} ${themes[project.theme as ThemeType].border} border`}>
                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                              <Lightbulb size={14} className={themes[project.theme as ThemeType].iconText} />
                              {project.insightTitle}
                            </h4>
                            {Array.isArray(project.insight) ? (
                              <ul className={`list-disc list-outside pl-4 space-y-2 text-sm leading-relaxed ${themes[project.theme as ThemeType].text}`}>
                                {project.insight.map((item: string, i: number) => (
                                  <li key={i} className="font-medium text-slate-700/90">{renderBoldText(item)}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className={`text-sm leading-relaxed font-medium text-slate-700/90 ${themes[project.theme as ThemeType].text}`}>
                                {renderBoldText(project.insight)}
                              </p>
                            )}
                          </div>
                        )}

                        {/* The Execution */}
                        {project.executionTitle && project.execution && (
                          <div className={`p-5 rounded-2xl bg-white/60 border-slate-200/60 border mt-auto`}>
                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                              <Target size={14} className={themes[project.theme as ThemeType].iconText} />
                              {project.executionTitle}
                            </h4>
                            {Array.isArray(project.execution) ? (
                              <ul className="list-disc list-outside pl-4 space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                                {project.execution.map((item: string, i: number) => (
                                  <li key={i}>{renderBoldText(item)}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                {renderBoldText(project.execution)}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Tools used / Tags */}
                      <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Tools:</span>
                        {project.tags.map((tag: any, i: number) => (
                          <span
                            key={i}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/60 border border-slate-200/60 text-xs font-bold text-slate-700 shadow-sm"
                          >
                            <tag.icon size={14} className={themes[project.theme as ThemeType].iconText} />
                            {tag.name}
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
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
