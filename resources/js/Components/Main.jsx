import React from 'react';

import PrimaryButton from './PrimaryButton';
import stat from '../../images/stat.png';

const Main = () => {
  return (
    <div className='container mx-auto px-5'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-5 py-20'>
            <div className='md:w-1/2 flex flex-col gap-10 items-start'>
                <div>
                    <p className='font-bold'>
                    With a solid financial plan in hand, you can now take control of your finances and achieve your financial goals more easily. We're with you every step of the way, offering free online resources and personalized advice.
                    </p>
                </div>
                <PrimaryButton>
                    <a href={route('login')}>Get started</a>
                </PrimaryButton>
            </div>
            <div>
                <div>
                    <img src={stat} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
};

export default Main;