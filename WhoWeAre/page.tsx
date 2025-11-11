// ...existing code...
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const HeaderMenu = () => {
  const CheckIcon = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.84192 12.0008C5.56569 12.0008 5.28999 11.8971 5.07904 11.6891L0 6.68272L1.52576 5.17825L5.84192 9.43268L14.4742 0.923828L16 2.4283L6.6048 11.6891C6.39385 11.8971 6.11816 12.0008 5.84192 12.0008Z" fill="#BBA25A"/>
    </svg>
  );

  const ArrowRight = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15.0587L15.8333 4.22534M15.8333 4.22534V14.6253M15.8333 4.22534H5.43334" stroke="#0A2540" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-beige">
      {/* Replaced local nav with shared Header component */}
      <Header />
      <section className="relative px-5 lg:px-20 py-10 lg:py-20  sm:py-8 lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <img  src="a1.jpg" alt="Building" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
        
         <div className=" border border-[#BBA25A]
                lg:w-[656px] p-10 bg-white 
                shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] 
                flex flex-col gap-8 
                relative z-10 
                lg:ml-[-60px]  
                h-fit 
            ">
            <div className="flex flex-col gap-4"> 
                 <h2 className="font-display font-bold text-[32px] leading-[40px] lg:text-[37px] lg:leading-[45px] text-[#333]"> 
                    A Federation Born from a <span className='text-[#BBA25A]'>Collective Need</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    The Fédération Immobilière du Luxembourg (FIL) was founded with a strong purpose:
                </p>
                
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-0">  
                        
                        <div className="flex items-start py-5 border-b border-gray-200">  
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">to bring together real estate professionals under one banner</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-start py-5 border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">to uphold the integrity of the profession</span>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div className="flex items-start py-5"> 
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                  <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">to ensure its credibility with both the public and institutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="relative px-5 lg:px-20 py-10 lg:py-20  sm:py-8 lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <div className=" border border-[#BBA25A]
                lg:w-[656px] p-10 bg-white 
                shadow-[10px_24px_70px_-12px_rgba(0,0,0,0.08)] 
                flex flex-col gap-8 
                relative z-10 
                lg:mr-[-60px]  
                h-fit 
            ">
            <div className="flex flex-col gap-4"> 
                 <h2 className="font-display font-bold text-[32px] leading-[40px] lg:text-[37px] lg:leading-[45px] text-[#333]"> 
                    A Unique <span className='text-[#BBA25A]'>Context</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    In response to these challenges, industry players felt the need for a common voice — one capable of defending their interests and promoting high professional standards.
                </p>
                
                <div className="flex flex-col gap-5">
                  <p className="text-gray-500 text-sm leading-5 font-semibold mt-6">The story of FIL unfolds within a distinctive setting:</p>
                    <div className="flex flex-col gap-0">  
                        
                        <div className="flex items-start py-5 border-b border-gray-200">  
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">A rapidly growing real estate market.</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-start py-5 border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Strong demand for housing and urban projects.</span>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div className="flex items-start py-5"> 
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                  <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">An increasingly demanding regulatory environment.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img  src="a2.jpg" alt="BuildingA1" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
      </section>
      {/* Top curved decorative SVG */}
      <div className="w-full pointer-events-none">
        <img src='img1.png' alt='Icon'/>
      </div>
      <section className="bg-[#0A2540] bg-[url('bg1.png')] bg-no-repeat bg-right text-white overflow-hidden">

        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-20">
          <h2 className="text-center text-[#d4b24a] font-serif font-semibold text-2xl lg:text-3xl mb-10">
            A Journey Marked by Concrete Progress
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-sm text-gray-200">
            {/* Left column */}
            <div className="text-center space-y-6">
              <p className="text-sm text-gray-300 mb-2 text-[#88938F]">The story of FIL unfolds within a distinctive setting:</p>
              <ul className="">
                <li className="flex items-start gap-4 border-b border-[#d8d4c530] mt-0 mb-0 py-[15px]">
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">
                      <svg className="inline-block mr-2" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                       A rapidly growing real estate market.</div>
                  </div>
                </li>

                <li className="flex items-start gap-4 border-b border-[#d8d4c530] mt-0 mb-0 py-[15px]">
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">
                      <svg className="inline-block mr-2" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                      Strong demand for housing and urban projects.</div>
                  </div>
                </li>

                <li className="flex items-start gap-4 mt-0 mb-0 py-[15px]">
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">
                      <svg className="inline-block mr-2" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    An increasingly demanding regulatory environment.</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right column */}
            <div className="text-center space-y-6">
              <p className="text-sm text-gray-300 mb-2 text-[#88938F]">Key achievements:</p>
              <ul className="">
                <li className="flex items-start gap-4 border-b border-[#d8d4c530] mt-0 mb-0 py-[15px]">
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">
                      <svg className="inline-block mr-2" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Legal framework for professional practices.</div>
                  </div>
                </li>

                <li className="flex items-start gap-4 border-b border-[#d8d4c530] mt-0 mb-0 py-[15px]">
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">
                      <svg className="inline-block mr-2" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Digitalization of processes and modernization of the sector.</div>
                  </div>
                </li>

                <li className="flex items-start gap-4 mt-0 mb-0 py-[15px]">
                  <div className="flex-1">
                    <div className="text-gray-300 text-sm">
                      <svg className="inline-block mr-2" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Integration of environmental and energy concerns into real estate projects.</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0A2540] mb-3">The Three Pillars of FIL’s Identity</h2>
          <p className="text-sm text-gray-500 mb-10">The Federation’s identity is built on three core values:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 */}
            <article className=" bg-[#06243a] text-white p-10">
              <div>
               <img src='i1.png' alt='Representation Icon'/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-left mt-8 mb-5">Representation</h3>
              <p className="text-sm text-white/90 text-left">Being the strong and credible voice of agencies and developers.</p>
            </article>

            {/* Card 2 */}
            <article className=" bg-[#f1f5ea] text-[#0A2540] p-10">
              <div>
               <img src='i2.png' alt='Representation2 Icon'/>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-left mt-8 mb-5">Ethics</h3>
              <p className="text-sm text-gray-700 text-left">Ensuring transparent and consumer‑respectful real estate practices.</p>
            </article>

            {/* Card 3 */}
            <article className=" bg-[#8f9a98] text-white p-10">
              <div>
                <img src='i3.png' alt='Representation3 Icon'/>
            
              </div>
              <h3 className="text-xl font-semibold mb-3 text-left mt-8 mb-5">Innovation</h3>
              <p className="text-sm text-white/90 text-left">Anticipating change and supporting the profession’s modernization.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-beige">
        <div className="mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Left: large image */}
          <div className="w-full lg:w-1/2">
            <img
              src="box1.jpg"
              alt="House exterior"
              className="w-full object-cover"
            />
          </div>

          {/* Right: content section */}
          <div className="relative w-full lg:w-1/2 bg-[#042033]">
            {/* background layered stripes */}
              <div className="absolute left-[8%] top-0 bottom-0 w-1/3 bg-[#0a2540] opacity-95"></div>
              <div className="absolute right-0 top-0 bottom-0 w-[70px] bg-[#0a2540] opacity-95"></div>

            {/* content */}
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24 text-white">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold font-serif text-[#d4b24a] mb-4">
                  Today: A Trusted Label
                </h2>

                <p className="text-sm text-white/80 mb-20">
                  FIL is much more than an association:
                </p>

                <ul className="space-y-6 text-sm">
                  {/* item 1 */}
                  <li className="flex items-start gap-4 border-b border-white/10 pb-6">
                    <span className="text-white/90">
                      <svg className="inline-block mr-1" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> It is a trusted label recognized by the public.
                    </span>
                  </li>

                  {/* item 2 */}
                  <li className="flex items-start gap-4 border-b border-white/10 pb-6">
                    <span className="text-white/90">
                      <svg className="inline-block mr-1" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    It is a reference network serving professionals and society.
                    </span>
                  </li>

                  {/* item 3 */}
                  <li className="flex items-start gap-4">
                    <span className="text-white/90">
                    <svg className="inline-block mr-1" width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#0A2540" />
                      <path d="M5.5 10.5L8.25 13.25L14 7.5" stroke="#BBA25A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                      It is a collective force shaping the future of Luxembourg's
                      real estate sector.
                    </span>
                  </li>
                </ul>

                <div className="mt-20 flex items-center gap-4">
                  <a
                    href="#"
                    className="text-[#BBA25A] font-medium hover:underline"
                  >
                    Discover Our Missions &amp; Values
                  </a>
                  <button
                    aria-label="Go"
                    className="w-14 h-14 rounded-full bg-[#BBA25A] flex items-center justify-center hover:bg-[#e0c56d] transition-colors"
                  >
                    <svg className="rotate-[-45deg]" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 5l6 7-6 7"
                        stroke="#042033"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>


      <Footer />
    </div>
  );
}

export default HeaderMenu;
// ...existing code...