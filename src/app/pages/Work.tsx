import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Users, TrendingUp, Video, MonitorPlay, Zap, Megaphone, Smartphone, Star, Image as ImageIcon, Briefcase, Award, CheckCircle2, Play, Maximize2, X } from "lucide-react";

// Yomost: #RapCungIdol TikTok Challenge
import yomost1 from "../../imports/image.png";
import yomost2 from "../../imports/image-1.png";
import yomost3 from "../../imports/image-2.png";

// VALORANT: '1 YEAR' Anniversary Campaign
import val1 from "../../imports/image-3.png";
import val2 from "../../imports/image-4.png";
import val3 from "../../imports/image-5.png";
import val4 from "../../imports/image-6.png";

// ohora USA: Monthly Creator Seeding
import ohora1 from "../../imports/ohora_1.png";
import ohora2 from "../../imports/ohora_2.png";

// ReferReach: The Singapore Business Show
import tbs1 from "../../imports/tbs_1.jpg";
import tbs2 from "../../imports/tbs_2.jpg";

// VALORANT: Content Series & Early Access
import valSeries1 from "../../imports/image-7.png";
import valSeries2 from "../../imports/image-8.png";
import valSeries3 from "../../imports/image-9.png";
import valSeries4 from "../../imports/image-10.png";

// Samsung Ecosystem: Always-On Strategy
import ss1 from "../../imports/image-11.png";
import ss2 from "../../imports/image-12.png";

// Yomost: Always-On Content Framework
import ym1 from "../../imports/image-14.png";

type ThemeType = 'peach' | 'lavender' | 'mint' | 'rose' | 'blue';

const themes: Record<ThemeType, { bg: string; border: string; text: string; iconText: string; gradient: string; badge: string }> = {
  peach: {
    bg: "bg-orange-50",
    border: "border-orange-200",
    text: "text-orange-900",
    iconText: "text-orange-500",
    gradient: "from-orange-100 to-rose-50",
    badge: "bg-orange-100 text-orange-800"
  },
  lavender: {
    bg: "bg-violet-50",
    border: "border-violet-200",
    text: "text-violet-900",
    iconText: "text-violet-500",
    gradient: "from-violet-100 to-fuchsia-50",
    badge: "bg-violet-100 text-violet-800"
  },
  mint: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-900",
    iconText: "text-emerald-500",
    gradient: "from-emerald-100 to-teal-50",
    badge: "bg-emerald-100 text-emerald-800"
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-900",
    iconText: "text-rose-500",
    gradient: "from-rose-100 to-pink-50",
    badge: "bg-rose-100 text-rose-800"
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-900",
    iconText: "text-blue-500",
    gradient: "from-blue-100 to-cyan-50",
    badge: "bg-blue-100 text-blue-800"
  }
};

