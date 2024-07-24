'use client';
import React from "react";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";

const LoginPage = ()=>{
    const handleLogin = (email: string, password: string, confirmPassword?: string)=>{

        // Implement login logic here
    console.log('Login attempt:', email, password);

     // Example: Add your authentication logic here
    // e.g., make an API call to authenticate the user

    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 lg:bg-white md:bg-white sm:bg-none lg:p-[40px] md:p-[40px]  rounded-[5px]">
        <div>
          <h2 className="mb-3 font-bold text-2xl  text-[#333333]">
            Login 
          </h2>
          <p className="text-[#737373] text-base">Add your details below to get back into the app</p>
        </div>
        <AuthForm isLogin={true} onSubmit={handleLogin} />
        <div className="text-center">
          <Link href="/create-account" className="text-[#737373] text-base ">
            Don't have an account? <span className="text-[#633CFF]">Create account</span>
          </Link>
        </div>
      </div>
    </div>
    );
}
export default LoginPage;