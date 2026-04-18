import fs from 'fs';

let content = fs.readFileSync('/src/app/pages/Lab.tsx', 'utf8');

// Find the index of `const labCategories = [`
const startIdx = content.indexOf('const labCategories = [');

// Find the index of `];\n\nexport function Lab() {`
const endIdx = content.indexOf('];\n\nexport function Lab() {') + 2;

const newCategories = `const labCategories = [
  {
    title: "I. Capstone Project",
    subtitle: "Industry collaborations and major academic milestones.",
    projects: [
      {
        course: "Creative Execution",
        title: "The Moon Drawer | Industry Partnership: CyberTrophy",
        goal: "Crafting a 100-episode AR-driven narrative for a reflective digital experience.",
        descriptionTitle: "The Narrative",
        description: "In a world obsessed with speed, players collect quiet fragments of memory. This is not a journey of conquest, but of reflection.",
        insightTitle: "My Contribution",
        insight: [
          "Co-developed the 100-episode storyline and world-building logic.",
          "Concept sketching for Characters and Trophies.",
          "Used AI tools to generate 3D model bases and high-fidelity cover art.",
          "Collaborated with developers to implement AR mechanics into the app."
        ],
        tags: ["AR Technology", "Gen-AI", "Creative Writing"],
        theme: "rose" as ThemeType,
        icon: Sparkles,
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
        descriptionTitle: "The Experiment (Observation)",
        description: "I tested ElevenLabs' ability to generate cinematic sound effects based on physical and emotional triggers.",
        insightTitle: "Key Findings (The \\"Fail\\")",
        insight: [
          "Time-Blindness: AI failed to follow precise chronological cues (e.g., \\"3 seconds of silence before a crash\\").",
          "Keyword Override: Prompting a \\"glass drum set\\" resulted in wood-based sounds, showing a lack of material logic.",
          "Emotional Nuance: Models struggle to distinguish between a door closing \\"nervously\\" versus \\"angrily\\"."
        ],
        tags: ["ElevenLabs", "HeyGen", "Gemini"],
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
        descriptionTitle: "The Project",
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
        course: "Coursework",
        title: "AI Emotional Personality",
        goal: "To master 'Prompt Engineering' and create an AI interface with consistent, engaging behavior.",
        descriptionTitle: "The Project",
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
        course: "Coursework",
        title: "AI Tarot Reading",
        goal: "To design a narrative-driven AI experience using prompt structuring.",
        descriptionTitle: "The Project",
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
        course: "Coursework",
        title: "NPC Summoner",
        goal: "To generate living characters with distinct backstories for immersive environments.",
        descriptionTitle: "The Project",
        description: "Created an NPC Summoner tool that instantly generates rich character profiles, stats, and dialog styles based on minimal inputs.",
        insightTitle: "Execution",
        insight: "Prompt engineering combined with standard API parameters in Emergent.",
        tags: ["Prompt Engineering", "Emergent", "Game Mechanics"],
        theme: "mint" as ThemeType,
        icon: Gamepad2,
        image: imgNPC,
        link: "https://agent-builder.emergentagent.com/app/tools/6738b55694200c9e830e2f5f",
        linkText: "View Tool"
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
        descriptionTitle: "The Problem",
        description: "Pet shelters rely on donations, but complex or broken forms lead to 'donor drop-off.' I needed to create a flow that was both aesthetically welcoming and technically foolproof.",
        insightTitle: "The Technical Execution",
        insight: [
          "Designed a clean, empathetic UI/UX to build trust with potential donors.",
          "Developed a JavaScript-driven Donation Engine from scratch.",
          "Implemented Real-time Validation Logic: Error Prevention (handling empty fields/invalid emails) and Data Integrity (blocking letters, $0, or negative numbers to ensure clean transaction data)."
        ],
        tags: ["HTML", "CSS", "JavaScript"],
        theme: "mint" as ThemeType,
        icon: Layout,
        link: "https://zxm3332872-glitch.github.io/MetroPets/donation.html",
        linkText: "View Website"
      },
      {
        course: "Coursework",
        title: "ohora USA: Custom Web Feature",
        goal: "To understand the 'engine under the hood' of e-commerce by building a functional web component from scratch.",
        descriptionTitle: "The Project",
        description: "I developed a custom product feature section for ohora's website using HTML and CSS. This allowed me to go beyond drag-and-drop editors and gain full control over the layout.",
        insightTitle: "The Insight",
        insight: "This project sharpened my ability to communicate with developers and make quick, technical optimizations to marketing landing pages.",
        tags: ["HTML", "CSS", "Web Development"],
        theme: "peach" as ThemeType,
        icon: Code2,
        image: imgOhora
      },
      {
        course: "Coursework",
        title: "Yahoo.com: Homepage Redesign",
        goal: "To modernize a digital legacy brand for today's fast-paced users.",
        descriptionTitle: "The Project",
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
        course: "Coursework",
        title: "BarkBuddy: Pet Care App Prototype",
        goal: "To design a user-friendly mobile solution for the modern pet owner.",
        descriptionTitle: "The Project",
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
    title: "IV. Indie Game & Prototyping",
    subtitle: "Applying narrative logic and balancing to interactive experiences.",
    projects: [
      {
        course: "Interactive Media",
        title: "Launchpad: A Gig Economy Game",
        goal: "To simulate the life of a modern freelancer through a career-building game.",
        descriptionTitle: "The Project",
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
]`;

content = content.substring(0, startIdx) + newCategories + content.substring(endIdx);
fs.writeFileSync('/src/app/pages/Lab.tsx', content);
