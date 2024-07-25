'use client';
import React, {useState} from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { FaPlus, FaGithub, FaLinkedin, FaYoutube,  FaFreeCodeCamp, FaDev } from "react-icons/fa";


const platforms = [
  { id: 1, name: "GitHub", icon: <FaGithub/> },
  {  id: 2,name: "LinkedIn", icon:<FaLinkedin/> },
  {  id: 3,  name: "YouTube", icon: <FaYoutube/> },
  { id: 4,  name: "FreeCodeCamp", icon: <FaFreeCodeCamp/> },
  { id: 5, name: "Dev.to", icon: <FaDev/> },
];

interface LinkItem {
  platform: string;
  url: string;
}
export const AddLink = ()=>{

 

  const [showEmptyState, setShowEmptyState] = useState(true);
  const [links, setLinks] = useState<LinkItem[]>([]);

  const handleAddLink = () => {
    setShowEmptyState(false);
    setLinks([...links, { platform: "", url: "" }]);
  };

const handleLinkChange = (index: number, field: "platform" | "url", value: string) => {
    const updatedLinks = links.map((link, i) => 
      i === index ? { ...link, [field]: value } : link
    );
    setLinks(updatedLinks);
  };

  const handleRemoveLink = (index: number) => {
    const updatedLinks = links.filter((_, i) => i !== index);
    setLinks(updatedLinks);
    if (updatedLinks.length === 0) {
      setShowEmptyState(true);
    }
  };

  const isFormValid = links.every(link => link.platform && link.url);
  
    return(
        <div className="gap-4 bg-white h-full w-full rounded-xl" >
          <div className="md:p-10 p-6">
            <h2 className="text-[#333333] md:text-2xl text-[24px] font-bold leading-10">
              Customize your links
            </h2>
            <h5 className="text-base text-[#737373] leading-6 font-normal">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </h5>

            <div className="mt-10 flex flex-col gap-6">
             
              <Button onClick={handleAddLink} text="Add New Link" icon={<FaPlus/>} className="py-[11px] text-center px-[27px] rounded-[8px] border-[#633CFF] border text-[#633CFF] w-full"/>

            {showEmptyState ?   
             (<div className="empty-link bg-[#FAFAFA] md:p-10 p-5 rounded-xl h-full flex md:gap-8 gap-6 items-center justify-center flex-col">
             <div className="empty img">
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
           </div>)
           : 

          ( links.map((link, index) => (
            <div key={index} className="new-link-form bg-[#FAFAFA] p-5 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-[#737373]">Link #{index + 1}</h3>
                <button 
                  onClick={() => handleRemoveLink(index)}
                  className="text-[#737373] hover:text-red-500"
                >
                  Remove
                </button>
              </div>
              <select
                value={link.platform}
                onChange={(e) => handleLinkChange(index, "platform", e.target.value)}
                className="w-full p-2 mb-4 rounded border border-gray-300"
              >
                <option className="text-[#737373]" value="">Select a platform</option>
                {platforms.map((platform) => (
                  <option key={platform.name} value={platform.name}>
                    {platform.name}
                  </option>
                ))}
              </select>
              <input
                type="url"
                value={link.url}
                onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                placeholder="Enter your link"
                className="w-full p-2 rounded border border-gray-300"
              />
            </div>
          ))
        )}
              
             
            </div>
          </div>
          <div className="md:px-10 p-6 py-6 border-t border-gray-300">
            <div className="w-fit ml-auto">
              <Button diabled={!isFormValid} text="Save" className={`rounded-[8px] py-[11px] px-[27px] ${isFormValid && links.length > 0  ? "bg-[#633CFF]" : "bg-[#633CFF] opacity-[20%]"}`}/>
            </div>
          </div>
        </div>

    );
}