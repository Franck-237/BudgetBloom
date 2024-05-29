import React from 'react';

import teacher from '../../images/teacher.png';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import logo3 from '../../images/logo3.png';
import logo4 from '../../images/logo4.png';
import logo5 from '../../images/logo5.png';
import logo6 from '../../images/logo6.png';

const Header = () => {
  return (
    <div className=''>
      <div className='bg-slate-200 pb-10'>
        <div className='container mx-auto px-5 md:px-10 lg:px-20 pt-5 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-10 lg:gap-20'>
            <div className='flex flex-col gap-10'>
              <div>
                  <h1 className='font-bold text-[16px] md:text-[18px] lg:text-[24px]'>Welcome dear,</h1>
              </div>
                <h1 className='font-semibold'>Take control of your finances with <span className='inline text-[#5038ED] text-[16px] md:text-[18px] lg:text-[20px] font-bold'>BudgetBloom</span></h1>
                <p>Say goodbye to scattered receipts and forgotten expenses. Track your income and spending in real-time with our intuitive interface. Every penny categorized and accounted for, giving you a clear picture of your financial landscape.</p>
            </div>
            <div className='w-[400px] md:w-[800px] lg:w-[1400px]'>
                <img src={teacher} alt=""/>
            </div>
        </div>
      </div>
        <div className='text-center pt-20 pb-5'>
          <p className='font-bold text-[16px] md:text-[18px] lg:text-[24px] text-[#5038ED]'>Our Partners</p>
        </div>
        <div className='bg-slate-50 mb-10'>
          <div className='container mx-auto px-5 md:px-10 lg:px-20 py-5 flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='flex justify-center items-center gap-5 md:gap-32 flex-wrap'>
              <img src={logo1}alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
            <div className='flex justify-center items-center gap-5 md:gap-32 flex-wrap'>
              <img src={logo4} alt="" />
              <img src={logo5} alt="" />
              <img src={logo6} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
};

export default Header;