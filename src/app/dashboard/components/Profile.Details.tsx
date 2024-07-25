import React from "react";
import Button from "@/components/Button";
// import Image from "next/image";


export const ProfileDetails = ()=>{
    return(
        <div className="gap-4 bg-white h-full w-full rounded-xl" >
          <div className="md:p-10 p-6">
            <h2 className="text-[#333333] md:text-2xl text-[24px] font-bold leading-10">
            Profile Details
            </h2>
            <p className="text-base text-[#737373] leading-6 font-normal">
            Add your details to create a personal touch to your profile.
            </p>

            <div>Profile img</div>

            <div className="bg-[#FAFAFA] rounded-[12px] p-[20px]">

                <div className="form-control">
                    <label className="text-black">First Name</label>
                    <input type="text"/>
                </div>

            </div>

          </div>
          
        </div>

    );
}