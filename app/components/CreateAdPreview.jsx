import React from "react";
import CreateAdView from "./CreateAdView";
import Mobile from "../assets/MobileImg.png";
import Image from "next/image";
const CreateAdPreview = () => {
  return (
    <div className=" pt-10 w-full relative h-screen flex flex-col items-center justify-center ">
      <Image src={Mobile} className="m-auto  mt-12 h-[500px] " />
      <div className=" absolute inset-0 flex flex-col items-center justify-center pt-12 pl-2">
        <CreateAdView />
      </div>
    </div>
  );
};

export default CreateAdPreview;
