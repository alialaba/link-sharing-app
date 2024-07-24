"use client";
import React from "react";
import AuthForm from "@/components/AuthForm";
import Link from "next/link";
import Image from "next/image";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import { useRouter } from "next/navigation";
const CreateAccountPage = () => {
  const router = useRouter();
  const handleCreateAccount = async (
    email: string,
    password: string,
    confirmPassword?: string
  ) => {
    // Check if confirmPassword is provided
    // if (!confirmPassword) {
    //   console.error("Confirm Password is required for creating an account.");
    //   return;
    // }

    console.log("Create Account Attempt", email, password, confirmPassword);
    // Example: Add your authentication logic here
    // e.g., make an API call to authenticate the user

    try {
      await createUserWithEmailAndPassword(getAuth(app), email, password);
      router.push("../login");
    } catch (e) {
      console.log(e, "error");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* <Image src="/public/logo.svg" alt="logo image" width={500} height={300} /> */}
      <div className="max-w-md w-full space-y-8 lg:bg-white md:bg-white sm:bg-none lg:p-[40px] md:p-[40px]  rounded-[5px]">
        <div>
          <h2 className="mb-3 font-bold text-2xl  text-[#333333]">
            Create account
          </h2>
          <p className="text-[#737373] text-base">
            Let’s get you started sharing your links!
          </p>
        </div>
        <AuthForm isLogin={false} onSubmit={handleCreateAccount} />
        <div className="text-center">
          <Link href="/login" className="text-[#737373] text-base ">
            Already have an account?{" "}
            <span className="text-[#633CFF]">Log in</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
