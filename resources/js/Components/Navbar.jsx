import React, { useState } from 'react';

import Button from './Button';
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navbar = () => {

    const Links = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },{
            id: 2,
            title: "Dashboard",
            path: 'dashboard'
        }
    ];
    
    const [nav, setNav] = useState(false);

  return (
    <div className='bg-slate-200'>
        <div className='container mx-auto px-5 md:px-10 lg:px-20 py-5 flex justify-between items-center'>
            <div>
                <p className='text-[#5038ED] text-[16px] md:text-[20px] lg:text-[24px] font-bold'><a href="/">BudgetBloom</a></p>
            </div>
            <div className='overflow-hidden'>
                <div onClick={() => setNav(!nav)} className='md:hidden'>
                    {
                        nav ?
                        <MdClose className='text-[#5038ED] w-[24px] h-[29.58px] md:hidden'/>
                        : 
                        <RiMenu2Line className='text-[#5038ED] w-[24px] h-[29.58px] md:hidden'/>
                    }
                </div>
                <div className={`absolute bg-gray-200 pt-10 flex h-[100vh] flex-col md:gap-22 lg:gap-32 md:pt-0 md:bg-slate-200 md:relative left-0 w-[100%] md:w-auto md:h-auto md:flex-row justify-start md:justify-between items-center space-y-5 md:space-y-0 md:space-x-10 text-[14px] md:text-[16px] lg:text-[18px] ${nav ? 'left-0 top-[65px] transition-all duration-700' : 'left-[-1000px] transition-all duration-700'} md:left-0`}>
                    <ul className='flex flex-col items-center justify-center md:flex-row gap-5'>
                        {Links.map((data) =>(
                            <li key={data.id}>
                                <a href={data.path} className='hover:text-[#5038ED] text-[14px] md:text-[16px] lg:text-[18px]'>{data.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex flex-col items-center justify-center md:flex-row gap-5'>
                        <Button><a href={route('login')}>Login</a></Button>
                        <Button><a href={route('register')}>Register</a></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Navbar;