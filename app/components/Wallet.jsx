"use client"
import React,{useState} from "react";
import Image from "next/image";
import image1 from "../assets/wallet.png";
import image2 from "../assets/Icon.png";
import { MdDateRange } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
//import image3 from "../app/assets/date_range.png"


const Wallet = () => {
  const [states,setStates]=useState({
    AvailableFunds:"87675.13",
    TotalCredits:"400.00",
    NetCost:"87579.23",
    LastPayments:"400.00"
  })
  const [amount,setAmount]=useState({
    Amount1:"$217.90",
    Amount2:"$329.90",
    Amount3:"-$432.90",
    Amount4:"-$327.90",
    Amount5:"-$532.90",
  })
 

  return (
    <div className="bg-[#F8F9FA]  w-full sm:min-w-[720px] overflow-y-scroll h-full text-black">
      <div className="flex justify-center h-[70px]">
        <div className="w-full px-7 flex items-center font-bold text-2xl  ">
          Summary
        </div>
      </div>
      <div className=" flex flex-col sm:flex-row justify-center px-7 h-[60%] sm:h-[200px] sm:gap-[20.21px]  w-full text-slate-600">
        <div
          className="bg-[#FFFFFF] my-2 mx-8 sm:mx-0 border  py-4 rounded-lg flex justify-between px-6 h-[45%] sm:h-auto
         w-[90%]"
        >
          <div className="flex flex-col gap-2 ">
            <div className="font-bold text-[20px] text-black">
              Current Balance
            </div>
            <div className="text-[12px] flex gap-1 items-center">
              <Image className="h-[21px] w-[21px]" src={image1} />
              <div>Available Funds</div>
            </div>
            <div className="text-green-500 text-xl sm:text-2xl font-extrabold">
              &#8377;{states.AvailableFunds}
            </div>
            <div className="border text-green-500 flex justify-center items-center  border-green-600 rounded-xl">
              <div className="text-[12px] px-5 py-1">Add Funds</div>
            </div>
          </div>
          <div className=" flex flex-col   justify-around ">
          <div className="text-[12px]">
              Last Payment on:{" "}
              <span className="text-[#939AAD] ml-5">Aug 16, 2024</span>
            </div>
            <div className="text-[12px] flex items-center gap-1">
              <div>Total Credits</div>
              <Image className="h-[17px] w-[17.5px]" src={image2} />
            </div>
            <div className=" text-xl text-black">&#8377;{states.TotalCredits} </div>
            <div className="text-[12px] text-[#939AAD]">Expiring on Aug 20,2025</div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex mx-8 sm:mx-0  my-2 flex-col py-4 gap-4 h-[45%] sm:h-auto w-[90%] px-6 border  rounded-lg">
          <div className=" flex justify-between">
            <div className=" font-bold text-[20px] text-black">Month</div>
            <div className="font-bold">&lt; May &gt;</div>
          </div>
          <div className="flex gap-[40%]">
            <div className="flex flex-col gap-[9.6px]">
              <div className="text-[12px] flex items-center gap-1">
              <FaRegCreditCard />
                <div>Net Cost</div>
              </div>
              <div className=" font-bold text-xl text-black">
                &#8377;{states.NetCost}
              </div>
            </div>

            <div className="flex flex-col gap-[9.6px]">
              <div className="text-[12px] flex items-center gap-1">
                <div>Last Payments</div>
                <Image className="h-[17px] w-[17.5px]" src={image2} />
              </div>
              <div className=" font-bold text-xl text-black">
                &#8377; {states.LastPayments}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10px]  my-4  px-7  w-full">
        <div className="flex  w-full">
          <div className="  bg-[#FFFFFF] flex justify-between px-4 border  rounded-lg  border-none h-[90px] w-full items-center ">
            <div className="text-xl font-bold ">Transaction history</div>
            <div className="border flex gap-1 border-slate-400  text-[12px] rounded-lg text-[#747677] font-jost p-1 flex justify-center items-center">
            <MdDateRange /> Jul 01,2024-Jul 31,2024
            </div>
          </div>
        </div>
        <div className="flex w-full mx-6 sm:mx-0">
          <table className="w-full text-slate-600 min-w-[700px] px-6 overflow-x-scroll ">
            <tr className="h-[46px] text-black text-[14px]">
              <th>Transactions ID</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Invoice</th>
            </tr>
            <tr className="text-center bg-[#FFFFFF] h-[58px]">
              <td>9622933</td>
              <td>Ads spent</td>
              <td>08 Jan,2022 04:39:23</td>
              <td>Success</td>
              <td className="text-green-600">{amount.Amount1}</td>
              <td>
                <div className="border cursor-pointer  border-green-500 rounded-full inline py-1 px-3 text-[14px] text-green-500">
                  Download
                </div>
              </td>
            </tr>
            <tr className="text-center bg-[#FFFFFF] h-[58px]">
              <td>9622933</td>
              <td>Top-Up</td>
              <td>08 Jan,2022 04:39:23</td>
              <td>Success</td>
              <td className="text-green-600">{amount.Amount2}</td>
              <td>
                <div className="border  cursor-pointer border-green-500 rounded-full inline py-1 px-3 text-[14px] text-green-500">
                  Download
                </div>
              </td>
            </tr>
            <tr className="text-center bg-[#FFFFFF] h-[58px]">
              <td>9622933</td>
              <td>Top-up</td>
              <td>08 Jan,2022 04:39:23</td>
              <td className="text-red-500">Failed</td>
              <td className="text-red-500">{amount.Amount3}</td>
              <td>
                <div className="border cursor-pointer  border-green-500 rounded-full inline py-1 px-3 text-[14px] text-green-500">
                  Download
                </div>
              </td>
            </tr>
            <tr className="text-center bg-[#FFFFFF] h-[58px]">
              <td>9622933</td>
              <td>Charge</td>
              <td>08 Jan,2022 04:39:23</td>
              <td>Success</td>
              <td className="text-red-500">{amount.Amount4}</td>
              <td>
                <div className="border  cursor-pointer border-green-500 rounded-full inline py-1 px-3 text-[14px] text-green-500">
                  Download
                </div>
              </td>
            </tr>
            <tr className="text-center bg-[#FFFFFF]  h-[58px]">
              <td>9622933</td>
              <td>Charge</td>
              <td>08 Jan,2022 04:39:23</td>
              <td>Success</td>
              <td className="text-red-500">{amount.Amount5}</td>
              <td>Not Available</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
