
import React, {ReactNode} from "react";

interface ButtonProps{
    text: string;
    className: string;
    icon?: ReactNode; // Optional icon prop
    hideTextOnMobile?: boolean; // Optional prop to control text visibility
    diabled?: boolean;
}

const Button = ({text, className, diabled, icon, hideTextOnMobile}: ButtonProps)=>{
    return(
        <button type="submit" className={`flex items-center space-x-2 ${className} ${diabled ? 'opacity-[20%]' : ''} flex items-center justify-center`}>

            {icon && <span className="w-5 h-5">{icon}</span>}
            <span className={`${hideTextOnMobile ? 'hidden md:block' : ''} `}>{text}</span>
            
        </button>
    );
}
   
export default Button;