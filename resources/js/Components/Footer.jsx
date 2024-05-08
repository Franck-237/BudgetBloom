import React from 'react';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import telegram from '../../images/telegram.svg';
import discord from '../../images/discord.svg';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#9181F4] to-[#5038ED]'>
        <div className='container mx-auto px-5 py-10 flex flex-col gap-5 md:gap-10 justify-center items-center'> 
            <div>
                <p className='text-[16px] md:text-[18px] lg:text-[20px] text-white'>@ BudgetBloom. All reserved 2024</p>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-5 md:gap-10 t'>
                <img src={facebook} alt="" className='bg-white rounded-full px-2 py-2 cursor-pointer hover:bg-slate-300'/>
                <img src={instagram} alt=""  className='bg-white rounded-full px-2 py-2 cursor-pointer hover:bg-slate-300'/>
                <img src={twitter} alt=""  className='bg-white rounded-full px-2 py-2 cursor-pointer hover:bg-slate-300'/>
                <img src={telegram} alt=""  className='bg-white rounded-full px-2 py-2 cursor-pointer hover:bg-slate-300'/>
                <img src={discord} alt=""  className='bg-white rounded-full px-2 py-2 cursor-pointer hover:bg-slate-300'/>
            </div>
        </div>
    </div>
  )
};

export default Footer;