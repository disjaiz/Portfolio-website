import {useEffect, useState} from 'react'

import linkTreeImg from '../assets/images/link_tree_site_img.png'
import formbotImg from '../assets/images/formbot_image.png'
import linkShortenerImg from '../assets/images/linkShortener.png'

import linkedin from '../assets/svgs/icons8-linkedin.svg'
import github from '../assets/svgs/icons8-github.svg'
import twitter from '../assets/svgs/icons8-x.svg'
import leetcode from '../assets/svgs/leetcode.svg'

import lightThemeIcon from '../assets/svgs/light-mode-svgrepo-com.svg'
import darkThemeIcon from '../assets/svgs/dark-mode-svgrepo-com.svg'

import hmmBadge from '../assets/images/hmm_business_plan_development_badge.png'

function DefaultPage() {
  const [themeMode, setThemeMode] = useState("light");

   useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className={`w-full relative ${themeMode === "light" ? "bg-stone-50": "auto"}`}>
      {/* theme mode selector*/}
      <div className='fixed top-5 right-5 hover:bg-gray-500/40 rounded p-2 cursor-pointer z-50' onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}>
         <img src={`${themeMode === "dark" ? lightThemeIcon : darkThemeIcon}`} alt="theme"  height={20} width={20} />
      </div>

      <div className='mx-auto min-h-screen max-w-screen-xl relative scroll-smooth lg:gap-4 lg:flex lg:justify-between lg:items-start bg-slate-850 text-blue-100   
        px-6 pb-12 md:px-12 md:pb-16 lg:py-0 roboto-font tracking-wide select-text'>

        {/* left */}
        <div className='lg:w-[48%] pt-12 md:pt-16 lg:py-24 lg:sticky lg:max-h-screen lg:top-0'>
            <h1 className={`text-4xl font-extrabold mb-3 sm:text-5xl  ${themeMode === "light" ? "text-black" : "text-slate-200"}`}>Siddhi Jaiswal</h1>
            <h4 className={`text-lg  font-medium mb-4 sm:text-xl  ${themeMode === "light" ? "text-black" : "text-slate-200"}`}>MERN Full Stack Developer</h4>
            <p className='max-w-xs text-[#94A3B8]'>I build accessible, pixel-perfect digital experiences for the web.</p>

            {/* navbar */}
            <nav className='mt-15 text-[#7a8697] tracking-widest'>
              <ul className='flex lg:flex-col gap-6 text-[12px] font-bold'>

                <li id="nav-list"
                    className={`cursor-pointer text-xs font-bold tracking-widest ${themeMode === "light" ? "light text-black" : "dark text-slate-500 hover:text-slate-200"}`}
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
                      <span className={`absolute left-0 top-0  ${themeMode === "light" ? "text-black" : "text-slate-400"}`}>› &nbsp;</span>
                      <span className='hover:text-base transition-all duration-300'>ABOUT</span>
                </li>
                
                <li id="nav-list" 
                    className={`cursor-pointer text-xs font-bold tracking-widest ${themeMode === "light" ? "light text-black" : "dark text-slate-500 hover:text-slate-200"}`}
                    onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>
                      <span className={`absolute left-0 top-0  ${themeMode === "light" ? "text-black" : "text-slate-400"}`}>› &nbsp;</span>
                  <span className='hover:text-base transition-all duration-300'>SKILLS</span> 
                </li>

                <li id="nav-list" 
                    className={`cursor-pointer text-xs font-bold tracking-widest ${themeMode === "light" ? "light text-black" : "dark text-slate-500 hover:text-slate-200"}`}
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                      <span className={`absolute left-0 top-0  ${themeMode === "light" ? "text-black" : "text-slate-400"}`}>› &nbsp;</span>
                  <span className='hover:text-base transition-all duration-300'>PROJECTS</span> 
                </li>

              </ul>
            </nav>

            <ul className='flex gap-6 mt-13 text-[#7a8697] text-[12px] font-bold'>
              <li>
                <a href="https://www.linkedin.com/in/siddhi-jaiswal-77b015269/" 
                   target='_blank' 
                   className="inline-block transform transition-transform duration-300 hover:scale-125">
                     <img src={linkedin} alt="linkedin" height={31} width={31}/>
                </a>
              </li>
              <li>
                <a href="https://github.com/disjaiz" 
                   target='_blank' 
                   className="inline-block transform transition-transform duration-300 hover:scale-125">
                     <img src={github} alt="github" height={31} width={31}/>
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/Siddhi_jaiswall/" 
                   target='_blank' 
                   className="inline-block transform transition-transform duration-300 hover:scale-125">
                    <img src={leetcode} alt="instagram" height={31} width={31}/>
                </a>
              </li>
              <li>
                <a href="https://x.com/JaiswalSid87831?t=QlH8E2jO68tDBrSv7ndO2A&s=03" 
                   target='_blank' 
                   className="inline-block transform transition-transform duration-300 hover:scale-125">
                   <img src={twitter} alt="twitter" height={31} width={31}/>
                </a>
              </li>
            </ul>
        </div>

        {/* right */}
        <div className='relative scroll-smooth lg:w-[52%] text-[#94A3B8] leading-relaxed lg:py-24 pt-24 h-max'>
          <a  
            className='text-teal-300 inline-block shimmer-text lg:px-4.5 py-2 rounded-full lg:hover:bg-teal-400/10 
            lg:hover:border lg:hover:border-teal-100/10' 
            href='/resumes/MyResumeEnhanced.pdf'
            target='_blank'
            rel="noopener noreferrer"
            >
              <span>My resume</span>
              <svg
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 640 640"
                 className="inline-block ml-2 w-5 h-5 fill-current"
               >
                 <path d="M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z" />
              </svg>
          </a>
          <section id="about" className="mb-20 scroll-mt-16 md:mb-20 lg:mb-36 lg:scroll-mt-24">
            <div className='sticky z-20 top-0 mb-4 -mx-12 px-12 py-3 w-screen bg-slate-900/5 text-slate-200 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='font-bold text-md text-white tracking-widest text-slate-200'>ABOUT</h2>
            </div>
            <div className={`leading-relaxed text-sm lg:text-[16px] ${themeMode === "light" ? "text-black" : "text-auto"}`}>
             <p className="mb-4">
                I'm currently pursuing a Bachelor of Computer Applications{" "}
                <span className={themeMode === "light" ? "text-slate-900 font-semibold" : "text-white"}>
                  (BCA)
                </span>{" "}
                from{" "}
                <span className={themeMode === "light" ? "text-slate-900 font-semibold" : "text-white"}>
                  Chandigarh University
                </span>
                , with a foundation in computer science through my O-Level qualification.
              </p>
              <p className='mb-4'>I have hands-on experience developing full-stack applications using{" "}
                <span cclassName={` ${themeMode === "light" ?  "text-slate-900 font-semibold" : "text-white"}`}> React</span>,
                 <span className={` ${themeMode === "light" ?  "text-slate-900 font-semibold" : "text-white"}`}> Node.js</span>,
                <span className={` ${themeMode === "light" ?  "text-slate-900 font-semibold" : "text-white"}`}> Express.js</span>
                {" "}and 
                <span className={` ${themeMode === "light" ?  "text-slate-900 font-semibold" : "text-white"}`}> MongoDB</span>, 
                with a focus on 
                clean structure and scalable code.
                Alongside development, I’m actively improving my problem-solving skills through DSA and real-world projects.
              </p>
              <p className='mb-4'>I enjoy working where logic meets creativity, turning ideas into functional products.
                  Outside of tech, I spend time cooking and reading, which helps me stay balanced and focused.
              </p>
              <p className='mb-4'>I value thoughtful work, continuous learning, and building things that actually solve problems.
                  My goal is to evolve into a developer who creates reliable, well-designed, and impactful applications.
              </p>
            </div>
          </section>

          <section id="skills" className="mb-20 scroll-mt-16 md:mb-20 lg:mb-36 lg:scroll-mt-24">
            <div className='sticky z-20 top-0 mb-4 -mx-12 px-12 py-3 w-screen bg-slate-900/5 text-slate-200 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='font-bold text-md text-white tracking-widest text-slate-200'>SKILLS</h2>
            </div>
            <div>
              <ul className='flex flex-wrap'>
                <li className='mr-2.5 mt-3.5'>
                  <div className='inline-block flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    JavaScript
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    Java
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='inline-block flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    Python
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    React.js
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    Node.js
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    Express.js
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    MongoDB
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    Git
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    Github
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                   HTML
                  </div>
                </li>
                <li className='mr-2.5 mt-3.5'>
                  <div className='flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    CSS
                  </div>
                </li>
                  <li className='mr-2.5 mt-3.5'>
                  <div className='inline-block flex items-center px-4 py-2 text-sm font-medium leading-5 rounded-full bg-teal-400/10 text-teal-300'>
                    TailwindCSS
                  </div>
                </li>
  
              </ul>
            </div>
          </section>

          <section id="projects" className="mb-20 scroll-mt-16 md:mb-20 lg:mb-36 lg:scroll-mt-24">
            <div className='sticky z-20 top-0 mb-4 -mx-12 px-12 py-3 w-screen bg-slate-900/5 text-slate-200 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='font-bold text-md text-white tracking-widest text-slate-200'>PROJECTS</h2>
            </div>
            <div>
              <ul>
                {/* project 1 */}
                <li className='mb-12'>
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="z-10 sm:order-2 sm:col-span-6">
                        <a href="https://link-tree-web-app-frontend.onrender.com/" className="group"  target="_blank" rel="noopener noreferrer">
                          <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded bg-slate-500/10 transition md:-inset-x-7 
                          md:-inset-y-5 md:border-t md:border-white/7  lg:block group-hover:block opacity-0 
                          group-hover:opacity-100 shadow-[0_0_90px_rgba(255,255,255,0.02)] "></div> 
                          <h3 className="font-medium text-slate-200 group-hover:text-[#49b4ac] tracking-wider">
                            <span className={`${themeMode === "light" ? "text-black" : "text-slate-200"}`}>Link tree Website</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="inline-block ml-2 w-4 h-4 fill-current"
                            >
                              <path d="M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z" />
                            </svg>
                          </h3>
                        </a>
                      
                      <p class="mt-2 text-sm leading-normal">
                          A profile-based web app that lets users organize and share multiple links through a single public page.
                          Users can customize layouts, themes, and styles to design how their links are presented.
                          Includes analytics to track link clicks and traffic insights, along with account management settings.
                      </p>
                    </div>
                    <img src={linkTreeImg} width="200" height="48" loading='lazy' alt="Linktree web app img" 
                      class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
                      style={{color: "transparent"}}
                    />
                  </div>
                </li>

                {/* project 2 */}
                <li className='mb-12'>
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <a href="https://formbot-xyi7.onrender.com/" className="group"  target="_blank" rel="noopener noreferrer">
                         <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded bg-slate-500/10 transition md:-inset-x-7 
                          md:-inset-y-5 md:border-t md:border-white/7  lg:block group-hover:block opacity-0 
                          group-hover:opacity-100 shadow-[0_0_90px_rgba(255,255,255,0.02)]"></div> 
                          <h3 className="font-medium text-slate-200 group-hover:text-[#49b4ac] tracking-wider">
                            <span className={`${themeMode === "light" ? "text-black" : "text-slate-200"}`}>Formbot Website</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="inline-block ml-2 w-4 h-4 fill-current"
                            >
                              <path d="M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z" />
                            </svg>
                          </h3>
                      </a>
                      <p class="mt-2 text-sm leading-normal"  >A web app for creating and sharing custom forms with ease.
                        Build forms using various input types, organize them into folders, and share them via links.
                        Responses are collected and stored in a structured dashboard, with options for collaborative access.
                      </p>
                    </div>
                    <img src={formbotImg} width="200" height="48" loading='lazy' alt="Formbot web app img" 
                    class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
                    style={{color: "transparent"}}
                    />
                  </div>
                </li>

                {/* project 3 */}
                  <li className='mb-12'>
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="z-10 sm:order-2 sm:col-span-6">
                     <a href="https://link-shortener-frontend-i663.onrender.com/" className="group"  target="_blank" rel="noopener noreferrer">
                       <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded bg-slate-500/10 transition md:-inset-x-7 
                          md:-inset-y-5 md:border-t md:border-white/7  lg:block group-hover:block opacity-0 
                          group-hover:opacity-100 shadow-[0_0_90px_rgba(255,255,255,0.02)]"></div> 
                          <h3 className="font-medium text-slate-200 group-hover:text-[#49b4ac] tracking-wider">
                            <span className={`${themeMode === "light" ? "text-black" : "text-slate-200"}`}>Trimly Website</span>
                                  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                              className="inline-block ml-2 w-4 h-4 fill-current"
                            >
                              <path d="M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z" />
                            </svg>
                          </h3>
                      </a>
                      <p class="mt-2 text-sm leading-normal"  >
                        A web app that lets users create and manage short, shareable links from long URLs.
                        Links are organized in tables with details like creation time, custom names, and expiry-based activation.
                        Includes analytics, editing options, and tracking of link activity and recent search insights.
                      </p>
                    </div>
                    <img src={linkShortenerImg} width="200" height="48" loading='lazy' alt="Link Shortener web app img" 
                    class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
                    style={{color: "transparent"}}
                    />
                  </div>
                </li>

              </ul>
            </div>
          </section>


          <section id="Certificates" className="mb-20 scroll-mt-16 md:mb-20 lg:mb-36 lg:scroll-mt-24">
             <div className='sticky z-20 top-0 mb-4 -mx-12 px-12 py-3 w-screen bg-slate-900/5 text-slate-200 backdrop-blur lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='font-bold text-md text-white tracking-widest text-slate-200'>CERTIFICATES</h2>
            </div>
                <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-4 md:gap-2 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="z-10 sm:order-2 sm:col-span-6">
                      <a href="/certificates/Harvard_Management_Program_Certificates.pdf" className="group"  target="_blank" rel="noopener noreferrer">
                        <div className="absolute -inset-x-4 -inset-y-2.5 hidden rounded bg-slate-500/10 transition md:-inset-x-7 
                        md:-inset-y-5 md:border-t md:border-white/7  lg:block group-hover:block opacity-0 
                        group-hover:opacity-100 shadow-[0_0_90px_rgba(255,255,255,0.02)] "></div> 
                        <h3 className="font-medium text-slate-200 group-hover:text-[#49b4ac] tracking-wider">
                          <span className={`${themeMode === "light" ? "text-black" : "text-slate-200"}`}>HMM Certificates Collection</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            className="inline-block ml-2 w-4 h-4 fill-current"
                          >
                            <path d="M416 224C398.3 224 384 209.7 384 192C384 174.3 398.3 160 416 160L576 160C593.7 160 608 174.3 608 192L608 352C608 369.7 593.7 384 576 384C558.3 384 544 369.7 544 352L544 269.3L374.6 438.7C362.1 451.2 341.8 451.2 329.3 438.7L224 333.3L86.6 470.6C74.1 483.1 53.8 483.1 41.3 470.6C28.8 458.1 28.8 437.8 41.3 425.3L201.3 265.3C213.8 252.8 234.1 252.8 246.6 265.3L352 370.7L498.7 224L416 224z" />
                          </svg>
                        </h3>
                      </a>
                    
                    <p class="mt-2 text-sm leading-normal">
                      Completed the{" "} <span className={themeMode === "light" ? "text-slate-900 font-semibold" : "text-white"}> {" "}Harvard ManageMentor program</span> through Chandigarh University, covering 10 modules in leadership and management.
                      Built practical skills in decision-making, strategy, innovation, and effective team collaboration.
                    </p>
                  </div>
                  <img src={hmmBadge} width={100} height={100}  loading='lazy' alt="HMM Badge img" 
                    class="object-cover rounded transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" 
                    style={{color: "transparent"}}
                  />
              </div>
          </section>


          <footer className="pb-6 text-[12px] sm:text-sm text-slate-500 sm:pb-0">
              <p className='text-center mb-2'>
                  Build with{" "} 
                  <span className={themeMode === "light" ? "text-slate-900 font-semibold" : "text-white/80"}>React.js</span> and{" "} 
                  <span className={themeMode === "light" ? "text-slate-900 font-semibold" : "text-white/80"}>Tailwind CSS</span>
              </p>
              <p className='text-center'>Deployed with {" "}
                  <span className={themeMode === "light" ? "text-slate-900 font-semibold" : "text-white/80"}>Vercel</span>{" "}
                  by Siddhi Jaiswal • Portfolio 2026
              </p>
          </footer>         
        </div>
       </div>
    </div>
    </>
  )
}

export default DefaultPage

