export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `bg-gradient-to-r from-[#9181F4] to-[#5038ED] px-4 py-1 border rounded-2xl text-white hover:bg-gradient-to-l hover:from-[#9181F4] hover:to-[#5038ED] text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
