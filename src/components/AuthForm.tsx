import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (email: string, password: string, confirmPassword?: string) => void;
}

const AuthForm = ({ isLogin, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    
    let hasError = false;
    
    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!isLogin && password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      hasError = true;
    } else {
      setConfirmPasswordError("");
    }

    if (!hasError) {
      if (isLogin) {
        onSubmit(email, password);
      } else {
        onSubmit(email, password, confirmPassword);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Email Address"
        errMsg={emailError}
        type="email"
        placeholder="e.g. alex@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
      />

      <InputField
        label={isLogin ? "Password" : "Create password"}
        errMsg={passwordError}
        type="password"
        placeholder={isLogin ? "Enter your password" : "At least 8 characters"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!passwordError}
      />
      {!isLogin && (
        <InputField
          label="Confirm password"
          errMsg={confirmPasswordError}
          type="password"
          placeholder="At least 8 characters"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!confirmPasswordError}
        />
      )}
      {/* {!isLogin && <span>Password must contain at least 8 characters</span>} */}


      <Button
        className="w-full px-[27px] py-[11px] text-white bg-[#633CFF] rounded-md  hover:bg-[#BEADFF] hover:shadow-custom-shadow focus:outline-none focus:border-none"
        text={isLogin ? "Log In" : "Create Account"}
      />
    </form>
  );
};

export default AuthForm;
