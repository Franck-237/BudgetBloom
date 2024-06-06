import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from "react-icons/fa6";

const Homedash = ({revenues, transactions, totalBalance}) => {

    const [eye, setEye] = useState(false);
    const [eyes, setEyes] = useState(false);
    const [ey, setEy] = useState(false);
    const [ye, setYe] = useState(false);

  return (
    <div className='ml-20 md:ml-0 p-3 md:p-6 lg:p-10'>
        <div className='flex max-w-[604px]:flex-col flex-wrap md:flex-row gap-3 md:gap-10 justify-start items-center text-white'>
            <div className='bg-blue-400 py-5 px-10 border-blue-400 rounded-xl hidden md:block shadow-2xl'>
                <div className='flex gap-5 font-bold'>
                    <p>Salaire</p>
                </div>
                <div className='flex justify-between items-center pt-5 gap-5'>
                    {
                        eye ?
                            <><p className='font-bold'>{revenues.salary} Fcfa</p><FaEye onClick={() => setEye(!eye)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setEye(!eye)} /></>
                    }
                </div>
            </div>
            <div className='bg-pink-400 py-5 px-10 border-blue-400 rounded-xl hidden md:block shadow-2xl'>
                <div className='flex gap-5 font-bold'>
                    <p>Placement</p>
                </div>
                <div className='flex justify-between items-center pt-5 gap-5'>
                {
                        eyes ?
                            <><p className='font-bold'>{revenues.placement} Fcfa</p><FaEye onClick={() => setEyes(!eyes)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setEyes(!eyes)} /></>
                    }
                </div>
            </div>
            <div className='bg-green-400 py-5 px-10 border-blue-400 rounded-xl hidden md:block shadow-2xl'>
                <div className='flex gap-5 font-bold'>
                    <p>Autres revenus</p>
                </div>
                <div className='flex justify-between items-center pt-5 gap-5'>
                {
                        ey ?
                            <><p className='font-bold'>{revenues.others} Fcfa</p><FaEye onClick={() => setEy(!ey)} /></>
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
                            <><p className='font-bold'>{totalBalance} Fcfa</p><FaEye onClick={() => setYe(!ye)} /></>
                        :
                            <><p className='font-bold'>*** *** *** Fcfa</p><FaEyeSlash onClick={() => setYe(!ye)} /></>
                    }
                </div>
            </div>
        </div>
        <h1 className='py-5 font-bold'>Lorsque votre solde est négatif vous etes endetté à la hauteur de ce montant</h1>
        <div className='mt-10 border border-slate-600 rounded-2xl p-5 w-[95%] h-[60vh] overflow-y-scroll'>
            <div>
                <h2 className='font-semibold text-orange-500 text-xl uppercase static'>Historique des Transactions</h2>
                <div className='pt-10'>
                    <div className='flex justify-between items-center w-[80%] col-span-4'>
                        <p className='hidden md:block font-bold pb-5 text-slate-950'>Numéro de transation</p>
                        <p className='hidden md:block font-bold pb-5 text-slate-950'>Catégorie</p>
                        <p className='font-bold pb-5 text-slate-950'>Description</p>
                        <p className='font-bold pb-5 text-slate-950'>Prix</p>
                    </div>
                    {
                        transactions.map((data) =>(
                            <div key={data.id} className='w-[100%] md:w-[80%] flex justify-between items-center col-span-4 py-2 border-b-2 border-slate-800'>
                                <div className='hidden md:block'>
                                    <p>{data.id}</p>
                                </div>
                                <div className='hidden md:block'>
                                    <p>{data.categories}</p>
                                </div>
                                <div>
                                    <p>{data.description}</p>
                                </div>
                                <div>
                                    <p>{data.amount} Fcfa</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homedash