const categories = [
  {
    title: "I. Integrated & High-Impact Campaigns",
    subtitle: "Massive reach, big brands, and complex execution.",
    projects: [
      {
        title: "VALORANT: '1 YEAR' Anniversary Campaign",
        brand: "VALORANT (VNG / Riot Games)",
        role: "Project Owner (Influencer)",
        impact: "A multi-channel celebration that solidified VALORANT's community dominance in Vietnam.",
        scope: [
          "Developed and executed the influencer promotion plan based on a 2-month marketing roadmap.",
          "Collaborated with Internal teams and External agencies for 360-degree coverage.",
          "Managed high-profile asset production, including TVC reactions and hashtag challenge seeding videos."
        ],
        results: [
          "10M+ Impressions across all influencer-led content.",
          "Successfully synchronized 50+ top-tier streamers and TikTokers for a unified launch."
        ],
        mainMetric: "10M+",
        metricLabel: "Impressions",
        theme: "rose" as ThemeType,
        icon: Target,
        media: {
          type: "grid-4",
          images: [val1, val2, val3, val4]
        }
      },
      {
        title: "Yomost: #RapCungIdol TikTok Challenge",
        brand: "Yomost (FMCG)",
        role: "Account Executive",
        impact: "One of the successful TikTok challenges in the region, achieving massive viral growth.",
        scope: [
          "Supervised creative execution for 15s promotion clips and brand takeover assets.",
          "Coordinated with music composers, visualizers, and production houses to ensure a high-energy Gen Z vibe.",
          "Managed ongoing campaign social content and real-time performance tracking."
        ],
        results: [
          "837M Total Views and 26M Reach.",
          "160,000+ User-Generated Videos created, driving peak brand sentiment."
        ],
        mainMetric: "837M",
        metricLabel: "Total Views",
        theme: "peach" as ThemeType,
        icon: Zap,
        media: {
          type: "mixed-yomost",
          images: [yomost1, yomost2],
          video: {
            url: "https://www.youtube.com/watch?v=Mi1t0Ehz2OY",
            thumbnail: "https://img.youtube.com/vi/Mi1t0Ehz2OY/hqdefault.jpg"
          }
        }
      },
      {
        title: "ohora USA: Monthly Creator Seeding",
        brand: "ohora USA (E-commerce)",
        role: "Senior Influencer Specialist",
        impact: "Scale brand awareness and drive sales in the US market through cost-efficient influencer seeding.",
        scope: [
          "Designed a high-volume monthly free seeding framework, optimizing the 'Product-for-Content' model.",
          "Define outreach criteria and develop content guidelines for organic creators.",
          "Managed influencer recruitment, content quality checks, and cross-departmental logistics.",
          "Integrated UGC into owned channels and transitioned top performers into the Affiliate program."
        ],
        results: [
          "50%+ Campaign ROI with $60,000 in monthly sales from 90+ affiliates.",
          "Scaled content production to 700–1,000 pieces per month, reaching an average of 1M views.",
          "Built a dedicated UGC hub with 2,000+ followers from scratch."
        ],
        mainMetric: "50%+",
        metricLabel: "Campaign ROI",
        theme: "lavender" as ThemeType,
        icon: Users,
        media: {
          type: "grid-2",
          images: [ohora1, ohora2]
        }
      }
    ]
  },
  {
    title: "II. Strategic Brand Management & Production",
    subtitle: "The 'Pro' factor: Consistency, high-fidelity assets, and long-term strategy.",
    projects: [
      {
        title: "Samsung AC: WindFree™ Music Video",
        brand: "Samsung Air Conditioner",
        role: "Account Executive",
        impact: "Merging entertainment with product features to drive digital engagement for a high-involvement product.",
        scope: [
          "Briefed Creative teams on brand objectives and translated technical features into artistic concepts.",
          "Managed the end-to-end production pipeline: Scripting, storyboarding, shooting, and post-production.",
          "Acted as the primary bridge between Samsung and the production house/visualizers."
        ],
        results: [
          "Successfully launched a high-fidelity Music Video that served as the hero asset for the digital campaign."
        ],
        mainMetric: "Hero MV",
        metricLabel: "Digital Campaign Asset Launched",
        theme: "mint" as ThemeType,
        icon: Video,
        media: {
          type: "video",
          url: "https://www.youtube.com/watch?v=Ug5pGSXiuNE",
          thumbnail: "https://img.youtube.com/vi/Ug5pGSXiuNE/hqdefault.jpg"
        }
      },
      {
        title: "Samsung Ecosystem: Always-On Strategy",
        brand: "Samsung (Tech)",
        role: "Account Executive",
        impact: "Sustaining brand premiumness through high-quality localized content and daily community management.",
        scope: [
          "Social Photoshoot: Managed a massive production of 40+ high-res photos covering 20+ lifestyle and product angles.",
          "Always-On: Developed monthly content frameworks and calendars based on global tech trends.",
          "Handled daily execution and performance management to ensure all KPIs were met."
        ],
        results: [
          "80K Average Impressions and 7K Average Engagement per month.",
          "Seamlessly adapted Global assets for the local market while maintaining 'Global-Standard' quality."
        ],
        mainMetric: "80K",
        metricLabel: "Avg. Monthly Impressions",
        theme: "blue" as ThemeType,
        icon: MonitorPlay,
        media: {
          type: "mixed-samsung",
          images: [ss1],
          video: {
            url: "https://www.youtube.com/watch?v=xRXRbfa2W-w",
            thumbnail: "https://img.youtube.com/vi/xRXRbfa2W-w/hqdefault.jpg"
          }
        }
      },
      {
        title: "Yomost: Always-On Content Framework",
        brand: "Yomost (FMCG)",
        role: "Account Executive",
        impact: "Keeping the brand relevant to Gen Z through trend-jacking and consistent social storytelling.",
        scope: [
          "Developed monthly content frameworks based on viral trends and seasonal occasions.",
          "Supervised creative execution and monthly footage shooting with production houses."
        ],
        results: [
          "Maintained an average of 1M Views and 15K Engagements per month."
        ],
        mainMetric: "1M",
        metricLabel: "Avg. Monthly Views",
        theme: "peach" as ThemeType,
        icon: Megaphone,
        media: {
          type: "fb-video",
          url: "https://www.facebook.com/yomost/videos/390390998903545",
          thumbnail: ym1
        }
      }
    ]
  },
  {
    title: "III. Niche Community & Event Success",
    subtitle: "The 'Tactical' factor: Precision targeting and conversion.",
    projects: [
      {
        title: "VALORANT: Content Series & Early Access",
        brand: "VALORANT (VNG / Riot)",
        role: "Project Owner",
        impact: "Achieved massive engagement and views for major game updates through exclusive access events.",
        scope: [
          "Guessing Your Rank: Created a monthly interactive series featuring hot streamers.",
          "Early Capture Events: Provided influencers with exclusive access to new updates (Agents/Maps)."
        ],
        results: [
          "15K Peak Concurrent Users (PCU).",
          "3M Average Views per update event with zero booking fees."
        ],
        mainMetric: "15K",
        metricLabel: "Peak Concurrent Users",
        theme: "rose" as ThemeType,
        icon: Star,
        media: {
          type: "mixed-val",
          video: { 
            url: "https://www.youtube.com/watch?v=z2u-_ikqY7s", 
            thumbnail: "https://img.youtube.com/vi/z2u-_ikqY7s/hqdefault.jpg" 
          },
          images: [valSeries1, valSeries2, valSeries3, valSeries4]
        }
      },
      {
        title: "ReferReach: The Singapore Business Show",
        brand: "ReferReach (B2B)",
        role: "Marketing Specialist",
        impact: "Turning event foot traffic into measurable app growth.",
        scope: [
          "Executed the 'Networking Board' concept and managed on-site customer acquisition."
        ],
        results: [
          "Converted 50% of booth visitors (approx. 400 people) into immediate app downloads."
        ],
        mainMetric: "50%",
        metricLabel: "Booth Conversion Rate",
        theme: "lavender" as ThemeType,
        icon: Smartphone,
        media: {
          type: "grid-2",
          images: [tbs1, tbs2]
        }
      },
      {
        title: "AIA: Life Advisor Inspiration Series",
        brand: "AIA (Insurance)",
        role: "Account Executive",
        impact: "Professionalizing digital recruitment for a new 100% online sales channel.",
        scope: [
          "Supervised the production of 3 hero inspiration videos and 6 cutdown versions."
        ],
        results: [
          "Delivered high-quality assets that met AIA's strict corporate storytelling and VO requirements."
        ],
        mainMetric: "3 Hero",
        metricLabel: "Inspiration Videos Produced",
        theme: "mint" as ThemeType,
        icon: TrendingUp,
        media: {
          type: "videos-3",
          videos: [
            { url: "https://www.youtube.com/watch?v=CFg3JYEi0wM", thumbnail: "https://img.youtube.com/vi/CFg3JYEi0wM/hqdefault.jpg" },
            { url: "https://www.youtube.com/watch?v=vRBqrr7d_Ro", thumbnail: "https://img.youtube.com/vi/vRBqrr7d_Ro/hqdefault.jpg" },
            { url: "https://www.youtube.com/watch?v=ipTCO8Rtyrc", thumbnail: "https://img.youtube.com/vi/ipTCO8Rtyrc/hqdefault.jpg" }
          ]
        }
      }
    ]
  }
];

