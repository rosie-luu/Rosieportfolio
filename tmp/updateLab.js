import fs from 'fs';

let content = fs.readFileSync('/src/app/pages/Lab.tsx', 'utf8');

// 1. Remove Masonry imports
content = content.replace('import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";\n', '');

// 2. Update all descriptionTitle to "The Context"
content = content.replace(/descriptionTitle:\n?\s*".*?"/g, 'descriptionTitle: "The Context"');

// 3. Update all insightTitle to "The Execution"
content = content.replace(/insightTitle:\n?\s*".*?"/g, 'insightTitle: "The Execution"');

// 4. Replace the Grid layout
const oldGridStart = content.indexOf('{/* Category Grid */}');
const oldGridEnd = content.indexOf('</section>', oldGridStart);

const newGrid = `{/* Category Grid */}
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
                    className={\`group flex flex-col \${isFullWidth ? 'lg:flex-row' : ''} rounded-[2rem] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 \${isFullWidth ? 'lg:col-span-2' : ''}\`}
                  >
                    {/* Dynamic Image Area */}
                    {project.video ? (
                      <div className={\`relative \${isFullWidth ? 'w-full lg:w-5/12 lg:border-r lg:border-b-0 min-h-[300px]' : 'w-full aspect-video border-b'} bg-slate-900 border-slate-100 group/img flex items-center justify-center overflow-hidden shrink-0\`}>
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
                        <div className={\`absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white \${themes[project.theme as ThemeType].iconText} z-20 pointer-events-none\`}>
                          <project.icon size={24} />
                        </div>
                      </div>
                    ) : project.image ? (
                      <div className={\`relative overflow-hidden \${project.title.includes('BarkBuddy') ? 'bg-mint-50/50' : 'bg-slate-50/50'} border-slate-100 group/img flex items-center justify-center shrink-0 \${isFullWidth ? 'w-full lg:w-5/12 lg:border-r lg:border-b-0 min-h-[300px]' : 'w-full aspect-video border-b'}\`}>
                        {project.link ? (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className={\`block relative w-full h-full cursor-pointer flex items-center justify-center \${project.title.includes('BarkBuddy') ? 'p-12 sm:p-16' : ''}\`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={\`block transition-transform duration-700 group-hover/img:scale-[1.03] \${project.title.includes('BarkBuddy') ? 'max-w-[200px] w-full h-auto object-contain mx-auto drop-shadow-xl relative z-10' : 'absolute inset-0 w-full h-full object-cover object-top'}\`} 
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
                          <div className={\`block relative w-full h-full flex items-center justify-center \${project.title.includes('BarkBuddy') ? 'p-12 sm:p-16' : ''}\`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={\`block transition-transform duration-700 group-hover/img:scale-[1.03] \${project.title.includes('BarkBuddy') ? 'max-w-[200px] w-full h-auto object-contain mx-auto drop-shadow-xl relative z-10' : 'absolute inset-0 w-full h-full object-cover object-top'}\`} 
                            />
                          </div>
                        )}
                        
                        {/* Floating Theme Icon */}
                        <div className={\`absolute top-4 left-4 p-3 rounded-2xl bg-white/90 backdrop-blur-md shadow-sm border border-white \${themes[project.theme as ThemeType].iconText} z-20 pointer-events-none\`}>
                          <project.icon size={24} />
                        </div>
                      </div>
                    ) : (
                      // Fallback Placeholder if no image is provided
                      <div className={\`relative shrink-0 p-6 sm:p-8 bg-slate-50/50 border-slate-100 \${isFullWidth ? 'w-full lg:w-5/12 lg:border-r lg:border-b-0 min-h-[300px]' : 'w-full aspect-video border-b'}\`}>
                        <div className={\`absolute inset-0 bg-gradient-to-br \${themes[project.theme as ThemeType].gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500\`} />
                        <div className={\`relative w-full h-full rounded-2xl border-2 border-dashed \${themes[project.theme as ThemeType].placeholder} flex flex-col items-center justify-center text-center p-6 bg-white/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.02]\`}>
                          <ImageIcon className={\`w-12 h-12 mb-3 \${themes[project.theme as ThemeType].iconText} opacity-40\`} />
                          <p className={\`font-bold text-sm sm:text-base \${themes[project.theme as ThemeType].text} opacity-60\`}>Project Visual</p>
                          <p className="text-xs text-slate-500 mt-1 max-w-[200px]">Space for {project.title.split(':')[0]} artwork</p>
                        </div>
                        <div className={\`absolute top-4 left-4 p-3 rounded-2xl bg-white/80 backdrop-blur-md shadow-sm border border-white \${themes[project.theme as ThemeType].iconText}\`}>
                          <project.icon size={24} />
                        </div>
                      </div>
                    )}

                    {/* Content Area */}
                    <div className={\`p-6 sm:p-8 flex flex-col grow \${isFullWidth ? 'lg:w-7/12 lg:justify-center' : 'w-full'}\`}>
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

                        {/* The Insight / Execution */}
                        {project.insightTitle && project.insight && (
                          <div className={\`p-5 rounded-2xl \${themes[project.theme as ThemeType].bg} \${themes[project.theme as ThemeType].border} border mt-auto\`}>
                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                              <Lightbulb size={14} className={themes[project.theme as ThemeType].iconText} />
                              {project.insightTitle}
                            </h4>
                            {Array.isArray(project.insight) ? (
                              <ul className={\`list-disc list-outside pl-4 space-y-2 font-semibold text-sm sm:text-base leading-relaxed \${themes[project.theme as ThemeType].text}\`}>
                                {project.insight.map((item: string, i: number) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            ) : (
                              <p className={\`font-semibold text-sm sm:text-base leading-relaxed \${themes[project.theme as ThemeType].text}\`}>
                                {project.insight}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Tools used / Tags */}
                      <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Tools:</span>
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
                            className={\`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 \${themes[project.theme as ThemeType].badge} \${themes[project.theme as ThemeType].buttonHover} hover:shadow-md border \${themes[project.theme as ThemeType].border}\`}
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
          `;

content = content.substring(0, oldGridStart) + newGrid + '\n          ' + content.substring(oldGridEnd);

fs.writeFileSync('/src/app/pages/Lab.tsx', content);
