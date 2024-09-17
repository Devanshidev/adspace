"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "../assets/Coin.png";
import image2 from "../assets/avatar.png";
import image3 from "../assets/Vector.png";
import { BiWallet } from "react-icons/bi";
import image4 from "../assets/Avatar (2).png";
import image5 from "../assets/Avatar (2).png";
import image6 from "../assets/Avatar (2).png";
import image7 from "../assets/Avatar (2).png";
import image8 from "../assets/Avatar (2).png";

const Header = () => {
  const [isClicked, SetisClicked] = useState(false);

  const handle = () => {
    SetisClicked(!isClicked);
  };
  return (
    <div className=" w-full h-full bg-[#F8F9FA] mt-0  flex justify-center items-center border-b text-black ">
      <div className="flex px-[20px] py-[17.91px] w-full justify-between">
        <div className="sm:flex hidden gap-[10px] items-center">
          <div className="text-xl font-bold">Ads Manager</div>
          <div className="font-normal shadow-md bg-white relative border-none  rounded-md flex items-center gap-2 p-0.5 px-3 ">
            <div>Brooklyn Simmons</div>
            <div className="w-[12.5px] h-[5.25px]" onClick={handle}>
              <Image src={image3} />
            </div>

            {isClicked && (
              <div className="bg-[#FFFFFF] absolute top-8 left-0 flex flex-col space-y-3 px-2 py-4 border rounded-xl w-[250px]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Image className="h-[24px] w-[24px]" src={image4} />
                    <div>Brooklyn Simmons</div>
                  </div>
                  <Image className="h-[17px] w-[17px]" src={image7} />{" "}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Image className="h-[24px] w-[24px]" src={image5} /> Ramon
                    seks
                  </div>
                  <Image className="h-[17px] w-[17px]" src={image7} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Image className="h-[24px] w-[24px]" src={image6} /> Samara
                    will
                  </div>
                  <Image className="h-[17px] w-[17px]" src={image7} />
                </div>
                <div className="flex gap-2 font-medium ">
                  {" "}
                  <div>
                    <Image className="h-[24px] w-[24px]" src={image8} />
                  </div>{" "}
                  Add account
                </div>
              </div>
            )}
          </div>
        </div>
        {/* {isClicked && (
          <div className="bg-[#FFFFFF] absolute top-[69px] left-[150px] flex flex-col space-y-3 px-2 py-4 border rounded-xl w-[250px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Image className="h-[24px] w-[24px]" src={image4} />
                <div>Brooklyn Simmons</div>
              </div>
              <Image className="h-[17px] w-[17px]" src={image7} />{" "}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Image className="h-[24px] w-[24px]" src={image5} /> Ramon seks
              </div>
              <Image className="h-[17px] w-[17px]" src={image7} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Image className="h-[24px] w-[24px]" src={image6} /> Samara will
              </div>
              <Image className="h-[17px] w-[17px]" src={image7} />
            </div>
            <div className="flex gap-2 font-medium ">
              {" "}
              <div>
                <Image className="h-[24px] w-[24px]" src={image8} />
              </div>{" "}
              Add account
            </div>
          </div>
        )} */}
        <div className="flex gap-[20px]">
          <div className="font-bold border-[2px] flex gap-1 text-[10px]   border-solid bg-[#27AE6040] border-[#27AE60] rounded-xl px-4 py-1">
            <div>
              <Image className="w-[24px] h-[24px]" src={image1} />
            </div>
            <div className=" flex items-center">
              <div>Get $100 AD Credit</div>
            </div>
          </div>
          <div className="flex justify-center items-center font-bold border-[2px] flex gap-1 text-[15px] border-solid rounded-xl shadow-md px-4 py-1">
          <BiWallet />
          ₹ 0.00
          </div>
          <div>
            <Image className="h-[32.5px] w-[32.5px] rounded-[10px]" src={image2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