const clients = ["Riot Games", "Samsung", "ohora USA", "Yomost", "... and more"];

// Reusable image component with physical hover scale & full-screen Lightbox
const MediaImage = ({ img, alt, onOpen }: { img: string, alt: string, onOpen: () => void }) => (
  <div 
    className="relative w-full h-full rounded-[1.5rem] bg-slate-900 shadow-sm border border-slate-200/40 z-0 hover:z-40 transition-all duration-500 hover:scale-[1.1] sm:hover:scale-[1.3] md:hover:scale-[1.5] hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] group cursor-zoom-in"
    onClick={onOpen}
  >
    {/* Base cropped image - fades out on hover */}
    <img 
      src={img} 
      alt={alt} 
      className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] transition-opacity duration-300 group-hover:opacity-0" 
    />
    
    {/* Uncropped object-contain version - fades in on hover inside the dynamically enlarged box */}
    <img 
      src={img} 
      alt={`${alt} Full`} 
      className="absolute inset-0 w-full h-full object-contain rounded-[1.5rem] transition-opacity duration-300 opacity-0 group-hover:opacity-100 p-2 sm:p-3" 
    />

    {/* Lightbox hint icon */}
    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-lg">
      <Maximize2 size={18} />
    </div>
  </div>
);

export function Work() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const renderMedia = (project: any) => {
    if (!project.media) {
      return (
        <div className={`relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border-2 border-dashed ${themes[project.theme as ThemeType].border} flex flex-col items-center justify-center text-center p-8 group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white/40`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${themes[project.theme as ThemeType].gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
          <ImageIcon className={`w-16 h-16 mb-4 ${themes[project.theme as ThemeType].iconText} opacity-40 group-hover:scale-110 transition-transform duration-500`} />
          <p className={`font-bold text-lg ${themes[project.theme as ThemeType].text} opacity-60`}>Image Placeholder</p>
          <p className="text-sm text-slate-500 mt-2 text-balance max-w-[250px]">Space for {project.brand} campaign artwork</p>
        </div>
      );
    }

    if (project.media.type === 'video') {
      return (
        <a href={project.media.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] w-full block rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group bg-slate-900">
          <img src={project.media.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <Play className="ml-1.5" size={36} fill="currentColor" />
            </div>
          </div>
        </a>
      );
    }

    if (project.media.type === 'videos-3') {
      return (
        <div className="flex flex-col gap-3 w-full">
          {/* Main Video */}
          <a href={project.media.videos[0].url} target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full block rounded-[2rem] overflow-hidden shadow-md group bg-slate-900">
            <img src={project.media.videos[0].thumbnail} alt="Video 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play className="ml-1.5" size={32} fill="currentColor" />
              </div>
            </div>
          </a>
          
          {/* Two Smaller Videos */}
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map((idx) => (
              <a key={idx} href={project.media.videos[idx].url} target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full block rounded-2xl sm:rounded-[1.5rem] overflow-hidden shadow-sm group bg-slate-900">
                <img src={project.media.videos[idx].thumbnail} alt={`Video ${idx+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <Play className="ml-1" size={24} fill="currentColor" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    }

    if (project.media.type === 'mixed-val') {
      return (
        <div className="flex flex-col gap-3 w-full">
          {/* Video Block */}
          <a href={project.media.video.url} target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full block rounded-[2rem] overflow-hidden shadow-md group bg-slate-900">
            <img src={project.media.video.thumbnail} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play className="ml-1.5" size={32} fill="currentColor" />
              </div>
            </div>
          </a>
          
          {/* Image Grid 2x2 */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-video sm:aspect-[2/1] w-full">
            {project.media.images.map((img: string, i: number) => (
              <MediaImage key={i} img={img} alt={`Early Access ${i + 1}`} onOpen={() => setSelectedImg(img)} />
            ))}
          </div>
        </div>
      );
    }

    if (project.media.type === 'grid-4') {
      return (
        <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-[4/5] sm:aspect-[3/4] w-full">
          {project.media.images.map((img: string, i: number) => (
            <MediaImage key={i} img={img} alt={`${project.title} ${i + 1}`} onOpen={() => setSelectedImg(img)} />
          ))}
        </div>
      );
    }

    if (project.media.type === 'mixed-yomost') {
      return (
        <div className="grid grid-cols-2 gap-3 aspect-[4/3] sm:aspect-[5/4] w-full">
          <div className="h-full w-full">
            <MediaImage img={project.media.images[0]} alt={`${project.title} 1`} onOpen={() => setSelectedImg(project.media.images[0])} />
          </div>
          <div className="grid grid-rows-2 gap-3">
            <a href={project.media.video.url} target="_blank" rel="noopener noreferrer" className="relative w-full h-full block rounded-[1.5rem] overflow-hidden shadow-md group bg-slate-900">
              <img src={project.media.video.thumbnail} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Play className="ml-1" size={24} fill="currentColor" />
                </div>
              </div>
            </a>
            <MediaImage img={project.media.images[1]} alt={`${project.title} 2`} onOpen={() => setSelectedImg(project.media.images[1])} />
          </div>
        </div>
      );
    }

    if (project.media.type === 'mixed-samsung') {
      return (
        <div className="flex flex-col gap-3 w-full">
          <a href={project.media.video.url} target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full block rounded-[1.5rem] overflow-hidden shadow-md group bg-slate-900">
            <img src={project.media.video.thumbnail} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play className="ml-1.5" size={32} fill="currentColor" />
              </div>
            </div>
          </a>
          <div className="relative aspect-video w-full">
            <MediaImage img={project.media.images[0]} alt={`${project.title} 1`} onOpen={() => setSelectedImg(project.media.images[0])} />
          </div>
        </div>
      );
    }

    if (project.media.type === 'grid-3') {
      return (
        <div className="grid grid-cols-2 gap-3 aspect-[4/3] w-full">
          <MediaImage img={project.media.images[0]} alt={`${project.title} 1`} onOpen={() => setSelectedImg(project.media.images[0])} />
          <div className="grid grid-rows-2 gap-3">
            <MediaImage img={project.media.images[1]} alt={`${project.title} 2`} onOpen={() => setSelectedImg(project.media.images[1])} />
            <MediaImage img={project.media.images[2]} alt={`${project.title} 3`} onOpen={() => setSelectedImg(project.media.images[2])} />
          </div>
        </div>
      );
    }

    if (project.media.type === 'grid-2') {
      return (
        <div className="grid grid-cols-2 gap-3 aspect-[4/3] w-full">
          <MediaImage img={project.media.images[0]} alt={`${project.title} 1`} onOpen={() => setSelectedImg(project.media.images[0])} />
          <MediaImage img={project.media.images[1]} alt={`${project.title} 2`} onOpen={() => setSelectedImg(project.media.images[1])} />
        </div>
      );
    }

    if (project.media.type === 'single') {
      return (
        <div className="aspect-[4/3] w-full">
          <MediaImage img={project.media.images[0]} alt={`${project.title}`} onOpen={() => setSelectedImg(project.media.images[0])} />
        </div>
      );
    }

    if (project.media.type === 'fb-video') {
      return (
        <a href={project.media.url} target="_blank" rel="noopener noreferrer" className="relative aspect-[4/3] w-full block rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group bg-slate-900">
          <img src={project.media.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors duration-500 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 backdrop-blur-md text-rose-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
              <Play className="ml-1.5" size={36} fill="currentColor" />
            </div>
          </div>
        </a>
      );
    }

    return null;
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-24 font-sans relative" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      
      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-xl p-4 sm:p-8 md:p-16 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors z-50"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg} 
              alt="Full size view" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default" 
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <section className="pt-12 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Campaign <span className="text-teal-500">Case Studies</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            From integrated digital campaigns to high-fidelity brand productions and niche community events, here is how I drive measurable growth and conversion.
          </p>
        </motion.div>
      </section>

      {/* Categories & Projects */}
      <div className="space-y-32">
        {categories.map((category, catIdx) => (
          <section key={category.title} className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border-b border-slate-200 pb-8"
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{category.title}</h2>
              <p className="text-lg text-slate-500 font-medium">{category.subtitle}</p>
            </motion.div>

            <div className="space-y-24">
              {category.projects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start relative z-10`}
                >
                  {/* Image/Media Side */}
                  <div className="w-full lg:w-1/2 sticky top-24">
                    {renderMedia(project)}
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6 pt-4">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${themes[project.theme as ThemeType].badge}`}>
                        <Briefcase size={14} /> {project.brand}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                        <Award size={14} /> {project.role}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      {project.impact}
                    </p>

                    <div className="space-y-6 pt-6 border-t border-slate-100">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Scope of Work</h4>
                        <ul className="space-y-3">
                          {project.scope.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
                              <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${themes[project.theme as ThemeType].iconText}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Key Results</h4>
                        <ul className="space-y-3">
                          {project.results.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-800 font-semibold text-sm md:text-base leading-relaxed">
                              <TrendingUp size={18} className={`mt-0.5 shrink-0 ${themes[project.theme as ThemeType].iconText}`} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Metric Card */}
                    <div className={`mt-8 relative overflow-hidden rounded-[1.5rem] border ${themes[project.theme as ThemeType].bg} ${themes[project.theme as ThemeType].border} p-6 sm:p-8 backdrop-blur-md flex items-center gap-6 shadow-sm`}>
                      <div className={`p-4 rounded-xl bg-white/80 shadow-sm shrink-0 ${themes[project.theme as ThemeType].iconText}`}>
                        <project.icon size={32} />
                      </div>
                      <div>
                        <div className={`text-4xl sm:text-5xl font-extrabold tracking-tighter mb-1 ${themes[project.theme as ThemeType].text}`}>
                          {project.mainMetric}
                        </div>
                        <div className={`text-xs sm:text-sm font-bold uppercase tracking-wider ${themes[project.theme as ThemeType].text} opacity-80`}>
                          {project.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Client Logo Cloud */}
      <section className="py-20 mt-20 border-t border-slate-200/50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900">Trusted by Global Brands</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center max-w-5xl mx-auto">
          {clients.map((client, idx) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={client === "... and more" ? "px-6 py-4 rounded-2xl cursor-default" : "px-6 py-4 rounded-2xl bg-white/40 border border-slate-200 backdrop-blur-sm shadow-sm hover:bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default"}
            >
              <span className={`text-xl tracking-tight ${client === "... and more" ? "font-medium text-slate-500 italic" : "font-extrabold text-slate-800"}`}>
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}