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
      <section className="relative px-5 lg:px-20 py-10 lg:py-20 sm:py-8  lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <img  src="c1.jpg" alt="Building" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
        
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
                    A Solemn <span className='text-[#BBA25A]'>Commitment</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    The Code of Ethics of the Fédération Immobilière du Luxembourg (FIL) is more than a document —
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-0">  
                        
                        <div className="flex items-start py-5 border-b border-gray-200">  
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">it is a solemn commitment made by every member.</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-start py-5">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">It sets high standards that ensure consumers, institutions, and partners enjoy relationships built on trust, transparency, and professionalism.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
          Our Fundamental Principles
          </h2>
          <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Respect for the Law</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Apply all current legislation and regulations rigorously, without exception.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Transparency</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Provide clients with clear, fair, and complete information — without concealment or ambiguity.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Confidentiality</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Protect personal data and sensitive information with care and responsibility.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Integrity (Loyalty)</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Act fairly, avoiding any misleading, abusive, or dishonest practice.
              </p>
            </div>
          </div>

          <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="md:pr-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Competence</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Maintain a high level of expertise through continuous training and regular skill updates.
              </p>
            </div>

            <div className="md:px-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Fair Competition</h3>
             <p className="text-sm text-white/80 leading-[26px] mb-5">
                Encourage healthy and respectful competition that benefits the entire sector.
              </p>
            </div>

            <div className="md:pl-6">
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Social Responsibility</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Contribute to a sustainable, inclusive, and environmentally respectful real estate market that serves society.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative px-5 lg:px-20 py-10 lg:py-20  sm:py-8  lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
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
                    Strict  <span className='text-[#BBA25A]'>Context</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    Becoming a member of FIL means fully committing to this Code. Any breach may lead to disciplinary actions, ranging from a formal warning to permanent exclusion from the Federation.
                </p>
                
                <div className="flex flex-col gap-5">
                  <p className="text-gray-500 text-sm leading-5 font-semibold mt-1">This strictness makes FIL a true guarantee of professionalism, credibility, and quality for:</p>
                    <div className="flex flex-col gap-0">  
                        
                        <div className="flex items-start pb-5 border-b border-gray-200">  
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Clients and investors</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-start py-5 border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Institutions and partners</span>
                                </div>
                            </div>
                        </div>
                        
                      
                        <div className="flex items-start pt-5"> 
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                  <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">The entire Luxembourg real estate market</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img  src="c2.jpg" alt="BuildingA2" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[480px] object-cover"/>
      </section>
      <section className="bg-beige">
        <div className="mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Left: large image */}
          <div className="w-full lg:w-1/2">
            <img
              src="bc2.jpg"
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
                  The Code of Ethics embodies the fundamental values of FIL — integrity, professionalism, and responsibility. It forms the foundation of the trust placed in the Federation and its members.
                </p>
                <ul className="space-y-6 text-sm mt-20">
                  {/* item 1 */}
                  <li className="flex items-start gap-4">
                    <span className="text-white/90">
                      <svg className="inline-block mr-4" width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9189 1.09155L11.7305 2.71558L11.9609 3.17554L11.4941 3.39233C9.87838 4.14251 8.4291 5.24004 7.14844 6.69507L7.14941 6.69604C5.93889 8.07952 5.23695 9.52706 5.0127 11.0408L5.00781 11.073L4.99902 11.1042C4.74948 11.9777 4.67062 12.8295 4.75781 13.6628C6.0933 12.5498 7.76785 12.0007 9.75 12.0007C11.902 12.0007 13.7109 12.6688 15.1367 14.0251H15.1377C16.5866 15.3423 17.2861 17.1734 17.2861 19.447C17.2861 21.6731 16.5487 23.5227 15.0566 24.95L15.0488 24.9578C13.5593 26.3177 11.6584 26.9831 9.38965 26.9832C7.88354 26.9832 6.54101 26.6999 5.37695 26.1179L5.35742 26.1082C4.21171 25.4716 3.28013 24.6388 2.57227 23.6091L2.56641 23.6003L2.56055 23.5906C1.92859 22.5794 1.42967 21.3897 1.05859 20.0291C0.68554 18.6611 0.5 17.2331 0.5 15.7478C0.500083 12.7116 1.27621 9.8589 2.82324 7.198L2.82715 7.19019C4.45119 4.50436 6.94093 2.39849 10.2617 0.861084L10.7021 0.657959L10.9189 1.09155ZM29.502 1.09155L30.3135 2.71558L30.5439 3.17554L30.0771 3.39233C28.4615 4.14248 27.0121 5.24013 25.7314 6.69507C24.5209 8.07857 23.82 9.52703 23.5957 11.0408L23.5908 11.073L23.5811 11.1042C23.3314 11.978 23.2525 12.8302 23.3398 13.6638C24.6755 12.5503 26.3504 12.0007 28.333 12.0007C30.485 12.0008 32.2939 12.6687 33.7197 14.0251C35.1686 15.3423 35.8691 17.1734 35.8691 19.447C35.8691 21.6731 35.1318 23.5227 33.6396 24.95L33.6309 24.9578C32.1413 26.3177 30.2405 26.9832 27.9717 26.9832C26.4657 26.9831 25.1239 26.6999 23.96 26.1179L23.9404 26.1082C22.7947 25.4716 21.8632 24.6387 21.1553 23.6091L21.1494 23.6003L21.1436 23.5906C20.5116 22.5794 20.0127 21.3897 19.6416 20.0291C19.2685 18.661 19.083 17.2331 19.083 15.7478C19.0831 12.7116 19.8583 9.85885 21.4053 7.198L21.4102 7.19019C23.0342 4.50445 25.524 2.39845 28.8447 0.861084L29.2842 0.657959L29.502 1.09155Z" stroke="#BBA25A"/>
                      </svg>
                      Trust is our first value.   — FIL President
                    </span>
                  </li>
                </ul>

                <div className="mt-20 flex items-center gap-4">
                  <a
                    href="#"
                    className="text-[#BBA25A] font-medium hover:underline"
                  >
                    View Member Directory
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