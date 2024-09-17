"use client"
import { useState } from "react";
import React from "react";
const Setting = () => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [location, setLocation] = useState();
  const [advertiseid, setAdvertiseid] = useState();
  const [country, setCountry] = useState();
  const [taxid, setTaxid] = useState();
  const [business, setBusiness] = useState();
  const [region, setRegion] = useState();
  const [postal, setPostal] = useState();

  const setting = {
    "name": name,
    "phone": phone,
    "location": location,
    "advertiseId": advertiseid,
    "country": country,
    "taxId": taxid,
    "Business Address": business,
    "region": region,
    "postal code": postal
  }
  console.log(setting);
  return (
    <>

      <div className="flex justify-between mb-4 ss:w-full items-center gap-20">
        <div className="font-Jost px-2 sm:text-2xl font-semibold ss:text-xl">
          Settings
        </div>
      </div>
      <div className="bg-white p-5 rounded-t-lg ss:w-full">
        <div className="font-Jost sm:text-xl font-semibold mb-4 ss:text-sm">
          Account
        </div>
        <div className="border-[0.5px] border-gray-300 rounded-md">
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-2.5 font-medium sm:text-sm bg-neutral-100 ss:text-xs font-jost text-[#]">
            Billing Details{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4852 3.515C25.1718 8.20167 25.1718 15.799 20.4852 20.4857C15.7985 25.1723 8.20118 25.1723 3.51451 20.4857C-1.17216 15.799 -1.17216 8.20167 3.51451 3.515C8.20118 -1.17167 15.7985 -1.17167 20.4852 3.515ZM10.0552 16.7737L7.22718 13.9457L5.98918 18.0117L10.0552 16.7737ZM16.5958 10.2337L13.7678 7.405L7.75718 13.415L10.5858 16.2437L16.5958 10.2337ZM19.0712 7.051L16.9498 4.92967C16.7765 4.75633 16.5065 4.737 16.3118 4.87233L16.2425 4.92967L14.4745 6.69767L17.3032 9.52633L19.0712 7.75833C19.2445 7.585 19.2638 7.31567 19.1285 7.12033L19.0712 7.051Z"
                fill="#201D23"
              />
            </svg>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Name <span className="text-black font-medium">
              <input type="text" defaultValue="Full Name" onChange={e => setName(e.target.value)} className=" text-end focus:outline-none" />
            </span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Phone <span className="text-black font-medium">
              <input type="tel" defaultValue="7021 000 004" onChange={e => setPhone(e.target.value)} className="text-end focus:outline-none" /></span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Location <span className="text-black font-medium">
              <input type="text" defaultValue="IND" onChange={e => setLocation(e.target.value)} className="text-end focus:outline-none" /></span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs">
            Advertiser Id <span className="text-black font-medium">
              <input type="text" defaultValue="IND" onChange={e => setAdvertiseid(e.target.value)} className=" text-end focus:outline-none" /></span>
          </div>
        </div>
        <div className="font-Jost text-xl font-semibold mt-4 mb-4 ss:text-sm">
          Tax Information
        </div>
        <div className="border-[0.5px]  border-gray-300 rounded-md">
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-2.5 font-medium sm:text-sm bg-neutral-100 ss:text-xs ">
            Tax Information{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4852 3.515C25.1718 8.20167 25.1718 15.799 20.4852 20.4857C15.7985 25.1723 8.20118 25.1723 3.51451 20.4857C-1.17216 15.799 -1.17216 8.20167 3.51451 3.515C8.20118 -1.17167 15.7985 -1.17167 20.4852 3.515ZM10.0552 16.7737L7.22718 13.9457L5.98918 18.0117L10.0552 16.7737ZM16.5958 10.2337L13.7678 7.405L7.75718 13.415L10.5858 16.2437L16.5958 10.2337ZM19.0712 7.051L16.9498 4.92967C16.7765 4.75633 16.5065 4.737 16.3118 4.87233L16.2425 4.92967L14.4745 6.69767L17.3032 9.52633L19.0712 7.75833C19.2445 7.585 19.2638 7.31567 19.1285 7.12033L19.0712 7.051Z"
                fill="#201D23"
              />
            </svg>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs ">
            Country <span className="text-black font-medium">
              <input type="text" defaultValue="India" onChange={e => setCountry(e.target.value)} className=" text-end focus:outline-none" /></span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs ">
            Tax Registration Id
            <span className="text-black font-medium">
              <input type="text" defaultValue="GST" onChange={e => setTaxid(e.target.value)} className=" text-end focus:outline-none" /></span>
          </div>
          <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm ss:text-xs ">
            Business Address
            <span className="text-black font-medium">
              <input type="text" defaultValue="Address" onChange={e => setBusiness(e.target.value)} className=" text-end focus:outline-none" /></span>
          </div>
          <div className="flex">
            <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm w-3/6 ss:text-xs ">
              Region<span className="text-black font-medium">
                <input type="text" defaultValue="Region" onChange={e => setRegion(e.target.value)} className=" text-end focus:outline-none" /></span>
            </div>
            <div className="flex items-center rounded-sm border-[0.5px]  border-gray-300 justify-between p-3 text-gray-500 sm:text-sm w-3/6 ss:text-xs ">
              Postal Code<span className="text-black font-medium">
                <input type="number"  defaultValue="208001" onChange={e => setPostal(e.target.value)} className=" text-end  focus:outline-none" /></span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Setting;
