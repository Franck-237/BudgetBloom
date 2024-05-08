import React, { useState } from 'react';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import { useForm } from '@inertiajs/react';

import { FaHome } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Dash = ({ auth }) => {

    const [nav, setNav] = useState(false);

    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('logout'));
    };

  return (
    <div>
        <div className='flex'>
            <div className={`absolute md:relative pl-10 pr-5 md:pr-0 h-[100vh] pt-5 bg-[#5038ED] md:bg-white text-white border-r border-[#5038ED] ${nav ? '' : 'pl-3'} md:left-0`}>
                <div className={`md:hidden pb-10 ${nav ? 'hidden' : 'block'}`} onClick={() => setNav(!nav)}>
                    <RxHamburgerMenu className='text-white text-[25px] md:hidden'/>
                </div>
                <div className={`flex items-center justify-center gap-5 pb-20 ${nav ? 'left-[-1000px]' : 'left-10'}`}>
                    <p className={`text-white md:text-[#5038ED] text-[16px] md:text-[20px] lg:text-[24px] font-bold ${nav ? 'block' : 'hidden'} md:block`}><a href="/">BudgetBloom</a></p>
                    <IoMdClose className={`text-[25px] ${nav ? 'block' : 'hidden'} md:block`} onClick={() => setNav(!nav)}/>
                </div>
                <div className={`flex flex-col gap-5 text-[14px] md:text-[16px] lg:text-[18px] md:text-slate-500 ${nav ? 'block' : 'hidden'} md:pb-32 md:block`}>
                    <div className='flex items-center justify-start gap-3 md:pb-4'>
                        <FaHome />
                        <a href="">Home</a>
                    </div>
                    <div className='flex items-center justify-start gap-3 md:pb-4'>
                        <MdOutlineAttachMoney />
                        <a href="">Transactions</a>
                    </div>
                    <div className='flex items-center justify-start gap-3 md:pb-4'>
                        <IoSettingsSharp />
                        <a href={route('profile.edit')}>Settings</a>
                    </div>
                </div>
                <div className={`mt-20 md:mt-0 ${nav ? 'block' : 'hidden'} md:block`}>
                    <form onSubmit={submit}>
                        <div className="mt-4 flex items-center justify-between">
                            <PrimaryButton disabled={processing}>Log Out</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
            <div className='container mx-auto pt-5'>
                <div className='flex justify-between border-b pb-2 border-[#5038ED] px-5'>
                    <div className='pl-14 md:pl-0'>
                        <p className='font-semibold'><a href={route('dashboard')}>Dashboard</a></p>
                    </div>
                    <div>
                        {auth && <p>{auth.name}</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Dash;