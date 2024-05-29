import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from "react-icons/fa6";

const Homedash = () => {

    const [eye, setEye] = useState(false);
    const [eyes, setEyes] = useState(false);
    const [ey, setEy] = useState(false);
    const [ye, setYe] = useState(false);

  return (
    <div className='ml-20 md:ml-0 p-3 md:p-6 lg:p-10'>
        <div className='flex max-w-[604px]:flex-col flex-wrap md:flex-row gap-3 md:gap-10 justify-start items-center text-white'>
            <div className='bg-blue-400 py-5 px-10 border-blue-400 rounded-xl hidden md:block shadow-2xl'>
                <div>
                    <p>Revenus sur salaire</p>
                </div>
                <div className='flex justify-between items-center pt-5'>
                    {
                        eye ?
                            <><p className='font-bold'>200 000 Fcfa</p><FaEye onClick={() => setEye(!eye)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setEye(!eye)} /></>
                    } 
                </div>
            </div>
            <div className='bg-pink-400 py-5 px-10 border-blue-400 rounded-xl hidden md:block shadow-2xl'>
                <div>
                    <p>Revenus sur placement</p>
                </div>
                <div className='flex justify-between items-center pt-5'>
                {
                        eyes ?
                            <><p className='font-bold'>200 000 Fcfa</p><FaEye onClick={() => setEyes(!eyes)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setEyes(!eyes)} /></>
                    }
                </div>
            </div>
            <div className='bg-green-400 py-5 px-10 border-blue-400 rounded-xl hidden md:block shadow-2xl'>
                <div>
                    <p>Autres revenus</p>
                </div>
                <div className='flex justify-between items-center pt-5 gap-5'>
                {
                        ey ?
                            <><p className='font-bold'>200 000 Fcfa</p><FaEye onClick={() => setEy(!ey)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setEy(!ey)} /></>
                    }
                </div>
            </div>
            <div className='bg-slate-600 py-5 px-10 border-blue-400 rounded-xl shadow-2xl'>
                <div>
                    <p>Solde Total</p>
                </div>
                <div className='flex justify-between items-center pt-5 gap-5'>
                {
                        ye ?
                            <><p className='font-bold'>200 000 Fcfa</p><FaEye onClick={() => setYe(!ye)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setYe(!ye)} /></>
                    }
                </div>
            </div>
        </div>
        <div className='mt-10 border border-slate-600 rounded-2xl p-5 w-[95%]'>
            <div>
                <h2 className='font-semibold overflow-y-scroll'>Historique des Transactions</h2>
            </div>
        </div>
    </div>
  )
}

export default Homedash