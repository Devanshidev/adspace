"use client";
import Chart from "./Chart";
import { useState } from "react";
import React from "react";
import { DateRangePicker } from "@nextui-org/date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { parseDate } from "@internationalized/date";

const Dashboard = () => {
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const [impression, setImpression] = useState();
  const [click, setClick] = useState();
  const [cpc, setCpc] = useState();

  const dashboard = {
    amount: amount,
    impression: impression,
    click: click,
    cpc: cpc,
  };
  console.log(dashboard);
  return (
    <div className="h-full">
      <div className="ss:w-full ss:flex-col ss:mb-5 sm:flex sm:flex-row sm:justify-between ">
        <div className="font-Jost sm:text-2xl font-semibold ss:text-xl ss:mb-3 ">
          {" "}
          Dashboard
        </div>
        <div className="pp:flex sm:items-center sm:gap-4 pp:gap-20">
          <div>
            <button
              className=" font-Jost border-solid border border-gray-300
          text-[12px] p-2 bg-white font-medium rounded-l-lg focus:bg-neutral-200 text-[#747677]"
            >
              Last 30 days
            </button>
            <button
              className=" font-Jost border-solid border border-gray-300
            text-[12px] p-2 bg-white font-medium focus:bg-neutral-200 text-[#747677]"
            >
              Last 7 days
            </button>
            <button
              className="font-Jost border-solid border border-gray-300
           text-[12px] p-2 bg-white font-medium rounded-r-lg focus:bg-neutral-200 text-[#747677]"
            >
              Last 24 hours
            </button>
          </div>
          <div>
            <button
              className="font-Jost mt-2 pp:mt-0 border-solid border border-gray-300
           text-[12px] p-2 bg-white font-medium rounded-md flex gap-1.5 focus:bg-neutral-200 text-[#747677] flex justify-center items-center"
            >
              {/* <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >

                <path
                  d="M2.875 6.375H4.125V7.625H2.875V6.375ZM11.625 3.25V12C11.625 12.6875 11.0625 13.25 10.375 13.25H1.625C0.93125 13.25 0.375 12.6875 0.375 12L0.38125 3.25C0.38125 2.5625 0.93125 2 1.625 2H2.25V0.75H3.5V2H8.5V0.75H9.75V2H10.375C11.0625 2 11.625 2.5625 11.625 3.25ZM1.625 4.5H10.375V3.25H1.625V4.5ZM10.375 12V5.75H1.625V12H10.375ZM7.875 7.625H9.125V6.375H7.875V7.625ZM5.375 7.625H6.625V6.375H5.375V7.625Z"
                  fill="#747677"
                />

              </svg> */}
              <FaRegCalendarAlt />
              Jul 01, 2024 - Jul 31, 2024
            </button>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:gap-4 grid grid-cols-2 gap-3 ">
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            Amount Spent{" "}
            <div className="w-4 h-4 rounded-full bg-red-600"> </div>
          </div>
          <div className="font-Jost font-semibold text-xs md:text-base">
            ₹
            <input
              type="number"
              defaultValue="0.00"
              onChange={(e) => setAmount(e.target.value)}
              className="border-white"
            />
          </div>
        </div>
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            Impressions{" "}
            <div className="w-4 h-4 rounded-full bg-blue-400"> </div>
          </div>
          <div className="font-Jost font-semibold text-xs md:text-base">
            <input
              type="number"
              defaultValue="0"
              onChange={(e) => setImpression(e.target.value)}
              className="border-white"
            />
          </div>
        </div>
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            Clicks <div className="w-4 h-4 rounded-full bg-orange-400"> </div>
          </div>{" "}
          <div className="font-Jost font-semibold text-xs md:text-base">
            <input
              type="number"
              defaultValue="0"
              onChange={(e) => setClick(e.target.value)}
              className="border-white"
            />
          </div>
        </div>
        <div className="bg-white border-solid border-[1px] border-gray-300 p-2 flex flex-col gap-1 rounded-xl w-full">
          <div className="flex items-center justify-between font-Jost md:text-sm text-slate-400 mb-1.5 text-xs">
            CPC <div className="w-4 h-4 rounded-full bg-green-600"> </div>
          </div>
          <div className="font-Jost font-semibold text-xs md:text-base">
            ₹
            <input
              type="number"
              defaultValue="0.00"
              onChange={(e) => setCpc(e.target.value)}
              className="border-white"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white mt-8 rounded-md  sm:p-5 ss:w-auto ss:p-2">
        <div className="font-Jost flex justify-between mb-10 items-center ss:text-sm ss:mb-5 sm:text-base">
          Campaign (3)
          <button
            className="font-Jost border-solid border-2 border-gray-300
          text-xs p-2 bg-white font-light rounded-md flex gap-1.5 focus:bg-neutral-200"
          >
            <div className="flex sm:gap-10 px-1 ss:gap-4 ">
              All Campaign{" "}
              <div className="mt-1">
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_138_2802" fill="white">
                    <path d="M6.98998 8.21248L13 2.20248L11.587 0.787476L6.98998 5.38748L2.39398 0.787476L0.97998 2.20148L6.98998 8.21248Z" />
                  </mask>
                  <path
                    d="M6.98998 8.21248L-11.3963 26.5957L6.98845 44.9836L25.3748 26.5973L6.98998 8.21248ZM13 2.20248L31.3848 20.5873L49.7565 2.21547L31.3978 -16.1693L13 2.20248ZM11.587 0.787476L29.9848 -17.5843L11.594 -36.0011L-6.80379 -17.5913L11.587 0.787476ZM6.98998 5.38748L-11.4028 23.7643L6.98798 42.171L25.3808 23.7663L6.98998 5.38748ZM2.39398 0.787476L20.7868 -17.5893L2.40198 -35.9901L-15.9908 -17.5973L2.39398 0.787476ZM0.97998 2.20148L-17.4048 -16.1833L-35.788 2.19995L-17.4063 20.5847L0.97998 2.20148ZM25.3748 26.5973L31.3848 20.5873L-5.38479 -16.1823L-11.3948 -10.1723L25.3748 26.5973ZM31.3978 -16.1693L29.9848 -17.5843L-6.81079 19.1592L-5.39779 20.5742L31.3978 -16.1693ZM-6.80379 -17.5913L-11.4008 -12.9913L25.3808 23.7663L29.9778 19.1663L-6.80379 -17.5913ZM25.3828 -12.9893L20.7868 -17.5893L-15.9988 19.1643L-11.4028 23.7643L25.3828 -12.9893ZM-15.9908 -17.5973L-17.4048 -16.1833L19.3648 20.5863L20.7788 19.1723L-15.9908 -17.5973ZM-17.4063 20.5847L-11.3963 26.5957L25.3763 -10.1708L19.3663 -16.1818L-17.4063 20.5847Z"
                    fill="#747677"
                    mask="url(#path-1-inside-1_138_2802)"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 text-xs font-Jost font-light text-slate-400 ">
          <Chart />
        </div>
      </div>
      <div className="md:w-full  flex ss:w-full">
        {" "}
        <button className=" flex bg-white rounded-l-md  p-3 text-xs font-Jost font-medium border-solid border border-gray-300 text-[#747677]">
          <div className="mr-2">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2153 6.61982C10.5425 6.61982 10.8078 6.8851 10.8078 7.21233C10.8078 7.53955 10.5425 7.80483 10.2153 7.80483H7.76183C7.43461 7.80483 7.16933 7.53955 7.16933 7.21233C7.16933 6.8851 7.43461 6.61982 7.76183 6.61982H10.2153ZM1.08323 7.80483C0.756002 7.80483 0.490723 7.53955 0.490723 7.21233C0.490723 6.8851 0.756002 6.61982 1.08323 6.61982H2.26955C2.52548 5.75525 3.32604 5.12254 4.27194 5.12254C5.42347 5.12254 6.36032 6.06002 6.36032 7.21233C6.36032 8.36464 5.42347 9.30211 4.27194 9.30211C3.32604 9.30211 2.52551 8.6694 2.26955 7.80483H1.08323ZM3.36853 7.21233C3.36853 7.71121 3.77378 8.1171 4.27191 8.1171C4.77005 8.1171 5.17529 7.71124 5.17529 7.21233C5.17529 6.71341 4.77005 6.30755 4.27191 6.30755C3.77381 6.30755 3.36853 6.71344 3.36853 7.21233ZM1.3226 3.00004H5.37715C5.70437 3.00004 5.96965 2.73476 5.96965 2.40753C5.96965 2.08031 5.70437 1.81503 5.37715 1.81503H1.3226C0.995373 1.81503 0.730094 2.08031 0.730094 2.40753C0.730094 2.73476 0.995373 3.00004 1.3226 3.00004ZM6.29994 2.40753C6.29994 1.25522 7.2368 0.317749 8.38835 0.317749C9.38729 0.317749 10.2242 1.02337 10.4286 1.96256H11.5771C11.9043 1.96256 12.1696 2.22784 12.1696 2.55507C12.1696 2.88229 11.9043 3.14757 11.5771 3.14757H10.3411C10.0418 3.9356 9.27958 4.49732 8.38838 4.49732C7.2368 4.49732 6.29994 3.55984 6.29994 2.40753ZM7.48495 2.40753C7.48495 2.90642 7.89022 3.31231 8.38835 3.31231C8.88649 3.31231 9.29173 2.90645 9.29173 2.40753C9.29173 1.90862 8.88649 1.50275 8.38835 1.50275C7.89022 1.50275 7.48495 1.90865 7.48495 2.40753ZM5.33688 11.4246H1.28233C0.95511 11.4246 0.689831 11.6899 0.689831 12.0171C0.689831 12.3443 0.95511 12.6096 1.28233 12.6096H5.33688C5.66411 12.6096 5.92939 12.3443 5.92939 12.0171C5.92939 11.6899 5.66413 11.4246 5.33688 11.4246ZM12.1293 12.1646C12.1293 12.4919 11.864 12.7572 11.5368 12.7572H10.3008C10.0015 13.5452 9.23929 14.1069 8.34806 14.1069C7.19651 14.1069 6.25968 13.1694 6.25968 12.0171C6.25968 10.8648 7.19651 9.92731 8.34806 9.92731C9.34699 9.92731 10.1839 10.633 10.3883 11.5721H11.5368C11.864 11.5721 12.1293 11.8374 12.1293 12.1646ZM9.25144 12.0171C9.25144 11.5182 8.8462 11.1123 8.34806 11.1123C7.84993 11.1123 7.44468 11.5182 7.44468 12.0171C7.44468 12.516 7.84993 12.9219 8.34806 12.9219C8.8462 12.9219 9.25144 12.516 9.25144 12.0171Z"
                fill="#7A8699"
              />
              <path
                d="M11.6852 7.80483C12.0125 7.80483 12.2777 7.53956 12.2777 7.21233C12.2777 6.8851 12.0125 6.61982 11.6852 6.61982C11.358 6.61982 11.0927 6.8851 11.0927 7.21233C11.0927 7.53956 11.358 7.80483 11.6852 7.80483Z"
                fill="#7A8699"
              />
            </svg>
          </div>
          Filter
        </button>
        <div className="flex bg-white rounded-r-md border border-gray-300 w-full  items-center">
          <button className=" ml-3 text-xs font-Jost font-medium border-solid border border-gray-200 rounded-xl bg-slate-50 pl-1.5 pr-1.5 py-0.5 text-[#747677]">
            Status: Active
          </button>
        </div>
      </div>
      <div className="py-3 border-solid border border-b-0 border-gray-300 mt-4 flex justify-between items-center md:w-full px-3 rounded-t-md ss:w-full">
        <div className="flex justify-center items-center gap-3 mt-1 font-Jost font-medium text-xl">
          <svg
            width="26"
            height="27"
            viewBox="0 0 26 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.87608 12.618L3.14927 15.1318C1.94434 15.9445 1.56828 17.5479 2.28621 18.8116L2.38545 18.9863C3.16554 20.3595 4.97793 20.7287 6.23307 19.7703M6.87608 12.618L9.84165 17.0146M6.87608 12.618L12.5555 4.44136M9.84165 17.0146L19.7599 15.1224M9.84165 17.0146L13.5405 22.4983C14.2274 23.5168 13.9587 24.8992 12.9402 25.5862C11.9313 26.2667 10.5628 26.0101 9.86899 25.0102L6.23307 19.7703M9.84165 17.0146L6.23307 19.7703M19.7599 15.1224L20.5013 16.2215C20.9108 16.8286 21.7348 16.9888 22.3419 16.5793C22.9489 16.1698 23.1091 15.3458 22.6997 14.7387L14.2972 2.2816C13.8877 1.67456 13.0637 1.51438 12.4567 1.92384C11.8496 2.3333 11.6894 3.15734 12.0989 3.76439L12.5555 4.44136M19.7599 15.1224L12.5555 4.44136M19.8102 1.76149L19.214 4.82907M24.4799 3.94256L20.816 6.41387M24.7529 9.08921L21.6853 8.49293"
              stroke="black"
              stroke-width="1.2"
            />
          </svg>
          Ads
        </div>
        <button className="bg-black rounded-xl text-white flex justify-center items-center gap-3 text-xs  p-1.5 px-3 sm:p-2 sm:pl-6 sm:pr-9">
          {" "}
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.435 0.770935V10.0005M0.820312 5.38573H10.0499"
              stroke="#F8F8F8"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Create Ad
        </button>
      </div>
      <div className="overflow-x-scroll ">
        <table className="w-full bg-white border-gray-300  sm:w-full ">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 font-Jost font-semibold text-sm">
                On/Off
              </th>
              <th className="border border-gray-300 font-Jost font-semibold text-sm pr-64 ss:pl-4">
                Name
              </th>
              <th className="border border-gray-300 p-3 font-Jost font-semibold text-sm">
                Status
              </th>
              <th className="border border-gray-300 p-3 font-Jost font-semibold text-sm">
                Impressions
              </th>
              <th className="border border-gray-300 p-3 font-Jost font-semibold text-sm px-4">
                Clicks
              </th>
              <th className="border border-gray-300 p-3 font-Jost font-semibold text-sm px-7">
                CPC
              </th>
              <th className="border border-gray-300 p-3 font-Jost font-semibold text-sm px-5">
                CTR
              </th>
              <th className="border border-gray-300 p-3 font-Jost font-semibold text-sm">
                Amount Spent
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 pl-4 py-4">
                <svg
                  width="30"
                  height="17"
                  viewBox="0 0 30 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="3.05231"
                    width="22"
                    height="10.6667"
                    rx="5.33333"
                    fill="#77C5FD"
                    fill-opacity="0.5"
                  />
                  <circle cx="22" cy="8.38574" r="8" fill="#77C5FD" />
                </svg>
              </td>
              <td className="border border-gray-200  flex items-center justify-between py-3 px-3 text-sm text-stone-500 font-Jost font-normal">
                Style with Our Latest Watch Collect...
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0312 14.4053C13.8597 14.4053 14.5312 13.7337 14.5312 12.9053C14.5312 12.0768 13.8597 11.4053 13.0312 11.4053C12.2028 11.4053 11.5312 12.0768 11.5312 12.9053C11.5312 13.7337 12.2028 14.4053 13.0312 14.4053Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 7.40527C13.8597 7.40527 14.5312 6.7337 14.5312 5.90527C14.5312 5.07685 13.8597 4.40527 13.0312 4.40527C12.2028 4.40527 11.5312 5.07685 11.5312 5.90527C11.5312 6.7337 12.2028 7.40527 13.0312 7.40527Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 21.4053C13.8597 21.4053 14.5312 20.7337 14.5312 19.9053C14.5312 19.0768 13.8597 18.4053 13.0312 18.4053C12.2028 18.4053 11.5312 19.0768 11.5312 19.9053C11.5312 20.7337 12.2028 21.4053 13.0312 21.4053Z"
                      fill="#747677"
                    />
                  </svg>
                </div>
              </td>
              <td className="border border-gray-300 pr-7 pl-3 text-sm text-stone-500 font-Jost font-normal">
                <div className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.46826"
                      cy="6.38574"
                      r="5.04167"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.66667"
                      fill="#62C542"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.20833"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                  </svg>
                  Active{" "}
                </div>
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                89,909
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 pl-4 py-4">
                <svg
                  width="30"
                  height="17"
                  viewBox="0 0 30 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.241211"
                    y="2.78577"
                    width="29.5177"
                    height="11.2"
                    rx="5.6"
                    fill="#D8D8D8"
                  />
                  <ellipse
                    cx="8.21896"
                    cy="8.38574"
                    rx="7.97775"
                    ry="8"
                    fill="#919191"
                  />
                </svg>
              </td>
              <td className="border border-gray-200  flex items-center justify-between py-3 px-3 text-sm text-stone-500 font-Jost font-normal">
                Style with Our Latest Watch Collect...
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0312 14.4053C13.8597 14.4053 14.5312 13.7337 14.5312 12.9053C14.5312 12.0768 13.8597 11.4053 13.0312 11.4053C12.2028 11.4053 11.5312 12.0768 11.5312 12.9053C11.5312 13.7337 12.2028 14.4053 13.0312 14.4053Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 7.40527C13.8597 7.40527 14.5312 6.7337 14.5312 5.90527C14.5312 5.07685 13.8597 4.40527 13.0312 4.40527C12.2028 4.40527 11.5312 5.07685 11.5312 5.90527C11.5312 6.7337 12.2028 7.40527 13.0312 7.40527Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 21.4053C13.8597 21.4053 14.5312 20.7337 14.5312 19.9053C14.5312 19.0768 13.8597 18.4053 13.0312 18.4053C12.2028 18.4053 11.5312 19.0768 11.5312 19.9053C11.5312 20.7337 12.2028 21.4053 13.0312 21.4053Z"
                      fill="#747677"
                    />
                  </svg>
                </div>
              </td>
              <td className="border border-gray-300 pr-3 pl-3 text-sm text-stone-500 font-Jost font-normal">
                <div className="flex items-center gap-2">
                  {" "}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6"
                      cy="6.38574"
                      r="5.04167"
                      stroke="#9E9E9E"
                      stroke-width="0.916667"
                    />
                    <circle
                      cx="6.00065"
                      cy="6.38566"
                      r="3.20833"
                      fill="#9E9E9E"
                      stroke="#9E9E9E"
                      stroke-width="0.916667"
                    />
                  </svg>
                  Not Delivering
                </div>
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                79,786
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                17,909
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                ₹40
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                2%
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                ₹20,0000
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 pl-4 py-4">
                <svg
                  width="30"
                  height="17"
                  viewBox="0 0 30 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="3.05231"
                    width="22"
                    height="10.6667"
                    rx="5.33333"
                    fill="#77C5FD"
                    fill-opacity="0.5"
                  />
                  <circle cx="22" cy="8.38574" r="8" fill="#77C5FD" />
                </svg>
              </td>
              <td className="border border-gray-200  flex items-center justify-between py-3 px-3 text-sm text-stone-500 font-Jost font-normal">
                Style with Our Latest Watch Collect...
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0312 14.4053C13.8597 14.4053 14.5312 13.7337 14.5312 12.9053C14.5312 12.0768 13.8597 11.4053 13.0312 11.4053C12.2028 11.4053 11.5312 12.0768 11.5312 12.9053C11.5312 13.7337 12.2028 14.4053 13.0312 14.4053Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 7.40527C13.8597 7.40527 14.5312 6.7337 14.5312 5.90527C14.5312 5.07685 13.8597 4.40527 13.0312 4.40527C12.2028 4.40527 11.5312 5.07685 11.5312 5.90527C11.5312 6.7337 12.2028 7.40527 13.0312 7.40527Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 21.4053C13.8597 21.4053 14.5312 20.7337 14.5312 19.9053C14.5312 19.0768 13.8597 18.4053 13.0312 18.4053C12.2028 18.4053 11.5312 19.0768 11.5312 19.9053C11.5312 20.7337 12.2028 21.4053 13.0312 21.4053Z"
                      fill="#747677"
                    />
                  </svg>
                </div>
              </td>
              <td className="border border-gray-300 pr-7 pl-3 text-sm text-stone-500 font-Jost font-normal">
                <div className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.46826"
                      cy="6.38574"
                      r="5.04167"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.66667"
                      fill="#62C542"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.20833"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                  </svg>
                  Active{" "}
                </div>
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                678,000
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 pl-4 py-4">
                <svg
                  width="30"
                  height="17"
                  viewBox="0 0 30 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.241211"
                    y="2.78577"
                    width="29.5177"
                    height="11.2"
                    rx="5.6"
                    fill="#D8D8D8"
                  />
                  <ellipse
                    cx="8.21896"
                    cy="8.38574"
                    rx="7.97775"
                    ry="8"
                    fill="#919191"
                  />
                </svg>
              </td>
              <td className="border border-gray-200  flex items-center justify-between py-3 px-3 text-sm text-stone-500 font-Jost font-normal">
                Style with Our Latest Watch Collect...
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0312 14.4053C13.8597 14.4053 14.5312 13.7337 14.5312 12.9053C14.5312 12.0768 13.8597 11.4053 13.0312 11.4053C12.2028 11.4053 11.5312 12.0768 11.5312 12.9053C11.5312 13.7337 12.2028 14.4053 13.0312 14.4053Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 7.40527C13.8597 7.40527 14.5312 6.7337 14.5312 5.90527C14.5312 5.07685 13.8597 4.40527 13.0312 4.40527C12.2028 4.40527 11.5312 5.07685 11.5312 5.90527C11.5312 6.7337 12.2028 7.40527 13.0312 7.40527Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 21.4053C13.8597 21.4053 14.5312 20.7337 14.5312 19.9053C14.5312 19.0768 13.8597 18.4053 13.0312 18.4053C12.2028 18.4053 11.5312 19.0768 11.5312 19.9053C11.5312 20.7337 12.2028 21.4053 13.0312 21.4053Z"
                      fill="#747677"
                    />
                  </svg>
                </div>
              </td>
              <td className="border border-gray-300 pr-7 pl-3 text-sm text-stone-500 font-Jost font-normal">
                <div className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.46826"
                      cy="6.38574"
                      r="5.04167"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.66667"
                      fill="#62C542"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.20833"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                  </svg>
                  Active{" "}
                </div>
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                20,909
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                9,097
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                ₹90
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                17%
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                ₹30,000
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 pl-4 py-4">
                <svg
                  width="30"
                  height="17"
                  viewBox="0 0 30 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="3.05231"
                    width="22"
                    height="10.6667"
                    rx="5.33333"
                    fill="#77C5FD"
                    fill-opacity="0.5"
                  />
                  <circle cx="22" cy="8.38574" r="8" fill="#77C5FD" />
                </svg>
              </td>
              <td className="border border-gray-200  flex items-center justify-between py-3 px-3 text-sm text-stone-500 font-Jost font-normal">
                Style with Our Latest Watch Collect...
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0312 14.4053C13.8597 14.4053 14.5312 13.7337 14.5312 12.9053C14.5312 12.0768 13.8597 11.4053 13.0312 11.4053C12.2028 11.4053 11.5312 12.0768 11.5312 12.9053C11.5312 13.7337 12.2028 14.4053 13.0312 14.4053Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 7.40527C13.8597 7.40527 14.5312 6.7337 14.5312 5.90527C14.5312 5.07685 13.8597 4.40527 13.0312 4.40527C12.2028 4.40527 11.5312 5.07685 11.5312 5.90527C11.5312 6.7337 12.2028 7.40527 13.0312 7.40527Z"
                      fill="#747677"
                    />
                    <path
                      d="M13.0312 21.4053C13.8597 21.4053 14.5312 20.7337 14.5312 19.9053C14.5312 19.0768 13.8597 18.4053 13.0312 18.4053C12.2028 18.4053 11.5312 19.0768 11.5312 19.9053C11.5312 20.7337 12.2028 21.4053 13.0312 21.4053Z"
                      fill="#747677"
                    />
                  </svg>
                </div>
              </td>
              <td className="border border-gray-300 pr-7 pl-3 text-sm text-stone-500 font-Jost font-normal">
                <div className="flex items-center gap-2">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="6.46826"
                      cy="6.38574"
                      r="5.04167"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.66667"
                      fill="#62C542"
                    />
                    <circle
                      cx="6.46891"
                      cy="6.38566"
                      r="3.20833"
                      stroke="#62C542"
                      stroke-opacity="0.5"
                      stroke-width="0.916667"
                    />
                  </svg>
                  Active{" "}
                </div>
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                75,085
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
              <td className="border border-gray-300 text-sm text-stone-500 font-Jost font-normal text-center">
                --
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
