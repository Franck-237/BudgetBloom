import React, { useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { enablePageScroll } from 'scroll-lock';

import { FaHome } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Homedash from './Homedash';
import Transdash from './Transdash';

const Dash = ({revenues, transactions, totalBalance}) => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        if (!nav) return;

        enablePageScroll();
        setNav(false);
      };

    const [onglet, setOnglet] = useState(false);


    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful, post } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

  return (
    <div>
        <div className='flex'>
            <div className={`absolute md:relative pl-10 pr-5 md:pr-0 h-[120vh] md:h-[100vh] pt-5 bg-[#5038ED] md:bg-white text-white border-r border-[#5038ED] ${nav ? '' : 'pl-3'} md:left-0`}>
                <div className={`md:hidden pb-10 ${nav ? 'hidden' : 'block'}`} onClick={() => setNav(!nav)}>
                    <RxHamburgerMenu className='text-white text-[25px] md:hidden'/>
                </div>
                <div className={`flex items-center justify-center gap-5 pb-20 ${nav ? 'left-[-1000px]' : 'left-10'}`}>
                    <p className={`text-white md:text-[#5038ED] text-[14px] md:text-[16px] lg:text-[18px] font-bold ${nav ? 'block' : 'hidden'} md:block`}><a href="/">BudgetBloom</a></p>
                    <IoMdClose className={`text-[25px] ${nav ? 'block' : 'hidden'} md:block`} onClick={() => setNav(!nav)}/>
                </div>
                <div className={`flex flex-col gap-5 text-[13px] md:text-[14px] lg:text-[16px] md:text-slate-500 ${nav ? 'block' : 'hidden'} md:pb-32 md:block`}>
                    <div className='border-b flex items-center justify-start gap-3 md:pb-4'>
                        <FaHome />
                        <a href="" onClick={handleClick}>Home</a>
                    </div>
                    <div className='border-b flex items-center justify-start gap-3 md:pb-4'>
                        <MdOutlineAttachMoney />
                        <button onClick={handleClick}>
                            <p onClick={() => setOnglet(!onglet)}>Transactions</p>
                        </button>
                    </div>
                    <div className='border-b flex items-center justify-start gap-3 md:pb-4'>
                        <IoSettingsSharp />
                        <a href={route('profile.edit')} onClick={handleClick}>Settings</a>
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
                <div className='flex justify-between border-b pb-2 border-[#5038ED] px-5 font-semibold'>
                    <div className='pl-14 md:pl-0'>
                        <p className=''><a href={route('dashboard')}>Dashboard</a></p>
                    </div>
                    <div>
                        <p><a href={route('profile.edit')}>{data.name}</a></p>
                    </div>
                </div>
                <div>
                    {
                        onglet ?
                        <Transdash />
                        :
                        <Homedash revenues={revenues} transactions={transactions} totalBalance={totalBalance}/>
                    }
                </div>
            </div>
        </div>
    </div>
  )
};

export default Dash;
