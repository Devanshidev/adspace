// import Link from "next/link";
// import React from "react";
// import Image from "next/image";
// const SignIn = () => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 flex flex-col items-center gap-4">
//       <h1 className="font-semibold text-2xl sm:text-4xl text-black">Sign In</h1>
//       <p className="text-xs  rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full text-center p-2">
//         <Image src="" /> Continue with Mobile number
//       </p>
//       <p className="text-xs rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full p-2 text-center">
//         or Sign in with Email
//       </p>
//       <form className="w-full flex flex-col gap-2 sm:gap-4">
//         <input
//           type="text"
//           placeholder="Username or email address"
//           className=" border-2 rounded-lg border-[#EBEEF7] w-full p-2"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border-2 rounded-lg border-[#EBEEF7]"
//         />
//       </form>
//       <div className="w-full text-xs">
//         <input type="checkbox" className="text-[#464D61]" />{" "}
//         <span className="text-[#636A80]">Keep me logged</span>
//         <Link href={"/"} className="float-right text-[#00AAFF]">
//           Forget password
//         </Link>
//       </div>
//       <button className="bg-[#00AAFF] w-full h-[40px]  text-white">
//         Sign In
//       </button>
//       <p className="text-xs text-[#00AAFF]">
//         Don't have account ? <Link href="/registration?step=1">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default SignIn;

"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { MdArrowForward } from "react-icons/md";

import { ValidateSignIn } from "../hooks/ValidateSignIn";
import { useRef, useState } from "react";
const SignIn = () => {
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);
  const [signIn, setSignIn] = useState({
    email: "Username or Email Address",
    passsowrd: "password",
  });
  const handleSignIn = (e) => {
    if (ValidateSignIn(EmailRef.current.value)) {
      setSignIn({
        email: EmailRef.current.value,
        passsowrd: PasswordRef.current.value,
        emailError: "",
      });
    } else {
      setSignIn({
        email: EmailRef.current.value,
        passsowrd: PasswordRef.current.value,
        emailError: "* Email is not correct",
      });
    }
  };
  return (
    <div className=" bg-gray-50 flex justify-center">
    <div className=" rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col justify-center items-center gap-4 w-[65%] h-[100%] bg-white ">
      <h1 className="font-semibold text-2xl sm:text-4xl text-black">Sign In</h1>
      {/* <p className="text-xs  rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full text-center p-2">
        <Image src="" alt="loading" /> Continue with Mobile number
      </p> */}
      <p className="text-[16px] rounded-lg text-[#464D61] border-2 border-[#EBEEF7] w-full p-2 text-center flex items-center justify-center gap-3">
      <FiPhone className="" /> Continue with Mobile Number
      </p>
      <div class=" relative inline-flex items-center justify-center w-full">
    <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
    <span class="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 text-sm">or Sign in with Email</span>
</div>
      <p className="text-[8px] text-red-800 float-left">{signIn.emailError}</p>
      <form className="w-full h-[60%] flex flex-col gap-2 sm:gap-4">
        <input
          ref={EmailRef}
          type="text"
          placeholder={signIn.email}
          className=" border-2 rounded-lg text-[16px] text-black border-[#EBEEF7] outline-none w-full p-2"
        />
        <input
          ref={PasswordRef}
          type="password"
          placeholder={signIn.passsowrd}
          className="w-full p-2 border-2 text-[16px] text-black rounded-lg border-[#EBEEF7] outline-none"
        />
      </form>
      <div className="w-full text-xs">
        <input type="checkbox" className="text-[#464D61]" />{" "}
        <span className="text-[#636A80]">Keep me logged</span>
        <Link href={"/"} className="float-right text-[#00AAFF]">
          Forgot password ?
        </Link>
      </div>
      <button
        onClick={handleSignIn}
        className="bg-[#00AAFF] w-full h-[40px] flex justify-center items-center gap-3 text-white rounded-lg font-sans"
      >
        <div>
        Sign In </div><MdArrowForward />
      </button>
      
      <p className="text-xs  text-gray-500 ">
        Don't have account ? <Link href="/registration?step=1 " className="text-[#00AAFF]">Sign Up</Link>
      </p>
    </div>
    </div>
  );
};

export default SignIn;
