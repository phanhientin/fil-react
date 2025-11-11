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
    <div className="min-h-screen">
      {/* Replaced local nav with shared Header component */}
      <Header />
      <div className="w-full bg-[#0A2540] py-20 flex flex-col items-center">
        {/* Members' Area button */}
        <div className="mb-4">
          <button className="px-4 py-2 border border-white rounded-full text-white text-xs hover:bg-white/10 transition">
            Members' Area
          </button>
        </div>
        {/* Title */}
        <h1 className="text-white font-display text-[40px] md:text-[60px] font-bold mb-2 text-center">
          Member Profile
        </h1>
        {/* Subtitle */}
        <p className="text-white/70 text-[15px] md:text-base text-center">
          Your personalized space within the Luxembourg Real Estate Federation.
        </p>
      </div>
      <div className="w-full bg-[#fff] pt-16 pb-10 flex flex-col items-center relative bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        {/* Logo floating above */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
          <div className="rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-[#fff]">
            <img src="logo1.png" alt="Company Logo" className="object-contain" />
          </div>
        </div>
        {/* Company Info */}
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-[#0A2540] text-[32px] font-bold mb-3">Company name</h2>
          <div className="flex flex-wrap items-center justify-center font-medium gap-4 text-[#0A2540] text-[20px] mb-5">
            <span className="flex items-center gap-2 ">
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.34315 14.6569C4.27976 15.5935 6.23844 17.5521 7.5862 18.8999C8.36725 19.681 9.63232 19.6814 10.4134 18.9003C11.7377 17.576 13.6584 15.6553 14.6569 14.6569C17.781 11.5327 17.781 6.46734 14.6569 3.34315C11.5327 0.218952 6.46734 0.218952 3.34315 3.34315C0.218952 6.46734 0.218953 11.5327 3.34315 14.6569Z" stroke="#0A2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6C7.34315 6 6 7.34315 6 9Z" stroke="#0A2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              123 example, Luxembourg
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4L11.1094 9.2604C10.4376 9.70827 9.5624 9.70827 8.8906 9.2604L1 4M17 15L3 15C1.89543 15 1 14.1046 1 13L1 3C1 1.89543 1.89543 1 3 1L17 1C18.1046 1 19 1.89543 19 3L19 13C19 14.1046 18.1046 15 17 15Z" stroke="#0A2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              contact@example
            </span>
            <span className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 19C18.1046 19 19 18.1046 19 17L19 13.7208C19 13.2903 18.7246 12.9082 18.3162 12.7721L13.8228 11.2743C13.3507 11.1169 12.8347 11.3306 12.6121 11.7757L11.4835 14.033C9.03878 12.9308 7.06925 10.9612 5.96701 8.5165L8.22427 7.38787C8.66938 7.16531 8.88311 6.64932 8.72574 6.17721L7.22792 1.68377C7.09181 1.27543 6.70967 1 6.27924 1L3 1C1.89543 1 0.999999 1.89543 0.999999 3L0.999999 4C1 12.2843 7.71573 19 16 19L17 19Z" stroke="#0A2540" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              012 1234
            </span>
          </div>
          {/* Edit Profile Button */}
          <button className="bg-[#0A2540] text-white px-5 py-3 rounded-full text-sm shadow transition mb-6">
            Edit Profile  <svg className="pl-2 inline-block" width="20" height="19" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.19727 12.1203L9.0006 8.31703C9.44977 7.86787 9.44977 7.13287 9.0006 6.6837L5.19727 2.88037" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </button>
          {/* Gateway to Services */}
          <h3 className="text-[#0A2540] text-[32px] font-bold mt-12 mb-2">Gateway to Services</h3>
          <p className="text-[#88938F]/70 text-[12px] mb-8 text-center max-w-xl">
            This Profile also acts as the entry point to all of the Federation’s tools and services:
          </p>
        </div>
        {/* Services Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-white p-6 flex flex-col items-start text-center">
            <h4 className="text-[#0A2540] font-semibold mb-2 text-base">Legal assistance & compliance support</h4>
            <a href="#" className="block text-[#BBA25A] text-sm font-medium mt-4 mx-auto">Find out more →</a>
          </div>
          <div className="bg-white p-6 flex flex-col items-start text-center">
            <h4 className="text-[#0A2540] font-semibold mb-2 text-base">Regulatory monitoring</h4>
            <a href="#" className="block text-[#BBA25A] text-sm font-medium mt-4 mx-auto">Find out more →</a>
          </div>
          <div className="bg-white p-6 flex flex-col items-start  text-center">
            <h4 className="text-[#0A2540] font-semibold mb-2 text-base">Documentation & resources</h4>
            <a href="#" className="block text-[#BBA25A] text-sm font-medium mt-4 mx-auto">Find out more →</a>
          </div>
          <div className="bg-white p-6 flex flex-col items-start  text-center">
            <h4 className="text-[#0A2540] font-semibold mb-2 text-base">Registration for events, committees, and working groups</h4>
            <a href="#" className="block text-[#BBA25A] text-sm font-medium mt-4 mx-auto">Find out more →</a>
          </div>
        </div>
      </div>

      <div className="w-full pointer-events-none">
        <img src='img1.png' alt='Icon'/>
      </div>
      <section className="bg-navy">
        <div className='px-5 lg:px-20 py-10 lg:py-20 max-w-[1440px] w-full m-auto relative overflow-hidden'>
          <svg className="absolute right-0 lg:right-[-303px] bottom-[-97px] w-[1498px] h-[696px]" viewBox="0 0 1195 503" fill="none">
            <path d="M220.355 -37.8128V244.564H348.467C372.156 243.806 391.771 235.752 407.216 220.306C422.851 204.956 430.716 185.246 430.716 161.178V152.46H440.571V376.466H430.716V368.886C430.716 344.912 423.135 325.203 407.974 309.757C392.813 294.122 373.577 286.068 350.362 285.499H220.355V528.836C220.355 545.798 226.419 560.201 238.548 572.046C250.867 583.985 265.459 589.86 282.137 589.86H293.886L295.024 599.715H0.138672V589.86H12.6466C29.3239 589.86 43.5375 583.985 55.477 572.046C67.6059 560.201 74.0494 545.798 74.8075 528.836V-11.6598C74.8075 -34.1173 64.0051 -50.8893 42.59 -62.0707C33.4933 -67.0928 23.449 -69.6513 12.6466 -69.6513H0.138672V-79.5061H371.587C391.487 -79.5061 413.47 -81.4012 437.539 -85.1915C461.512 -89.1713 478.284 -93.1511 487.95 -96.9414V67.1783H478.474V57.3236C478.474 28.8016 470.135 6.05984 453.458 -10.9017C436.97 -28.0528 414.513 -37.0548 385.991 -37.8128H220.355Z" fill="#071F38"/>
          </svg>
          <div className="relative z-10 flex flex-col gap-10"> 
            <h2 className="font-display text-[32px] leading-[40px] lg:text-[37.3px] lg:leading-[45.6px] font-bold text-[#BBA25A]">Manage Your Information Independently</h2>
            <div className="lg:flex gap-[100px]">
              <div className='mb-10 lg:mb-0'>
                <p className="w-[380px] text-[#D9D9D9] text-[15px] leading-[26px] pb-4">
                  All this data automatically feeds into the public-access Member Directory, ensuring optimal and up-to-date visibility.
                </p>
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <p className="text-[#9CA3AF] text-[14px] leading-[20px] pb-2">
                 From your profile, you can:
                </p>
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Update your professional contact details (address, phone number, email, website).</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Add or modify your logo, photo, or company description.</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px] pb-5 border-b border-white/20">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Specify your areas of specialization (residential sales, development, rentals, property management, etc.).</span>
                  </div>
                </div>
                <div className="flex items-start gap-[60px]">
                  <div className="flex items-center gap-[15px] flex-1">
                    <CheckIcon />
                    <span className="text-white text-sm leading-5">Check the status of your membership and dues.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full bg-[#efede7] py-16 px-2 bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
        <h2 className="text-center text-[32px] font-serif font-bold text-[#0A2540] mb-20">
          Our Services
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-5 max-w-screen-xl mx-auto">
          {/* General Assembly */}
          <div className="relative bg-[#0a2540] text-white rounded-none shadow-lg w-full md:w-1/3 px-8 pt-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g.png')] bg-[position:bottom_left]  bg-no-repeat">
            {/* Optional: background image overlay */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <path d="M8 22C8 21.4696 8.21072 20.9609 8.58576 20.5858C8.96088 20.2107 9.4696 20 10 20C10.5304 20 11.0391 20.2107 11.4142 20.5858C11.7893 20.9609 12 21.4696 12 22V24C12 24.5304 11.7893 25.0391 11.4142 25.4142C11.0391 25.7893 10.5304 26 10 26C9.4696 26 8.96088 25.7893 8.58576 25.4142C8.21072 25.0391 8 24.5304 8 24V22ZM20 14C20 13.4696 20.2107 12.9609 20.5858 12.5858C20.9609 12.2107 21.4696 12 22 12C22.5304 12 23.0391 12.2107 23.4142 12.5858C23.7893 12.9609 24 13.4696 24 14V24C24 24.5304 23.7893 25.0391 23.4142 25.4142C23.0391 25.7893 22.5304 26 22 26C21.4696 26 20.9609 25.7893 20.5858 25.4142C20.2107 25.0391 20 24.5304 20 24V14ZM14 18C14 17.4696 14.2107 16.9609 14.5858 16.5858C14.9609 16.2107 15.4696 16 16 16C16.5304 16 17.0391 16.2107 17.4142 16.5858C17.7893 16.9609 18 17.4696 18 18V24C18 24.5304 17.7893 25.0391 17.4142 25.4142C17.0391 25.7893 16.5304 26 16 26C15.4696 26 14.9609 25.7893 14.5858 25.4142C14.2107 25.0391 14 24.5304 14 24V18Z" fill="white"/>
                <path d="M8 3H6C4.93914 3 3.92172 3.42142 3.17158 4.17158C2.42142 4.92172 2 5.93914 2 7V28C2 29.0609 2.42142 30.0783 3.17158 30.8284C3.92172 31.5786 4.93914 32 6 32H26C27.0609 32 28.0783 31.5786 28.8284 30.8284C29.5786 30.0783 30 29.0609 30 28V7C30 5.93914 29.5786 4.92172 28.8284 4.17158C28.0783 3.42142 27.0609 3 26 3H24V5H26C26.5304 5 27.0391 5.21071 27.4142 5.58578C27.7893 5.96086 28 6.46957 28 7V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H6C5.46957 30 4.96086 29.7893 4.58578 29.4142C4.21071 29.0391 4 28.5304 4 28V7C4 6.46957 4.21071 5.96086 4.58578 5.58578C4.96086 5.21071 5.46957 5 6 5H8V3Z" fill="white"/>
                <path d="M19 2C19.2652 2 19.5196 2.10536 19.7071 2.2929C19.8946 2.48043 20 2.73478 20 3V5C20 5.26522 19.8946 5.51957 19.7071 5.7071C19.5196 5.89464 19.2652 6 19 6H13C12.7348 6 12.4804 5.89464 12.2929 5.7071C12.1054 5.51957 12 5.26522 12 5V3C12 2.73478 12.1054 2.48043 12.2929 2.2929C12.4804 2.10536 12.7348 2 13 2H19ZM13 0C12.2043 0 11.4413 0.31607 10.8786 0.87868C10.3161 1.44129 10 2.20435 10 3V5C10 5.79565 10.3161 6.55871 10.8786 7.12132C11.4413 7.68393 12.2043 8 13 8H19C19.7957 8 20.5587 7.68393 21.1214 7.12132C21.6839 6.55871 22 5.79565 22 5V3C22 2.20435 21.6839 1.44129 21.1214 0.87868C20.5587 0.31607 19.7957 0 19 0H13Z" fill="white"/>
                </g>
            </svg>
            <h3 className="font-bold text-lg mb-0">Personalized Advice</h3>
            <p className="mb-4 opacity-90 text-[15px] leading-[26px]">
              Direct support for all questions related to:
            </p>
            <div className="flex flex-col gap-0 pb-2">  
                          
                <div className="flex items-start pb-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Sales and rental contracts</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Commercial and residential leases</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Condominium ownership (co-ownership)</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#D8D4C533]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Pre-emption rights</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Notarial procedures</span>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
          {/* Board of Directors */}
          <div className="relative bg-[#fff] text-[#1a2633] rounded-none shadow-lg w-full md:w-1/3 flex flex-col min-h-[340px] border border-[#e5e7eb]">
            <div className="bg-[#EDF0E5]  px-5 py-10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.676 3.18C8.77112 3.70464 6.8792 4.27547 5.00201 4.892C4.83047 4.94732 4.67797 5.04982 4.56195 5.18776C4.44595 5.3257 4.37111 5.49351 4.34601 5.672C3.23801 13.986 5.79801 20.052 8.852 24.048C10.1445 25.7573 11.6863 27.2627 13.426 28.514C14.118 29.002 14.73 29.354 15.212 29.58C15.452 29.6934 15.6474 29.772 15.798 29.816C15.8644 29.8362 15.9318 29.8529 16 29.866C16.0675 29.8528 16.1342 29.8361 16.2 29.816C16.352 29.7706 16.548 29.692 16.788 29.58C17.268 29.354 17.882 29 18.574 28.514C20.3137 27.2627 21.8555 25.7573 23.148 24.048C26.202 20.054 28.762 13.986 27.654 5.672C27.6289 5.49351 27.5541 5.3257 27.4381 5.18776C27.3221 5.04982 27.1695 4.94732 26.998 4.892C25.696 4.466 23.498 3.772 21.324 3.182C19.104 2.58 17.062 2.134 16 2.134C14.94 2.134 12.896 2.578 10.676 3.18ZM10.144 1.12C12.314 0.53 14.62 0 16 0C17.38 0 19.686 0.53 21.856 1.12C24.076 1.72 26.314 2.43 27.63 2.86C28.1802 3.0417 28.668 3.37493 29.0374 3.8214C29.4067 4.26787 29.6426 4.80948 29.718 5.384C30.91 14.338 28.144 20.974 24.788 25.364C23.3643 27.2414 21.6675 28.8951 19.754 30.27C19.093 30.7469 18.3918 31.1651 17.658 31.52C17.098 31.784 16.496 32 16 32C15.504 32 14.904 31.784 14.342 31.52C13.6083 31.1651 12.907 30.7469 12.246 30.27C10.3325 28.8951 8.63568 27.2414 7.21201 25.364C3.85601 20.974 1.09001 14.338 2.28201 5.384C2.35739 4.80948 2.5933 4.26787 2.96265 3.8214C3.33199 3.37493 3.81979 3.0417 4.37001 2.86C6.28052 2.23402 8.20576 1.65386 10.144 1.12Z" fill="#0A2540"/>
              <path d="M21.7073 10.2919C21.8004 10.3848 21.8744 10.4951 21.9248 10.6166C21.9752 10.7381 22.0011 10.8684 22.0011 10.9999C22.0011 11.1314 21.9752 11.2616 21.9248 11.3832C21.8744 11.5046 21.8004 11.615 21.7073 11.7079L15.7073 17.7079C15.6144 17.801 15.5041 17.8748 15.3826 17.9253C15.2611 17.9757 15.1308 18.0016 14.9993 18.0016C14.8678 18.0016 14.7376 17.9757 14.616 17.9253C14.4946 17.8748 14.3842 17.801 14.2913 17.7079L11.2913 14.7079C11.1984 14.6149 11.1246 14.5045 11.0743 14.383C11.024 14.2616 10.998 14.1313 10.998 13.9999C10.998 13.8684 11.024 13.7382 11.0743 13.6167C11.1246 13.4952 11.1984 13.3848 11.2913 13.2919C11.3843 13.1989 11.4947 13.1252 11.6162 13.0748C11.7376 13.0245 11.8679 12.9986 11.9993 12.9986C12.1308 12.9986 12.261 13.0245 12.3825 13.0748C12.504 13.1252 12.6144 13.1989 12.7073 13.2919L14.9993 15.5859L20.2913 10.2919C20.3842 10.1988 20.4946 10.1248 20.616 10.0744C20.7376 10.024 20.8678 9.99805 20.9993 9.99805C21.1308 9.99805 21.2611 10.024 21.3826 10.0744C21.5041 10.1248 21.6144 10.1988 21.7073 10.2919Z" fill="#0A2540"/>
              </svg>
              <h3 className="font-bold text-lg mt-3">Compliance Support</h3>
              <p className="mb-4 opacity-90 text-[15px] leading-[26px] mt-3">
                Comprehensive assistance to meet obligations in the fight against money laundering and terrorist financing (AML/KYC).
              </p> 
            </div>
             <div className="bg-[#fff]  px-5 py-8 border-t-[15px] border-[#efede7]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.676 3.18C8.77112 3.70464 6.8792 4.27547 5.00201 4.892C4.83047 4.94732 4.67797 5.04982 4.56195 5.18776C4.44595 5.3257 4.37111 5.49351 4.34601 5.672C3.23801 13.986 5.79801 20.052 8.852 24.048C10.1445 25.7573 11.6863 27.2627 13.426 28.514C14.118 29.002 14.73 29.354 15.212 29.58C15.452 29.6934 15.6474 29.772 15.798 29.816C15.8644 29.8362 15.9318 29.8529 16 29.866C16.0675 29.8528 16.1342 29.8361 16.2 29.816C16.352 29.7706 16.548 29.692 16.788 29.58C17.268 29.354 17.882 29 18.574 28.514C20.3137 27.2627 21.8555 25.7573 23.148 24.048C26.202 20.054 28.762 13.986 27.654 5.672C27.6289 5.49351 27.5541 5.3257 27.4381 5.18776C27.3221 5.04982 27.1695 4.94732 26.998 4.892C25.696 4.466 23.498 3.772 21.324 3.182C19.104 2.58 17.062 2.134 16 2.134C14.94 2.134 12.896 2.578 10.676 3.18ZM10.144 1.12C12.314 0.53 14.62 0 16 0C17.38 0 19.686 0.53 21.856 1.12C24.076 1.72 26.314 2.43 27.63 2.86C28.1802 3.0417 28.668 3.37493 29.0374 3.8214C29.4067 4.26787 29.6426 4.80948 29.718 5.384C30.91 14.338 28.144 20.974 24.788 25.364C23.3643 27.2414 21.6675 28.8951 19.754 30.27C19.093 30.7469 18.3918 31.1651 17.658 31.52C17.098 31.784 16.496 32 16 32C15.504 32 14.904 31.784 14.342 31.52C13.6083 31.1651 12.907 30.7469 12.246 30.27C10.3325 28.8951 8.63568 27.2414 7.21201 25.364C3.85601 20.974 1.09001 14.338 2.28201 5.384C2.35739 4.80948 2.5933 4.26787 2.96265 3.8214C3.33199 3.37493 3.81979 3.0417 4.37001 2.86C6.28052 2.23402 8.20576 1.65386 10.144 1.12Z" fill="#0A2540"/>
              <path d="M21.7073 10.2919C21.8004 10.3848 21.8744 10.4951 21.9248 10.6166C21.9752 10.7381 22.0011 10.8684 22.0011 10.9999C22.0011 11.1314 21.9752 11.2616 21.9248 11.3832C21.8744 11.5046 21.8004 11.615 21.7073 11.7079L15.7073 17.7079C15.6144 17.801 15.5041 17.8748 15.3826 17.9253C15.2611 17.9757 15.1308 18.0016 14.9993 18.0016C14.8678 18.0016 14.7376 17.9757 14.616 17.9253C14.4946 17.8748 14.3842 17.801 14.2913 17.7079L11.2913 14.7079C11.1984 14.6149 11.1246 14.5045 11.0743 14.383C11.024 14.2616 10.998 14.1313 10.998 13.9999C10.998 13.8684 11.024 13.7382 11.0743 13.6167C11.1246 13.4952 11.1984 13.3848 11.2913 13.2919C11.3843 13.1989 11.4947 13.1252 11.6162 13.0748C11.7376 13.0245 11.8679 12.9986 11.9993 12.9986C12.1308 12.9986 12.261 13.0245 12.3825 13.0748C12.504 13.1252 12.6144 13.1989 12.7073 13.2919L14.9993 15.5859L20.2913 10.2919C20.3842 10.1988 20.4946 10.1248 20.616 10.0744C20.7376 10.024 20.8678 9.99805 20.9993 9.99805C21.1308 9.99805 21.2611 10.024 21.3826 10.0744C21.5041 10.1248 21.6144 10.1988 21.7073 10.2919Z" fill="#0A2540"/>
              </svg>
              <h3 className="font-bold text-lg mt-3">Dispute Support</h3>
              <p className="mb-4 opacity-90 text-[15px] leading-[26px] mt-3">
                Pre-litigation guidance and assistance to anticipate and minimize legal risks.
              </p> 
            </div>
          </div>
          {/* Executive Bureau */}
          <div className="relative bg-[#88938F] text-white rounded-none shadow-lg w-full md:w-1/3 px-8 py-8 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g1.png')] bg-[position:bottom_right]  bg-no-repeat">
           <img className="w-[32px]" src='icon.png' alt='Icon'/>
            <h3 className="font-bold text-lg">Standard Templates & Documents</h3>
            <p className="mb-4 opacity-90 text-[15px] leading-[26px]">
              Provision of legally validated contracts and documents, including:
            </p>
            <div className="flex flex-col gap-0 pb-2">  
                          
                <div className="flex items-start pb-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Sales and rental mandates</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Lease agreements</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5 border-b border-[#fff]">  
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                        </div>
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Preliminary sales contracts</span>
                        </div>
                    </div>
                </div> 
                
                <div className="flex items-start py-5">
                    <div className="flex items-center gap-4 flex-1">
                        <div className='w-4'>
                        <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" />
                        </div>               
                        <div className='w-[calc(100%-16px)]'>
                        <span className="text-[#fff] text-[15px] leading-6">Specialized templates adapted to the Luxembourg market</span>
                        </div>
                    </div>
                </div>
            </div> 
          </div>
        </div>
      </section>

      <div className="w-full bg-[#efede7] py-16">
        <h2 className="text-center text-2xl md:text-3xl font-serif font-bold text-[#0A2540] mb-12">
          Our Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-2">
          {/* Card 1: Personalized Advice */}
          <div className="relative bg-[#0A2540] text-white rounded-none shadow-lg flex flex-col gap-4 min-h-[340px] p-8">
            {/* Optional: background image overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('/logo3.png')] bg-contain bg-right bg-no-repeat pointer-events-none" />
            <div className="mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.7">
                <path d="M8 22C8 21.4696 8.21072 20.9609 8.58576 20.5858C8.96088 20.2107 9.4696 20 10 20C10.5304 20 11.0391 20.2107 11.4142 20.5858C11.7893 20.9609 12 21.4696 12 22V24C12 24.5304 11.7893 25.0391 11.4142 25.4142C11.0391 25.7893 10.5304 26 10 26C9.4696 26 8.96088 25.7893 8.58576 25.4142C8.21072 25.0391 8 24.5304 8 24V22ZM20 14C20 13.4696 20.2107 12.9609 20.5858 12.5858C20.9609 12.2107 21.4696 12 22 12C22.5304 12 23.0391 12.2107 23.4142 12.5858C23.7893 12.9609 24 13.4696 24 14V24C24 24.5304 23.7893 25.0391 23.4142 25.4142C23.0391 25.7893 22.5304 26 22 26C21.4696 26 20.9609 25.7893 20.5858 25.4142C20.2107 25.0391 20 24.5304 20 24V14ZM14 18C14 17.4696 14.2107 16.9609 14.5858 16.5858C14.9609 16.2107 15.4696 16 16 16C16.5304 16 17.0391 16.2107 17.4142 16.5858C17.7893 16.9609 18 17.4696 18 18V24C18 24.5304 17.7893 25.0391 17.4142 25.4142C17.0391 25.7893 16.5304 26 16 26C15.4696 26 14.9609 25.7893 14.5858 25.4142C14.2107 25.0391 14 24.5304 14 24V18Z" fill="white"/>
                <path d="M8 3H6C4.93914 3 3.92172 3.42142 3.17158 4.17158C2.42142 4.92172 2 5.93914 2 7V28C2 29.0609 2.42142 30.0783 3.17158 30.8284C3.92172 31.5786 4.93914 32 6 32H26C27.0609 32 28.0783 31.5786 28.8284 30.8284C29.5786 30.0783 30 29.0609 30 28V7C30 5.93914 29.5786 4.92172 28.8284 4.17158C28.0783 3.42142 27.0609 3 26 3H24V5H26C26.5304 5 27.0391 5.21071 27.4142 5.58578C27.7893 5.96086 28 6.46957 28 7V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H6C5.46957 30 4.96086 29.7893 4.58578 29.4142C4.21071 29.0391 4 28.5304 4 28V7C4 6.46957 4.21071 5.96086 4.58578 5.58578C4.96086 5.21071 5.46957 5 6 5H8V3Z" fill="white"/>
                <path d="M19 2C19.2652 2 19.5196 2.10536 19.7071 2.2929C19.8946 2.48043 20 2.73478 20 3V5C20 5.26522 19.8946 5.51957 19.7071 5.7071C19.5196 5.89464 19.2652 6 19 6H13C12.7348 6 12.4804 5.89464 12.2929 5.7071C12.1054 5.51957 12 5.26522 12 5V3C12 2.73478 12.1054 2.48043 12.2929 2.2929C12.4804 2.10536 12.7348 2 13 2H19ZM13 0C12.2043 0 11.4413 0.31607 10.8786 0.87868C10.3161 1.44129 10 2.20435 10 3V5C10 5.79565 10.3161 6.55871 10.8786 7.12132C11.4413 7.68393 12.2043 8 13 8H19C19.7957 8 20.5587 7.68393 21.1214 7.12132C21.6839 6.55871 22 5.79565 22 5V3C22 2.20435 21.6839 1.44129 21.1214 0.87868C20.5587 0.31607 19.7957 0 19 0H13Z" fill="white"/>
                </g>
                </svg>

              <div className="font-bold text-lg">Personalized Advice</div>
            </div>
            <p className="mb-4 text-sm opacity-90">
              Direct support for all questions related to:
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#BBA25A" fillOpacity="0.12"/>
                  <path d="M6.5 9.5L8 11L11.5 7.5" stroke="#BBA25A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Sales and rental contracts</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#BBA25A" fillOpacity="0.12"/>
                  <path d="M6.5 9.5L8 11L11.5 7.5" stroke="#BBA25A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Commercial and residential leases</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#BBA25A" fillOpacity="0.12"/>
                  <path d="M6.5 9.5L8 11L11.5 7.5" stroke="#BBA25A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Condominium ownership (co-ownership)</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#BBA25A" fillOpacity="0.12"/>
                  <path d="M6.5 9.5L8 11L11.5 7.5" stroke="#BBA25A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Pre-emption rights</span>
              </li>
              <li className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="#BBA25A" fillOpacity="0.12"/>
                  <path d="M6.5 9.5L8 11L11.5 7.5" stroke="#BBA25A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Notarial procedures</span>
              </li>
            </ul>
          </div>
          {/* Card 2: Compliance Support & Dispute Support */}
          <div className="relative bg-white/80 text-[#0A2540] rounded-none shadow-lg flex flex-col gap-4 min-h-[340px] p-8 border border-[#e5e7eb]">
            <div className="absolute inset-0 opacity-10 bg-[url('/logo3.png')] bg-contain bg-right bg-no-repeat pointer-events-none" />
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#0A2540" strokeWidth="1.5"/>
                <path d="M12 8v4l3 2" stroke="#0A2540" strokeWidth="1.5"/>
              </svg>
              <span className="font-bold text-lg">Compliance Support</span>
            </div>
            <p className="mb-4 text-sm opacity-90">
              Comprehensive assistance to meet obligations in the fight against money laundering and terrorist financing (AML/KYC).
            </p>
            <div className="mt-8 flex items-center gap-2 mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#0A2540" strokeWidth="1.5"/>
                <path d="M12 8v4l3 2" stroke="#0A2540" strokeWidth="1.5"/>
              </svg>
              <span className="font-bold text-lg">Dispute Support</span>
            </div>
            <p className="mb-4 text-sm opacity-90">
              Pre-litigation guidance and assistance to anticipate and minimize legal risks.
            </p>
          </div>
          {/* Card 3: Standard Templates & Documents */}
          <div className="relative bg-[#88938F] text-white rounded-none shadow-lg flex flex-col gap-4 min-h-[340px] p-8">
            <div className="absolute inset-0 opacity-10 bg-[url('/logo3.png')] bg-contain bg-right bg-no-repeat pointer-events-none" />
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="1.5"/>
                <path d="M8 12h8M8 16h8M8 8h8" stroke="#fff" strokeWidth="1.5"/>
              </svg>
              <span className="font-bold text-lg">Standard Templates & Documents</span>
            </div>
            <p className="mb-4 text-sm opacity-90">
              Provision of legally validated contracts and documents, including:
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                <span>Sales and rental mandates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                <span>Lease agreements</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                <span>Preliminary sales contracts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white mr-2"></span>
                <span>Specialized templates adapted to the Luxembourg market</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


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