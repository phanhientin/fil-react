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
      <section className="relative px-5 lg:px-20 py-10 lg:py-20  sm:py-8  lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <img  src="v1.jpg" alt="Building" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
        
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
                    Our Clear <span className='text-[#BBA25A]'>Mission</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    The Fédération Immobilière du Luxembourg (FIL) has a core mission: to defend, regulate and inspire the real estate profession in the Grand Duchy.
                </p>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    It acts daily to ensure a more transparent, more professional and more innovative market, serving members and the public.
                </p>
            </div>
        </div>
      </section>
      {/* Top curved decorative SVG */}
      <div className="w-full pointer-events-none">
        <img src='img1.png' alt='Icon'/>
      </div>
       <section className="bg-[#0A2540] bg-[url('bghh.png')] bg-no-repeat bg-right text-white overflow-hidden">

        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-16">
          <h2 className="text-center text-[#d4b24a] font-serif font-semibold text-2xl lg:text-3xl mb-10">
           Our Missions in Action
          </h2>
          <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="md:pr-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Defend</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Represent agencies and developers in dialogue with public authorities, financial institutions and private partners.
              </p>
              <p className="text-xs text-white/40 mt-3 text-[#88938F]">A collective voice to influence decisions and defend the interests of the profession.</p>
            </div>

            <div className="md:px-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Regulate</h3>
             <p className="text-sm text-white/80 leading-[26px] mb-5">
                Establish a rigorous ethical framework and ensure compliance with practices.
              </p>
              <p className="text-xs text-white/40 mt-3 text-[#88938F]">The Code of Ethics as a guarantee of trust and transparency.</p>
            </div>

            <div className="md:pl-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Inform</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Provide members with regulatory monitoring, reliable market analyses and practical tools.
              </p>
              <p className="text-xs text-white/40 mt-3 text-[#88938F]">Clear and verified information as a driver for strategic decision‑making.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-sm text-gray-200  mt-20">
            {/* Left column */}
            <div className="text-center space-y-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Train</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Develop skills through the FIL Academy, continuing education programs and specialized webinars.
              </p>
              <p className="text-xs text-white/40 mt-3 text-[#88938F]">Competence as a condition for professional credibility.</p>
            
            </div>
            <div className="text-center space-y-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Inspire</h3>
             <p className="text-sm text-white/80 leading-[26px] mb-5">
                Promote innovative initiatives in digitalization, sustainability and social responsibility.
              </p>
              <p className="text-xs text-white/40 mt-3 text-[#88938F]">Innovation as the engine of a modern and responsible real estate sector.</p>
            </div>
         </div>
        </div>
      </section>

      
      <section className="py-20 bg-white bg-[url('/bg-line2.png')] bg-top bg-repeat-y">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[#0A2540] font-serif font-semibold text-2xl lg:text-3xl mb-10">
            Our Founding Values
          </h2>
          <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Integrity</h3>
              <p className="leading-[26px] text-[#88938F]">
                Act with honesty and transparency, both towards clients and partners.
              </p>
            </div>

            <div>
               <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Responsibility</h3>
              <p className="leading-[26px] text-[#88938F]">
                Measure the impact of each action on society and the environment, contributing to a sustainable and inclusive real estate sector.
              </p>
            </div>

            <div>
               <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Excellence</h3>
              <p className="leading-[26px] text-[#88938F]">
                Strive for quality and professionalism in all aspects of practice, from project management to client relations.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Solidarity</h3>
              <p className="leading-[26px] text-[#88938F]">
                Unite the forces of the sector to defend a collective vision and strengthen the profession’s credibility.
              </p>
            </div>
          </div>

          <p className="mt-20 text-center text-sm text-[#88938F] max-w-3xl mx-auto">
            These values are the backbone of FIL. They guide every decision, every position taken and every service provided to members.
          </p>
        </div>
      </section>
      <section className="bg-beige">
        <div className="mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Left: large image */}
          <div className="w-full lg:w-1/2">
            <img
              src="box2.jpg"
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
                  Conclusion
                </h2>

                <p className="text-sm text-white/80 mb-6 mt-6 leading-7">
                  FIL’s mission and founding values are not mere principles: they structure our actions and constitute the guarantee of our credibility.
                </p>
                
                <p className="text-sm text-white/80 mb-6 mt-6 leading-7">
                  It is on them that the trust granted by our members, our institutional partners and Luxembourg society is based.
                </p>

                <div className="mt-20 flex items-center gap-4">
                  <a
                    href="#"
                    className="text-[#BBA25A] font-medium hover:underline"
                  >
                    Discover Our Governance & Team
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