'use client';
import React from "react";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";
import Image from 'next/image';

const CreateAccountPage = ()=>{

    const handleCreateAccount = (email: string, password: string, confirmPassword?: string)=>{

      // Check if confirmPassword is provided
    if (!confirmPassword) {
      console.error("Confirm Password is required for creating an account.");
      return;
    }
    
      console.log("Create Account Attempt", email, password, confirmPassword )
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
           {/* <Image src="/public/logo.svg" alt="logo image" width={500} height={300} /> */}
        <div className="max-w-md w-full space-y-8 lg:bg-white md:bg-white sm:bg-none lg:p-[40px] md:p-[40px]  rounded-[5px]">
          <div>
            <h2 className="mb-3 font-bold text-2xl  text-[#333333]">
              Create account
            </h2>
            <p className="text-[#737373] text-base">Let’s get you started sharing your links!</p>
          </div>
          <AuthForm isLogin={false} onSubmit={handleCreateAccount} />
          <div className="text-center">
            <Link href="/login" className="text-[#737373] text-base ">
              Already have an account? <span className="text-[#633CFF]">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default CreateAccountPage;