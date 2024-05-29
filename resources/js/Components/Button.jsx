import React from 'react';

const Button = ({children, className=""}) => {
  return (
    <div>
        <div className={`bg-[#4230b6] px-4 py-1 border-2 rounded-2xl text-white hover:bg-gradient-to-l hover:from-[#9181F4] hover:to-[#5038ED] hover:transition-all hover:duration-700 text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer`}>
            {children}
        </div>
    </div>
  )
};

export default Button;