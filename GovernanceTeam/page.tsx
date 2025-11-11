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

  
  const CheckIcon1 = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2668_12449)">
        <path d="M5.84192 11.5008C5.56569 11.5008 5.28999 11.3971 5.07904 11.1891L0 6.18272L1.52576 4.67825L5.84192 8.93268L14.4742 0.423828L16 1.9283L6.6048 11.1891C6.39385 11.3971 6.11816 11.5008 5.84192 11.5008Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_2668_12449">
        <rect width="16" height="12" fill="white"/>
        </clipPath>
        </defs>
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
      <div className="w-full bg-[#efede7] pt-10 pl:4 pr:4 flex justify-center">
        <div className="flex flex-row items-center justify-center flex-wrap gap-5 md:flex-nowrap md:gap-12 text-center">
          {/* Logo 1 */}
          <div className="">
            <img src="logo1.png" alt="Logo 1" className="w-20 h-20 object-contain" />
          </div>
          {/* Logo 2 */}
          <div className="">
            <img src="logo2.png" alt="Logo 2" className="w-20 h-20 object-contain" />
          </div>
          {/* Logo 3 */}
          <div className="">
            <img src="logo3.png" alt="Logo 3" className="w-20 h-20 object-contain" />
          </div>
          {/* Logo 4 */}
          <div className="">
            <img src="logo4.png" alt="Logo 4" className="w-20 h-20 object-contain" />
          </div>
          {/* Logo 5 */}
          <div className="">
            <img src="logo5.png" alt="Logo 5" className="w-20 h-20 object-contain" />
          </div>
        </div>
      </div>
      <section className="relative px-5 lg:px-20 py-10 lg:py-20  sm:py-8 lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <img  src="g1.jpg" alt="Building" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
        
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
                    Solid and Balanced <span className='text-[#BBA25A]'>Governance</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    The Fédération Immobilière du Luxembourg (FIL) is built on governance that is both democratic and operational, ensuring representativeness and effectiveness.
                </p>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    This organization maintains a proper balance between strategic vision and practical implementation.
                </p>
            </div>
        </div>
      </section>
      <section className="w-full bg-[#efede7] py-16 px-2 bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        <h2 className="text-center text-[32px] font-serif font-bold text-[#0A2540] mb-20">
          Governance Structure
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 max-w-screen-xl mx-auto">
          {/* General Assembly */}
          <div className="relative bg-[#0a2540] text-white rounded-none shadow-lg w-full md:w-1/3 px-8 pt-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g.png')] bg-[position:bottom_left]  bg-no-repeat">
            {/* Optional: background image overlay */}
            <h3 className="font-bold text-lg mb-2 text-center">General Assembly</h3>
            <p className="mb-4 opacity-90 text-center text-[15px] leading-[26px]">
              The General Assembly is the sovereign body of the Federation.
            </p>
            <div className="flex flex-col gap-0 pb-8">  
                          
                <div className="flex items-start pb-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">It brings together all members.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">It defines key strategic orientations.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">It approves structural decisions for the future of the profession.</span>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
          {/* Board of Directors */}
          <div className="relative bg-[#EDF0E5] text-[#1a2633] rounded-none shadow-lg w-full md:w-1/3 px-5 py-8 flex flex-col gap-4 min-h-[340px] border border-[#e5e7eb] bg-[url('/bg-g.png')] bg-[position:bottom_left]  bg-no-repeat">
            <h3 className="font-bold text-lg mb-2 text-center">Board of Directors</h3>
            <p className="mb-4 opacity-90 text-center text-[15px] leading-[26px]">
              The Board of Directors is composed of elected professionals from real estate agencies and development companies.
            </p>
            <div className="flex flex-col gap-0 pb-1">  
                          
                <div className="flex items-start pb-3 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#0A2540] text-[15px] leading-6">It oversees the strategic steering of the Federation.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-3 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#0A2540] text-[15px] leading-6">It ensures the implementation of decisions made by the General Assembly.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start pt-3">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#0A2540] text-[15px] leading-6">It embodies the plurality and diversity of the real estate sector.</span>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
          {/* Executive Bureau */}
          <div className="relative bg-[#88938F] text-white rounded-none shadow-lg w-full md:w-1/3 px-8 py-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g1.png')] bg-[position:bottom_right]  bg-no-repeat">
            <h3 className="font-bold text-lg mb-2 text-center">Executive Bureau</h3>
            <p className="mb-4 opacity-90 text-center text-[15px] leading-[26px]">
              Chaired by the FIL President, the Executive Bureau is responsible for:
            </p>
            <div className="flex flex-col gap-0 pb-8">  
                          
                <div className="flex items-start pb-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">The coordination of daily actions.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">The official representation of the Federation in national and international bodies.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">The supervision of strategic projects.</span>
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
                    Operational Team
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    Alongside the elected bodies, a permanent team ensures the implementation of decisions and daily follow-up.
                </p>
                
                <div className="flex flex-col gap-5">
                  <p className="text-gray-500 text-sm leading-5 font-semibold mt-4">Its main missions are:</p>
                    <div className="flex flex-col gap-0">  
                        
                        <div className="flex items-start pb-5 border-b border-gray-200">  
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Managing relations with members.</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-start py-5 border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Organizing events, committees and working groups.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start py-5 border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Conducting communication and promotion of the Federation.</span>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div className="flex items-start py-5"> 
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                  <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Maintaining regulatory and sectoral monitoring to anticipate developments.</span>
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
      <section className="bg-navy">
        <div className='px-5 lg:px-20 py-10 lg:py-20 max-w-[1440px] w-full m-auto relative overflow-hidden'>
          <svg className="absolute right-0 lg:right-[-303px] bottom-[-97px] w-[1498px] h-[696px]" viewBox="0 0 1195 503" fill="none">
            <path d="M220.355 -37.8128V244.564H348.467C372.156 243.806 391.771 235.752 407.216 220.306C422.851 204.956 430.716 185.246 430.716 161.178V152.46H440.571V376.466H430.716V368.886C430.716 344.912 423.135 325.203 407.974 309.757C392.813 294.122 373.577 286.068 350.362 285.499H220.355V528.836C220.355 545.798 226.419 560.201 238.548 572.046C250.867 583.985 265.459 589.86 282.137 589.86H293.886L295.024 599.715H0.138672V589.86H12.6466C29.3239 589.86 43.5375 583.985 55.477 572.046C67.6059 560.201 74.0494 545.798 74.8075 528.836V-11.6598C74.8075 -34.1173 64.0051 -50.8893 42.59 -62.0707C33.4933 -67.0928 23.449 -69.6513 12.6466 -69.6513H0.138672V-79.5061H371.587C391.487 -79.5061 413.47 -81.4012 437.539 -85.1915C461.512 -89.1713 478.284 -93.1511 487.95 -96.9414V67.1783H478.474V57.3236C478.474 28.8016 470.135 6.05984 453.458 -10.9017C436.97 -28.0528 414.513 -37.0548 385.991 -37.8128H220.355Z" fill="#071F38"/>
          </svg>
          <div className="relative z-10 flex flex-col gap-10"> 
            <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-[#BBA25A]">A Dual Role: Think Tank & Do Tank</h2>
            <div className="lg:flex gap-[100px]">
              <div className='mb-10 lg:mb-0'>
                <p className="w-[380px] text-[#D9D9D9] text-[15px] leading-[26px] pb-4">
                  The combination of strategic governance and the operational team allows FIL to act simultaneously as:
                </p>
                <p className="w-[380px] text-[#D9D9D9] text-[15px] leading-[26px]">
                  It is this dual role that makes FIL an indispensable partner in the Luxembourg real estate landscape.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">A think tank: a space for reflection, anticipation and proposal.</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px]">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">A do tank: an operational, results-oriented actor that delivers tangible outcomes.</span>
                  </div>
                </div>
              </div>
            </div>
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
                <h2 className="text-2xxl lg:text-3xl font-bold font-serif text-[#d4b24a] mb-4">
                  Conclusion
                </h2>

                <p className="text-sm text-white/80 mb-5 leading-6">
                  FIL’s governance and team reflect the diversity and strength of the real estate profession in Luxembourg.
                </p>
                <p className="text-sm text-white/80 leading-6">
                 They embody the balance between long-term vision, collective representation and tangible actions in the service of members and society.
                </p>

                <div className="mt-20 flex items-center gap-4">
                  <a
                    href="#"
                    className="text-[#BBA25A] font-medium hover:underline"
                  >
                    Discover Our Code of Ethics
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