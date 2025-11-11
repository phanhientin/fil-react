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
      <div className="w-full bg-[#efede7] flex flex-col items-center pt-20  bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        <form className="w-full max-w-xl">
          <div className="flex items-center border border-[#0A2540] rounded-md  overflow-hidden">
            <input
              type="text"
              placeholder="Search Members Directory"
              className="flex-1 px-4 py-5 outline-none bg-transparent text-[#0A2540] placeholder:text-[#0A2540] text-sm"
            />
            <button
              type="submit"
              className="px-3 py-2 hover:bg-[#f5f5f5] transition"
              aria-label="Search"
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5Z" stroke="#0A2540"/>
                <path d="M11 15H19M19 15L15.5 11M19 15L15.5 19" stroke="#0A2540" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </button>
          </div>
        </form>
      </div>


      <div className="w-full bg-[#efede7] py-12  bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2">
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="Secretimmo S.A." className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo1.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">Secretimmo S.A.</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">45A avenue Monterey,<br />L-2163 Luxembourg</p>
              <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="HORUS Immobilier" className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo2.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">HORUS Immobilier</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">16, Avenue Grand-Duc Jean<br/>L-1842 Howald</p>
              <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="Eires Real Estate" className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo3.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">Eires Real Estate</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">44, Rue de Hunsdorf L-7324 Mullendorf</p>
            <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="Silxome" className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo4.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">Silxome</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">13, rue Marie Rausch-Weynand<br/> L-4544 Differdange</p>
            <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 pt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="Secretimmo S.A." className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo1.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">Secretimmo S.A.</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">45A avenue Monterey,<br />L-2163 Luxembourg</p>
              <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="HORUS Immobilier" className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo2.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">HORUS Immobilier</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">16, Avenue Grand-Duc Jean<br/>L-1842 Howald</p>
              <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="Eires Real Estate" className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo3.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">Eires Real Estate</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">44, Rue de Hunsdorf L-7324 Mullendorf</p>
            <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-md shadow-sm border border-[#e5e7eb] flex flex-col items-center pb-6">
            <img src="pr1.jpg" alt="Silxome" className="w-full h-40 object-cover rounded-t-md" />
            <div className="flex flex-col items-center -mt-8 mb-2">
              <div className="w-14 h-14">
                <img src="logo4.png" alt="Secretimmo Logo" />
              </div>
            </div>
            <div className="flex flex-col items-center px-4">
              <h3 className="font-semibold text-[#0A2540] text-[20px] mt-2 mb-2 text-center">Silxome</h3>
              <p className="text-[#88938F] text-[15px] text-center mb-6 leading-[26px]">13, rue Marie Rausch-Weynand<br/> L-4544 Differdange</p>
            <a href="#" className="text-[#BBA25A] text-sm font-medium flex items-center gap-1 hover:underline">
                Website
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
        <nav className="max-w-7xl  mx-auto flex items-center justify-between px-4 mt-20">
            {/* Previous */}
            <div className="flex-1 flex justify-start">
              <button className="flex items-center gap-1 text-[#0A2540] hover:underline px-2 py-1">
                <svg width="18" height="18" fill="none" stroke="#0A2540" strokeWidth="1.5" viewBox="0 0 20 20">
                  <path d="M12 15L7 10L12 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">Previous</span>
              </button>
            </div>

            {/* Page numbers */}
            <ul className="flex items-center justify-center gap-2">
              <li>
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A2540] text-white text-sm">
                  1
                </span>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#0A2540] text-sm hover:bg-[#e5e7eb]">2</button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#0A2540] text-sm hover:bg-[#e5e7eb]">3</button>
              </li>
              <li>
                <span className="w-10 h-10 flex items-center justify-center text-[#0A2540] text-sm">...</span>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#0A2540] text-sm hover:bg-[#e5e7eb]">8</button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#0A2540] text-sm hover:bg-[#e5e7eb]">9</button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#0A2540] text-sm hover:bg-[#e5e7eb]">10</button>
              </li>
            </ul>

            {/* Next */}
            <div className="flex-1 flex justify-end">
              <button className="flex items-center gap-1 text-[#0A2540] hover:underline px-2 py-1">
                <span className="text-sm">Next</span>
                <svg width="18" height="18" fill="none" stroke="#0A2540" strokeWidth="1.5" viewBox="0 0 20 20">
                  <path d="M8 5L13 10L8 15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
        </nav>
      </div>


      <section className="relative px-5 lg:px-20 py-10 lg:py-20  sm:py-8  lg:flex items-center max-w-[1440px] m-auto w-full bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
         <img  src="m1.jpg" alt="Building" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[640px] object-cover"/>
        
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
                    A Trusted <span className='text-[#BBA25A]'>Network</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    The Member Directory of the Luxembourg Real Estate Federation (FIL, Fédération Immobilière du Luxembourg) is the reference tool for identifying reliable, recognized real estate professionals committed to an ethical approach.
                </p>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    Each member listed in this directory is a real estate agency or developer that has adhered to the Federation’s Code of Ethics. This means the public can be assured of collaborating with a partner that complies with the law, maintains transparent practices, and prioritizes the quality of its support services.
                </p>
            </div>
        </div>
      </section>

      {/* Top curved decorative SVG */}
      <div className="w-full pointer-events-none">
        <img src='img1.png' alt='Icon'/>
      </div>
      <section className="bg-[#0A2540] bg-[url('bghh.png')] bg-no-repeat bg-right text-white overflow-hidden">

        <div className="relative max-w-6xl mx-auto px-2 py-16 lg:py-16">
          <h2 className="text-center text-[#d4b24a] font-serif font-semibold text-2xl lg:text-3xl">
         Why Consult the Directory?
          </h2>  
          <p className="text-center text-[14px] leading-5 mt-5 mb-10">The real estate market is complex and involves significant financial stakes. Choosing a FIL member professional means:</p>
        
          <div className="text-center grid grid-cols-1 md:grid-cols-4 gap-10 mt-20">
            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Security</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Working with a trained, monitored professional who complies with legislation.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Transparency</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Receiving clear communication and reliable information.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Ethics</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Being supported by a professional committed to fair practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">Expertise</h3>
              <p className="text-sm text-white/80 leading-[26px] mb-5">
                Accessing agencies and developers with in-depth knowledge of the Luxembourg market.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white bg-[url('/bg-line2.png')] bg-top bg-repeat-y">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-[#0A2540] font-serif font-semibold text-2xl lg:text-3xl mb-10">
            A Tool for the Public and Institutions
          </h2>
          <div className="text-center grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div>
              <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">For individuals</h3>
              <p className="leading-[26px] text-[#88938F]">
                Find a trusted agency to sell, buy, or rent a property.
              </p>
            </div>

            <div>
               <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">For investors</h3>
              <p className="leading-[26px] text-[#88938F]">
                Identify solid developers for real estate projects in Luxembourg.
              </p>
            </div>

            <div>
               <h3 className="text-xl text-[#d4b24a] font-semibold mb-3">For institutions</h3>
              <p className="leading-[26px] text-[#88938F]">
                Access a reliable database of professionals representing the sector.
              </p>
            </div>
          </div>

          <p className="mt-20 text-center text-sm text-[#88938F] max-w-3xl mx-auto">
           The directory also serves as a collective showcase, enhancing the visibility of FIL members and highlighting their contribution to the dynamism of the Luxembourg real estate market.
          </p>
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
                    A Quality  <span className='text-[#BBA25A]'>Label</span>
                </h2>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    The Member Directory of the Luxembourg Real Estate Federation (FIL, Fédération Immobilière du Luxembourg) is the reference tool for identifying reliable, recognized real estate professionals committed to an ethical approach.
                </p>
                <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    Each member undertakes to maintain a high level of competence and pursue regular training to meet market expectations.
                </p>
                 <p className="text-gray-600 text-['#88938F] text-[15px] leading-[26px]">
                    Thus, the FIL Directory is more than just a list: it is a quality and trust label for consumers and partners.
                </p>
            </div>
        </div>
        <img  src="m2.jpg" alt="BuildingA2" className="flex-1 w-full lg:w-[50%] h-[450px] lg:h-[480px] object-cover"/>
      </section>
      
      <div className="w-full bg-[#0A2540] pb-16 bg-[url('bg4.png')] bg-top-left no-repeat">
      {/* Top section: Image + Conclusion */}
        <div className="mx-auto flex flex-col lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img src="m3.jpg" alt="House" className="w-full  object-cover"
            />
          </div>
          {/* Conclusion box */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-10">
             <h2 className="text-2xxl lg:text-3xl font-bold font-serif text-[#d4b24a] mb-4">Conclusion</h2>
              <p className="text-sm text-white/80 mb-5 leading-6 max-w-[560px]">
              By consulting this directory, you choose to work with certified, committed, and reliable professionals who contribute to the credibility and sustainability of the real estate market in Luxembourg.
            </p>
          </div>
        </div>

        {/* Search box */}
        <div className="flex flex-col items-center mt-20 mb-14 px-4">
          <form className="w-full max-w-xl">
            <div className="flex items-center border border-white rounded-md bg-[#0A2540] overflow-hidden">
              <input
                type="text"
                placeholder="Search Members Directory"
                className="flex-1 px-4 py-5 outline-none bg-transparent text-white placeholder:text-white text-sm"
              />
              <button
                type="submit"
                className="px-3 py-2 hover:bg-[#1a2633] transition"
                aria-label="Search"
              >
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15C0.5 6.99187 6.99187 0.5 15 0.5Z" stroke="white"/>
                <path d="M11 15H19M19 15L15.5 11M19 15L15.5 19" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </button>
            </div>
          </form>
        </div>

        {/* Logo row */}
          <div className="flex flex-row items-center justify-center flex-wrap gap-5 md:flex-nowrap md:gap-12 text-center">
            {/* Logo 1 */}
            <div className="">
              <img src="logo1.png" alt="Logo 1" className="w-18 h-18 object-contain" />
            </div>
            {/* Logo 2 */}
            <div className="">
              <img src="logo2.png" alt="Logo 2" className="w-18 h-18 object-contain" />
            </div>
            {/* Logo 3 */}
            <div className="">
              <img src="logo3.png" alt="Logo 3" className="w-18 h-18 object-contain" />
            </div>
            {/* Logo 4 */}
            <div className="">
              <img src="logo4.png" alt="Logo 4" className="w-18 h-18 object-contain" />
            </div>
            {/* Logo 5 */}
            <div className="">
              <img src="logo5.png" alt="Logo 5" className="w-18 h-18 object-contain" />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default HeaderMenu;