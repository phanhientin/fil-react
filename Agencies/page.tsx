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
      <section className="relative px-5 sm:py-8 lg:px-20 py-10 lg:py-20 lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <img  src="ag1.jpg" alt="Building" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
        
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
                    The Role of  <span className='text-[#BBA25A]'>Real Estate Agencies</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    Real estate agencies are trusted intermediaries between sellers, buyers, landlords, and tenants. Their mission goes far beyond simply connecting parties: they provide expertise, legal security, and personalized support at every stage of a real estate project.
                </p>
                <div className="flex flex-col gap-5">
                  <p className="text-gray-500 text-sm leading-5 font-semibold mt-1">In Luxembourg’s market—characterized by complex transactions—agencies play an essential role:</p>
                    <div className="flex flex-col gap-0">  
                        
                        <div className="flex items-start pb-3 border-b border-gray-200">  
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Accurately assess the value of a property through their knowledge of the local market.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start py-3  border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Support property owners in selling or renting their properties by developing an optimal marketing strategy.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start py-3  border-b border-gray-200">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Secure transactions through mastery of contractual, regulatory, and financial aspects.</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start py-3">
                            <div className="flex items-center gap-4 flex-1">
                                <div className='w-4'>
                                <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                                </div>
                                <div className='w-[calc(100%-16px)]'>
                                <span className="text-[#333] text-[15px] leading-6">Assist buyers and tenants in finding housing or investment opportunities that meet their expectations.</span>
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
                    Professionalism and   <span className='text-[#BBA25A]'>Oversight</span>
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="text-['#88938F] text-sm leading-5 mt-1">Member agencies of the Luxembourg Real Estate Federation (FIL) commit to upholding the Code of Ethics and pursuing continuous training. This guarantees the public an impeccable quality of service that complies with legal standards.</p>
                    
                </div>
            </div>
        </div>
        <img  src="ag2.jpg" alt="BuildingA2" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[480px] object-cover"/>
      </section>
      
      {/* Top curved decorative SVG */}
      <div className="w-full pointer-events-none">
        <img src='img1.png' alt='Icon'/>
      </div>
       <section className="bg-[#0A2540] bg-[url('bghh.png')] bg-no-repeat bg-right text-white overflow-hidden">

        <div className="relative max-w-6xl mx-auto px-6 py-16 lg:py-16">
          <h2 className="text-center text-[#d4b24a] font-serif font-semibold text-2xl lg:text-3xl mb-10">
          Why Choose a FIL Member Agency?
          </h2>
          <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Credibility</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Affiliation with a recognized professional organization.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Security</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Strict compliance with legal and regulatory obligations.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Support</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Tailored, transparent advice for every project.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Innovation</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Use of digital tools, real estate marketing, and new sustainable practices.
              </p>
            </div>
          </div>
          <p className="text-center text-sm leading-5 my-10">Agencies affiliated with FIL are the primary guarantee of trust for anyone looking to buy, sell, or rent a property in Luxembourg.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HeaderMenu;