
import React from "react";

interface ButtonProps{
    text: string;
    className: string;
}

const Button = ({text, className}: ButtonProps)=>{
    return(
        <button type="submit" className={className}>{text}</button>
    );
}
   
export default Button;