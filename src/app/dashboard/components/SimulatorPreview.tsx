import Image from "next/image";
import React from "react";

const DefaulLinkBlock = () => {
  return (
    <>
      <div className="w-56 mx-auto h-10 rounded-lg bg-[#EEEEEE]"></div>
      <div className="w-56 mx-auto h-10 rounded-lg bg-[#EEEEEE]"></div>
      <div className="w-56 mx-auto h-10 rounded-lg bg-[#EEEEEE]"></div>
      <div className="w-56 mx-auto h-10 rounded-lg bg-[#EEEEEE]"></div>
      <div className="w-56 mx-auto h-10 rounded-lg bg-[#EEEEEE]"></div>
    </>
  );
};

const SimulatorPreview = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center bg-white rounded-xl">
        <div className="w-[400px] h-[600px] relative">
          <Image
            src="/mobile-frame.svg"
            width={450}
            className="h-full"
            height={600}
            alt="mobile previewer"
          />

          <div className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex flex-col py-20 gap-14">
            {/* profile details preview */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="h-24 w-24 bg-[#EEEEEE] rounded-full overflow-hidden"></div>
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="w-40 h-3.5 rounded-full bg-[#EEEEEE]"></div>
                <div className="w-16 h-2 rounded-full bg-[#EEEEEE]"></div>
              </div>
            </div>

            {/* link blocks */}
            <div className="flex flex-col gap-4 w-fit mx-auto">
              <DefaulLinkBlock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimulatorPreview;