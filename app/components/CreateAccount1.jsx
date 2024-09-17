import React from "react";
import Image from "next/image";
import lock from "../assets/Lock.png";
import cross from "../assets/Cross.png";
import avatar from "../assets/Avatar (2).png";
const CreateAccount1 = () => {
  return (
    <div className="flex justify-center bg-white text-black">
      <div className="flex flex-col  items-center w-[60%]">
        <div className="flex flex-col items-center mt-[50px] w-full">
          <div className="text-[32px] font-medium ">Create an account</div>
          <div className="flex">
            Already have an account?
            <div className=" underline ">Log in</div>
          </div>
        </div>
        <div className="flex text-[15px] h-[56px] m-8 bg-slate-100 items-center">
          <Image className="mx-2 h-[20px] w-[20px]" src={lock} />
          We take privacy issues seriously. You can be sure that your personal
          data is securely protected.
          <Image className=" mx-2 h-[20px] w-[20px]" src={cross} />
        </div>
        <hr />
        <div>
          <hr className="w-[20%]" />
          <hr className="w-[20%]" />
        </div>
        <div className="flex justify-between  w-full">
          <div className="flex flex-col items-center gap-2">
            <div className="h-[20px] w-[20px] rounded-full bg-[#27AE60] text-white text-center align-middle leading-[20px]">
              &#10003;
            </div>
            <div className="text-[#27AE60]">Select Your Type</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[20px] w-[20px] rounded-full bg-black text-white text-center align-middle leading-[20px]">
              2
            </div>
            <div>Provide your Basic Info</div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-[20px] w-[20px] rounded-full bg-[#0D0D0DB2] text-white text-center align-middle leading-[20px]">
              3
            </div>
            <div className="text-[#0D0D0DB2]">Verify Your OTP</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center mt-4">
          <Image className="h-[70px] w-[70px]" src={avatar} />
          <div className="text-blue-600">Change picture</div>
        </div>
        <div className="flex flex-col gap-2 w-full mt-8 ">
          <div className="flex mx-4 gap-2 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px] ">First Name</div>{" "}
              <div className="px-2">David</div>
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Last Name</div>{" "}
              <div className="px-2">Warner</div>{" "}
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Organization Name </div>
            <div className="px-2">Warner Organization</div>
          </div>
          <hr className="mx-4 mb-2" />
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Pan</div>
            <div className="px-2">IOLMA902ND</div>
          </div>
          <hr className="mx-4 mb-2" />
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Gst</div>
            <div className="px-2">JSk33</div>
          </div>
          <hr className="mx-4 mb-2" />
          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">Phone Number</div>
              <div className="px-2">+91 1234567891</div>
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Email</div>
              <div className="px-2">Smith@gmail.com</div>
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>

          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">Password</div>
              <div className="px-2">Smith</div>
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Confirm Password</div>
              <div className="px-2">Smith</div>
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Address</div>
            <div className="px-2">Street road,Lucknow</div>
          </div>
          <hr className="mx-4 mb-2" />
          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">City</div>
              <div className="px-2">lucknow</div>
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">State</div>
              <div className="px-2">Uttar Pradesh</div>
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">Postal Code</div>
              <div className="px-2">000000</div>
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Famous Landmark</div>
              <div className="px-2">Smithin Club</div>
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className=" flex text-[14px] mx-4 my-4">
            {" "}
            I have read and agreed{" "}
            <div className="text-blue-500 indent-1"> Terms & Condition </div>
            <div className="indent-1">and</div>{" "}
            <div className="text-blue-500 indent-1"> Privacy Policy</div>
          </div>
        </div>
        <div className=" w-full flex justify-start my-8 mb-8">
          <div className="border rounded-lg px-5 py-2 text-[14px] cursor-pointer">
            Go Next &#10230;
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount1;
