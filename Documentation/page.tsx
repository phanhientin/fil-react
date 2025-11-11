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

  
  const CheckIcon2 = () => (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2793_5392)">
<g clip-path="url(#clip1_2793_5392)">
<g clip-path="url(#clip2_2793_5392)">
<path d="M5.84192 11.5008C5.56569 11.5008 5.28999 11.3971 5.07904 11.1891L0 6.18272L1.52576 4.67825L5.84192 8.93268L14.4742 0.423828L16 1.9283L6.6048 11.1891C6.39385 11.3971 6.11816 11.5008 5.84192 11.5008Z" fill="#0A2540"/>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_2793_5392">
<rect width="16" height="12" fill="white"/>
</clipPath>
<clipPath id="clip1_2793_5392">
<rect width="16" height="12" fill="white"/>
</clipPath>
<clipPath id="clip2_2793_5392">
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
      <section className="w-full bg-[#efede7] py-16 px-2 bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        <h2 className="text-center text-[32px] font-serif font-bold text-[#0A2540] mb-20">
          Available Content
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-2 max-w-screen-xl mx-auto">
          {/* General Assembly */}
          <div className="relative text-white rounded-none shadow-lg w-full md:w-2/3 flex flex-col gap-4 min-h-[340px]">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
              {/* Left large card (dark blue) */}
              <article className="md:col-span-6 bg-[#001D40] text-white px-10 pt-10 relative min-h-[320px] overflow-hidden  bg-[url('/bg-g.png')] bg-[position:bottom_left]  bg-no-repeat">
                <h3 className="font-bold text-[20px] mb-3">Practical Guides</h3>
                <p className="mb-8 opacity-90 text-[15px] leading-[26px]">
                  Clear, actionable documents covering:
                </p>
                <div className="flex flex-col gap-0 mb-4">  
                              
                    <div className="flex items-start pb-5 border-b border-[#D8D4C533]">  
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#fff] text-[15px] leading-6">Real estate regulations,</span>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="flex items-start py-5 border-b border-[#D8D4C533]">  
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#fff] text-[15px] leading-6">Notarial procedures,</span>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="flex items-start py-5">
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                            </div>               
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#fff] text-[15px] leading-6">Tax obligations.</span>
                            </div>
                        </div>
                    </div>
                </div>
              </article>

              {/* Right card (pale) */}
              <article className="md:col-span-6 bg-[#EEF3E7] text-[#0A2540]  px-10 pt-10  min-h-[320px]">
                <h3 className="font-bold text-[20px] mb-3">FIL Reports</h3>
                <p className="mb-8 opacity-90 text-[15px] leading-[26px]">
                  Institutional publications including:
                </p>
                <div className="flex flex-col gap-0 mb-4">  
                              
                    <div className="flex items-start pb-5 border-b border-[#0A2540]">  
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon2 className="text-teal-500 mt-1 flex-shrink-0" /> 
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#333333] text-[15px] leading-6">Market developments,</span>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="flex items-start py-5 border-b border-[#0A2540]">  
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon2 className="text-teal-500 mt-1 flex-shrink-0" /> 
                            </div>
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#333333] text-[15px] leading-6">Official positions,</span>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="flex items-start py-5">
                        <div className="flex items-center gap-4 flex-1">
                            <div className='w-4'>
                            <CheckIcon2 className="text-teal-500 mt-1 flex-shrink-0" />
                            </div>               
                            <div className='w-[calc(100%-16px)]'>
                            <span className="text-[#333333] text-[15px] leading-6">Recommendations for the sector.</span>
                            </div>
                        </div>
                    </div>
                </div>
              </article>

              {/* Bottom white strip spanning full width */}
              <article className="md:col-span-12 bg-white px-8 py-10 border border-[#e6e6e0]">
                <h4 className="text-[20px] font-semibold text-[#0A2540] mb-3">Market Studies &amp; Sector Analyses</h4>
                <p className="text-sm text-[#55606a]">Tools to understand trends, anticipate developments, and guide professional strategies.</p>
              </article>
            </div>
          </div>
          {/* Executive Bureau */}
          <div className="relative bg-[#88938F] text-white rounded-none shadow-lg w-full md:w-1/3 px-8 py-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g1.png')] bg-[position:bottom_right]  bg-no-repeat">
            <h3 className="font-bold text-[20px] mb-2">Contract Templates</h3>
            <p className="mb-4 opacity-90 text-[15px] leading-[26px]">
              Access to expert-approved standard documents:
            </p>
            <div className="flex flex-col gap-0 pb-2">  
                          
                <div className="flex items-start pb-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Sales and rental mandates,</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Lease agreements,</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Preliminary sales contracts (compromis de vente),</span>
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

    <section className="w-full bg-[#efede7] py-16  bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-serif font-bold text-[#0A2540] mb-16">
          Objectives of the Partnerships
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left large card */}
          <article className="md:col-span-6 bg-[#97A09D] text-white p-10 relative overflow-hidden min-h-[300px] shadow-md">
            <h3 className="font-bold text-[20px] mb-3">Offer Exclusive Benefits</h3>
            <p className="mb-8 opacity-90 text-[15px] leading-[26px]">
              Institutional publications including:
            </p>
            <div className="flex flex-col gap-0">  
                          
                <div className="flex items-start pb-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Tailored banking solutions</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Innovative digital tools</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Specialized training programs</span>
                        </div>
                    </div>
                </div>
            </div> 
          </article>

          {/* Middle card */}
          <article className="md:col-span-3 bg-[#EEF3E7] text-[#0A2540] p-10 min-h-[300px] shadow-sm">
            <h3 className="text-[20px] font-semibold mb-5">Enhance Credibility</h3>
            <p className="text-[15px] leading-[26px] mb-6 opacity-90">Support the profession's legitimacy among institutional stakeholders and public decision-makers.</p>
          </article>

          {/* Right card */}
          <article className="md:col-span-3 bg-[#0A2540] text-white p-10 min-h-[300px] shadow-md">
            <h3 className="text-[20px] font-semibold mb-5">Promote International Exchange</h3>
            <p className="text-[15px] leading-[26px] mb-6 opacity-95">Open the profession to international best practices through collaborations with foreign federations and networks.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="w-full bg-[#efede7] py-16 px-2 bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        <h2 className="text-center text-[32px] font-serif font-bold text-[#0A2540] mb-20">
         A Single Point of Contact
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-4 max-w-screen-xl mx-auto">
          {/* General Assembly */}
          <div className="relative bg-[#0a2540] text-white rounded-none shadow-lg w-full md:w-1/2 px-8 pt-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g.png')] bg-[position:bottom_left]  bg-no-repeat">
            {/* Optional: background image overlay */}
            <h3 className="font-bold text-lg mb-2">The Luxembourg Real Estate Federation (FIL) is here to:</h3>
            <div className="flex flex-col gap-0">     
                <div className="flex items-start pb-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Answer your questions</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Direct you to the right contacts</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Support you in your procedures</span>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
          <div className="relative bg-[#88938F] text-white rounded-none shadow-lg w-full md:w-1/2 px-8 py-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g1.png')] bg-[position:bottom_right]  bg-no-repeat">
            <h3 className="font-bold text-lg mb-2">Whether you are:</h3>
            <div className="flex flex-col gap-0">  
                          
                <div className="flex items-start pb-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">A real estate professional looking to join</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">An individual seeking reliable information</span>
                        </div>
                    </div>
                </div> 
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">An investor</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">An institution</span>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
        </div>
      </section>
    <div className="w-full pointer-events-none">
      <img src='img1.png' alt='Icon'/>
    </div>
    <section className="w-full bg-[#0A2540] py-16 bg-[url('bg11.png')] bg-no-repeat bg-right">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
          {/* Left: contact form (wide) */}
          <div className="md:col-span-8 text-white px-4 py-10 relative overflow-hidden min-h-[360px]">
            
            <h2 className="text-[32px] font-serif text-[#BBA25A] font-semibold mb-9">Online Contact Form</h2>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="text-sm">
                  <div className="text-[14px] mb-2 text-white/80">Full Name</div>
                  <input type="text" defaultValue="Rudolphe Aben" className="w-full bg-transparent border border-[#88938F] px-3 py-4 text-[#88938F] text-[15px] placeholder-[#88938F]" />
                </label>

                <label className="text-sm">
                  <div className="text-[14px] mb-2 text-white/80">Email</div>
                  <input type="email" defaultValue="Example@gmail.com" className="w-full bg-transparent border border-[#88938F] px-3 py-4 text-[#88938F] text-[15px] placeholder-[#88938F]" />
                </label>

                <label className="text-sm">
                  <div className="text-[14px] mb-2 text-white/80">Phone</div>
                  <input type="tel" defaultValue="012-123456" className="w-full bg-transparent border border-[#88938F] px-3 py-4 text-[#88938F] text-[15px] placeholder-[#88938F]" />
                </label>
              </div>

              <div>
                <label className="text-sm w-full">
                  <div className="text-[14px] mb-2 text-white/80">Purpose</div>
                  <select className="w-full bg-transparent border border-[#88938F] px-3 py-4 text-[#88938F] text-[15px] placeholder-[#88938F]">
                    <option>Membership</option>
                    <option>Information</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>

              <div>
                <label className="text-sm w-full">
                  <div className="text-[14px] mb-2 text-white/80">Additional Information</div>
                  <textarea rows={5} className="w-full bg-transparent border border-[#88938F] px-3 py-4 text-[#88938F] text-[15px] placeholder-[#88938F]"></textarea>
                </label>
              </div>

              <div className="flex items-center gap-3 text-[14px] text-[#88938F]">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 accent-[#88938F] rounded" />
                  <span>Personal information is transmitted and used for the purposes described in the privacy statement.</span>
                </label>
              </div>

              <div className="flex items-center gap-6 mt-16">
                <button type="submit" className="inline-flex items-center text-[16px] gap-3 text-[#BBA25A] font-medium">
                  Send a Message
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0Z" fill="#BBA25A"/>
                  <path d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0Z" stroke="#BBA25A"/>
                  <path d="M25 35.0004L35.8333 24.167M35.8333 24.167V34.567M35.8333 24.167H25.4333" stroke="#0A2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </button>
              </div>
            </form>
          </div>

          {/* Right: access & availability sidebar */}
          <aside className="md:col-span-4 text-white p-10 min-h-[360px]">
            <h3 className="text-[20px] font-semibold text-[#BBA25A] mb-4">Access and Availability</h3>
            <p className="text-[16px] leading-[26px] text-white/80 mb-10">
              We only receive visitors by appointment to ensure a personalized and efficient welcome.
            </p>

            <p className="text-[14px] leading-[26px] text-[#88938F] mb-6">
              Our headquarters is located in the heart of Luxembourg, easily accessible by:
            </p>
            <div className="flex flex-col gap-0">     
                <div className="flex items-start pb-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Public transport: Close to major bus and train lines.</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Car: Direct access via major routes, with parking nearby.</span>
                        </div>
                    </div>
                </div>
            </div> 
          </aside>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}

export default HeaderMenu;