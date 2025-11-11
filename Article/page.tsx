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
      <div className="w-full">
        <img  src="singl.jpg" alt="Building" className="w-full"></img>
      </div>
      <section className="w-full bg-white py-20 bg-[url('line-white.png')] bg-top bg-repeat-y">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-[#0A2540] leading-tight mb-8">
            Lorem ipsum dolor sit amet consectetur. Id fermentum turpis orci integer.
          </h1>

          <p className="text-gray-600 text-base leading-7 mb-8">
            Lorem ipsum dolor sit amet consectetur. Id fermentum turpis orci integer. Cursus ut tristique fringilla gravida faucibus.
            Pharetra amet est consectetur morbi. Id tempor nunc in enim integer. Potenti leo lacus pretium felis at aliquet neque ultricies.
            Varius dictumst est mauris vel hac nunc quam. Tempus pellentesque eu maecenas hac sed.
          </p>

          <h2 className="font-semibold text-[#0A2540] text-lg mb-5">
            Lorem ipsum dolor sit amet consectetur. Id fermentum turpis orci integer.
          </h2>
          <p className="text-gray-600 text-base leading-7 mb-8">
            Lorem ipsum dolor sit amet consectetur. Id fermentum turpis orci integer. Cursus ut tristique fringilla gravida faucibus.
            Pharetra amet est consectetur morbi. Id tempor nunc in enim integer. Potenti leo lacus pretium felis at aliquet neque ultricies.
          </p>

          <h3 className="font-semibold text-[#0A2540] text-base mb-3">
            Pretium felis at aliquet neque ultricies. Varius di
          </h3>
          <p className="text-gray-600 text-base leading-7 mb-8">
            Sed fermentum suscipit non enim mi at pretium. Integer mollis a mauris rutrum. Pharetra arcu at tincidunt viverra turpis.
            Velit mi nibh quis sed mauris dictum ultricies lacus lectus. Massa lorem mauris fermentum morbi ut.
          </p>

          <h4 className="font-semibold text-[#0A2540] text-base mb-3">
            Sed fermentum suscipit non enim mi at pretium
          </h4>
          <p className="text-gray-600 text-base leading-7 mb-8">
            Sed fermentum suscipit non enim mi at pretium. Integer mollis a mauris rutrum. Pharetra arcu at tincidunt viverra turpis.
            Velit mi nibh quis sed mauris dictum ultricies lacus lectus. Massa lorem mauris fermentum morbi ut.
          </p>

          <div className="mt-10 pt-8">
            <div className="text-center mb-4 text-[14px] text-[#0A2540]">Share this post</div>

            <div className="flex items-center justify-center gap-4">
              <a href="#" aria-label="Share X" className="w-10 h-10 rounded-full border border-[#0A2540] flex items-center justify-center text-[#0A2540] hover:bg-gray-100">
                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3802 0H13.5959L8.7552 5.44078L14.45 12.8444H9.99103L6.49858 8.35416L2.50244 12.8444H0.285344L5.46304 7.02492L0 0H4.57218L7.72903 4.10429L11.3802 0ZM10.6025 11.5402H11.8303L3.90504 1.2357H2.58751L10.6025 11.5402Z" fill="#0A2540"/>
                </svg>
              </a>

              <a href="#" aria-label="Share Facebook" className="w-10 h-10 rounded-full border border-[#0A2540] flex items-center justify-center text-[#0A2540] hover:bg-gray-100">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2280_15250)">
                  <path d="M5.37708 6.55061H8.77708L8.39931 8.06172H5.37708V14.8617H3.86597V8.06172H0.84375V6.55061H3.86597V5.13621C3.86597 3.78905 4.00651 3.30021 4.26944 2.80759C4.52709 2.32086 4.92511 1.92284 5.41184 1.66519C5.90446 1.40225 6.39331 1.26172 7.74046 1.26172C8.13486 1.26172 8.48091 1.2995 8.77708 1.37505V2.77283H7.74046C6.74011 2.77283 6.43562 2.83176 6.12508 2.99799C5.89539 3.12039 5.72464 3.29114 5.60224 3.52083C5.43602 3.83136 5.37708 4.13585 5.37708 5.13621V6.55061Z" fill="#0A2540" stroke="#0A2540" stroke-width="0.8"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_2280_15250">
                  <rect width="10" height="16" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>

              </a>

              <a href="#" aria-label="Share LinkedIn" className="w-10 h-10 rounded-full border border-[#0A2540] flex items-center justify-center text-[#0A2540] hover:bg-gray-100">
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7166 1.95635C12.7166 1.95635 12.5911 1.06756 12.2047 0.677296C11.7156 0.163658 11.1686 0.16114 10.9178 0.130926C9.1216 1.49012e-08 6.42474 0 6.42474 0H6.41971C6.41971 0 3.72288 1.49012e-08 1.92667 0.130926C1.6758 0.16114 1.1289 0.163658 0.639715 0.677296C0.253377 1.06756 0.130451 1.95635 0.130451 1.95635C0.130451 1.95635 0 3.00124 0 4.04362V5.02053C0 6.06291 0.127943 7.10781 0.127943 7.10781C0.127943 7.10781 0.253377 7.99658 0.637205 8.38682C1.12639 8.90052 1.76862 8.88284 2.05462 8.93822C3.08317 9.03645 6.42222 9.06667 6.42222 9.06667C6.42222 9.06667 9.1216 9.06161 10.9178 8.93324C11.1686 8.90302 11.7156 8.90052 12.2047 8.38682C12.5911 7.99658 12.7166 7.10781 12.7166 7.10781C12.7166 7.10781 12.8445 6.06543 12.8445 5.02053V4.04362C12.8445 3.00124 12.7166 1.95635 12.7166 1.95635ZM5.09514 6.20642V2.58329L8.5646 4.40115L5.09514 6.20642Z" fill="#0A2540"/>
                </svg>

              </a>

              <a href="#" aria-label="Share Instagram" className="w-10 h-10 rounded-full border border-[#0A2540] flex items-center justify-center text-[#0A2540] hover:bg-gray-100">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2280_15256)">
                <path d="M11.4185 2.5878C11.2545 2.5878 11.0943 2.63641 10.958 2.72748C10.8218 2.81854 10.7155 2.94797 10.6528 3.0994C10.5901 3.25084 10.5737 3.41748 10.6056 3.57823C10.6376 3.73899 10.7165 3.88667 10.8324 4.00257C10.9484 4.11847 11.096 4.1974 11.2568 4.22938C11.4175 4.26135 11.5842 4.24495 11.7356 4.18222C11.8871 4.11949 12.0164 4.01327 12.1075 3.87698C12.1986 3.7407 12.2472 3.58046 12.2472 3.41655C12.2472 3.19675 12.1599 2.98596 12.0045 2.83054C11.849 2.67512 11.6383 2.5878 11.4185 2.5878ZM14.5953 4.25912C14.5819 3.6861 14.4746 3.11917 14.2776 2.5809C14.102 2.12034 13.8287 1.70331 13.4765 1.35849C13.1345 1.0045 12.7166 0.732906 12.2541 0.564273C11.7173 0.361341 11.1497 0.251565 10.5759 0.23968C9.84378 0.198242 9.60897 0.198242 7.73047 0.198242C5.85197 0.198242 5.61715 0.198242 4.88509 0.23968C4.31128 0.251565 3.74373 0.361341 3.20687 0.564273C2.74531 0.734618 2.32766 1.00597 1.98447 1.35849C1.63047 1.70047 1.35888 2.11848 1.19025 2.5809C0.987318 3.11775 0.877541 3.68531 0.865656 4.25912C0.824219 4.99118 0.824219 5.22599 0.824219 7.10449C0.824219 8.98299 0.824219 9.2178 0.865656 9.94987C0.877541 10.5236 0.987318 11.0912 1.19025 11.6281C1.35888 12.0905 1.63047 12.5085 1.98447 12.8505C2.32766 13.203 2.74531 13.4744 3.20687 13.6447C3.74373 13.8477 4.31128 13.9574 4.88509 13.9693C5.61715 14.0107 5.85197 14.0107 7.73047 14.0107C9.60897 14.0107 9.84378 14.0107 10.5759 13.9693C11.1497 13.9574 11.7173 13.8477 12.2541 13.6447C12.7166 13.4761 13.1345 13.2045 13.4765 12.8505C13.8303 12.5069 14.1039 12.0895 14.2776 11.6281C14.4746 11.0898 14.5819 10.5229 14.5953 9.94987C14.5953 9.2178 14.6368 8.98299 14.6368 7.10449C14.6368 5.22599 14.6368 4.99118 14.5953 4.25912ZM13.3522 9.86699C13.3471 10.3054 13.2678 10.7398 13.1174 11.1516C13.0071 11.4521 12.83 11.7237 12.5994 11.9458C12.3754 12.174 12.1044 12.3508 11.8052 12.4637C11.3934 12.6141 10.959 12.6935 10.5206 12.6986C9.82997 12.7331 9.57443 12.74 7.75809 12.74C5.94175 12.74 5.68622 12.74 4.99559 12.6986C4.5404 12.7071 4.08714 12.637 3.65578 12.4914C3.36971 12.3727 3.11112 12.1963 2.89609 11.9734C2.66687 11.7516 2.49196 11.4797 2.38503 11.1792C2.21641 10.7615 2.12289 10.3173 2.10878 9.86699C2.10878 9.17637 2.06734 8.92084 2.06734 7.10449C2.06734 5.28815 2.06734 5.03262 2.10878 4.34199C2.11187 3.89381 2.19369 3.44967 2.3505 3.0298C2.47208 2.7383 2.6587 2.47845 2.89609 2.27012C3.10591 2.03266 3.36523 1.84407 3.65578 1.71762C4.07675 1.56571 4.52044 1.48631 4.96797 1.4828C5.65859 1.4828 5.91412 1.44137 7.73047 1.44137C9.54681 1.44137 9.80234 1.44137 10.493 1.4828C10.9314 1.48783 11.3658 1.56723 11.7776 1.71762C12.0914 1.83409 12.3731 2.02346 12.5994 2.27012C12.8258 2.48226 13.0026 2.74163 13.1174 3.0298C13.2709 3.45035 13.3504 3.89431 13.3522 4.34199C13.3867 5.03262 13.3936 5.28815 13.3936 7.10449C13.3936 8.92084 13.3867 9.17637 13.3522 9.86699ZM7.73047 3.56159C7.03004 3.56295 6.34573 3.7719 5.76402 4.16202C5.1823 4.55215 4.72927 5.10596 4.46218 5.75346C4.19508 6.40096 4.1259 7.1131 4.26339 7.79991C4.40087 8.4867 4.73884 9.11734 5.2346 9.61211C5.73036 10.107 6.36166 10.4437 7.04872 10.5798C7.73579 10.716 8.44779 10.6454 9.09477 10.377C9.74175 10.1087 10.2948 9.65456 10.6837 9.07213C11.0727 8.48963 11.2803 7.80491 11.2803 7.10449C11.2812 6.63839 11.19 6.17672 11.0118 5.74601C10.8337 5.31529 10.5721 4.92406 10.2423 4.5948C9.91229 4.26554 9.52053 4.00475 9.08948 3.82743C8.65842 3.65011 8.19656 3.55976 7.73047 3.56159ZM7.73047 9.40427C7.27561 9.40427 6.83098 9.26937 6.45277 9.0167C6.07458 8.76399 5.77981 8.40481 5.60574 7.98458C5.43168 7.56435 5.38613 7.10194 5.47488 6.65583C5.56362 6.20971 5.78265 5.79993 6.10427 5.4783C6.4259 5.15667 6.83568 4.93764 7.2818 4.8489C7.72792 4.76016 8.19032 4.80571 8.61055 4.97977C9.03078 5.15384 9.38996 5.4486 9.64267 5.8268C9.89535 6.205 10.0303 6.64964 10.0303 7.10449C10.0303 7.40651 9.97076 7.70556 9.8552 7.98458C9.73963 8.2636 9.57021 8.51713 9.35666 8.73068C9.14311 8.94423 8.88957 9.11366 8.61055 9.22922C8.33153 9.34479 8.03248 9.40427 7.73047 9.40427Z" fill="#0A2540"/>
                </g>
                <defs>
                <clipPath id="clip0_2280_15256">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                </defs>
                </svg>

              </a>
            </div>
          </div>
        </div>
      </section>
    <section className="w-full bg-[#efede7] py-16 px-2 bg-[url('/bg-line2.svg')] bg-top bg-repeat-y">
      <h2 className="text-center text-2xl md:text-3xl font-serif font-bold text-[#0A2540] mb-12 mt-12">
        More News
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-2 max-w-screen-xl mx-auto">
        {/* Executive Bureau */}
        <div className="relative bg-[#88938F] text-white rounded-none shadow-lg w-full md:w-1/2 px-8 py-12 flex flex-col gap-4 min-h-[340px] bg-[url('/bg-g1.png')] bg-[position:bottom_right]  bg-no-repeat">
          <h3 className="font-bold text-[20px]">Press Releases</h3>
          <p className="mb-5 opacity-90 text-[15px] leading-[26px]">
            Official positions of the Federation on key strategic topics:
          </p>
          <div className="flex flex-col gap-0 pb-2">  
                        
              <div className="flex items-start pb-5 border-b border-[#fff]">  
                  <div className="flex items-center gap-4 flex-1">
                      <div className='w-4'>
                      <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                      </div>
                      <div className='w-[calc(100%-16px)]'>
                      <span className="text-[#fff] text-[15px] leading-6">Taxation</span>
                      </div>
                  </div>
              </div> 
              
              <div className="flex items-start py-5 border-b border-[#fff]">  
                  <div className="flex items-center gap-4 flex-1">
                      <div className='w-4'>
                      <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                      </div>
                      <div className='w-[calc(100%-16px)]'>
                      <span className="text-[#fff] text-[15px] leading-6">Affordable housing</span>
                      </div>
                  </div>
              </div> 
              
              <div className="flex items-start py-5 border-b border-[#fff]">  
                  <div className="flex items-center gap-4 flex-1">
                      <div className='w-4'>
                      <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                      </div>
                      <div className='w-[calc(100%-16px)]'>
                      <span className="text-[#fff] text-[15px] leading-6">Urban planning</span>
                      </div>
                  </div>
              </div> 
              
              <div className="flex items-start py-5 border-b border-[#fff]">  
                  <div className="flex items-center gap-4 flex-1">
                      <div className='w-4'>
                      <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" /> 
                      </div>
                      <div className='w-[calc(100%-16px)]'>
                      <span className="text-[#fff] text-[15px] leading-6">Digitalization</span>
                      </div>
                  </div>
              </div> 
              
              <div className="flex items-start py-5">
                  <div className="flex items-center gap-4 flex-1">
                      <div className='w-4'>
                      <CheckIcon1 className="text-teal-500 mt-1 flex-shrink-0" />
                      </div>               
                      <div className='w-[calc(100%-16px)]'>
                      <span className="text-[#fff] text-[15px] leading-6">Energy transition</span>
                      </div>
                  </div>
              </div>
              <div className="mt-3">
                <a href="#" className="inline-flex items-center gap-2 text-[#fff] font-medium text-sm">
                  Find out more
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 9.16663L9.16667 0.5M9.16667 0.5V8.82003M9.16667 0.5H0.84667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </a>
              </div>
          </div> 
        </div>
        {/* General Assembly */}
        <div className="relative bg-[#efede7] text-white rounded-none shadow-lg w-full md:w-1/2 flex flex-col gap-4 min-h-[340px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {/* Top-left: Market News */}
            <article className="bg-[#EDF0E5] text-[#0A2540] px-8 py-12">
              <h3 className="text-xl font-semibold mb-3">Market News</h3>
              <p className="text-sm leading-7 mb-6">
                Trend analyses, barometers, statistics and studies to better understand the evolution of prices and demand in Luxembourg.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-[#0A2540] font-medium">
                Find out more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#0A2540" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </a>
            </article>

            {/* Top-right: Federation Events */}
            <article className="bg-[#0A2540] text-white px-8 py-12 flex flex-col">
              <div>
                <h3 className="text-xl font-semibold mb-3">Federation Events and Activities</h3>
                <p className="text-sm leading-7 mb-6 opacity-95">
                  Information on conferences, meetings, training sessions and collective actions organized by FIL.
                </p>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#BBA25A] font-medium">
                Find out more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </article>
          </div>
          <div className="bg-white px-8 py-12 border-t-[5px] border-[#efede7]">
              <h4 className="text-xl font-semibold text-[#0A2540] mb-2">Regulatory Watch</h4>
              <p className="text-sm text-[#0A2540] leading-[26px] mb-4">Presentation of new laws, decrees or decisions that impact agencies, developers and consumers. Each publication is accompanied by practical explanations to understand its concrete impact.</p>
              <a href="#" className="text-[#BBA25A] font-medium text-sm inline-flex items-center gap-2">
                Find out more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.0001L12.6667 3.3335M12.6667 3.3335V11.6535M12.6667 3.3335H4.34667" stroke="#BBA25A" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HeaderMenu;