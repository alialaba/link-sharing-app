import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export const runtime = "edge";

const LinkTab = ()=>{
    return(
        <div className="gap-4 bg-white h-full rounded-xl w-full">
          <div className="md:p-10 p-6">
            <h2 className="text-[#333333] md:text-3xl text-[24px] font-bold leading-10">
              Customize your links
            </h2>
            <h5 className="text-base text-[#737373] leading-6 font-normal">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </h5>

            <div className="mt-10 flex flex-col gap-6">
             
              <Button text="Add New Link" icon={<FaPlus/>} className="py-[11px] text-center px-[27px] rounded-[8px] border-[#633CFF] border text-[#633CFF] w-full"/>

            
              
              <div className="bg-[#FAFAFA] md:p-10 p-5 rounded-xl h-full flex md:gap-8 gap-6 items-center justify-center flex-col">
                <div className="">
                  <Image
                  src="/illustration.png"
                  alt="illustration image"
                  priority
                  // className="md:w-40 md:h-[249.53px] h-[80px] w-[124.77px]"
                  height={160}
                  width={249.53}
                />
                </div>


                <h2 className="text-[#333333] md:text-3xl text-[24px] font-bold leading-10">
                  Let’s get you started
                </h2>

                <p className="text-center text-base leading-6 font-normal text-[#737373] md:w-[488px]">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
          <div className="md:px-10 p-6 py-6 border-t border-gray-300">
            <div className="w-fit ml-auto">
              <Button diabled={true} text="Save" className="rounded-[8px] py-[11px] px-[27px] bg-[#633CFF]"/>
            </div>
          </div>
        </div>

    );
}

export default LinkTab;