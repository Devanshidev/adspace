"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  setCommunity,
  setName,
  setObjective,
  setHeadline,
  setDescription,
  setActionAndUrl,
  setFile,
} from "@/redux/CreateAdSlice";

import { FaBullhorn } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { HiCursorClick } from "react-icons/hi";
import { BiConversation } from "react-icons/bi";
import { MdOutlineFileDownload, MdOndemandVideo } from "react-icons/md";

const objectives = [
  {
   name: "Brand awareness and reach",
   id: 1,
   description: "Increace awareness of your brand or product",
   options: ["Pay for CPM", "Otimized towards impression"],
   icon: <FaBullhorn />,
  },
  {
   name: "Traffic",
   id: 2,
   description: "Increase traffic to your brand or product",
   options: ["Pay for CPM", "Otimized towards impression"],
   icon: <HiCursorClick />,
  },
  {
   name: "Conversions",
   id: 3,
   description: "Increase conversions to your brand or product",
   options: ["Pay for CPM", "Otimized towards impression"],
   icon: <BiConversation />,
  },
   {
     name: "App installs",
     id: 4,
     description: "Increase app installs to your brand or product",
     options: ["Pay for CPM", "Otimized towards impression"],
     icon: <MdOutlineFileDownload />,
   },
   {
     name: "Views",
     id: 5,
     description: "Increase views to your brand or product",
     options: ["Pay for CPM", "Otimized towards impression"],
     icon: <MdOndemandVideo />,
   },
   {
     name: "Sales",
     id: 6,
     description: "Increase sales to your brand or product",
     options: ["Pay for CPM", "Otimized towards impression"],
     icon: <VscGraph />,
   }
]

const MsetUpAds = () => {
  const dispatch = useDispatch();
  const { community, name, objective, headline, description, actionAndUrl, file } = useSelector((state) => state.createad.form1);
  const [selectedObjective, setSelectedObjective] = useState(objective);

  const handleObjectiveSelect = (objective) => {
    setSelectedObjective(objective);
    dispatch(setObjective(objective));
  };

  return (
    <div className="h-full px-2 flex flex-col gap-5 ">
      <form className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="community" className="text-[16px] font-semibold">
            Community<span className="pl-2 text-red-600">*</span>
          </label>
          <select
            id="community"
            className="rounded-lg bg-white px-2 py-3 border-2 border-[#F2F2F7] active:border-[#2D9AFF] focus:border-[#2D9AFF]"
            value={community}
            onChange={(e) => dispatch(setCommunity(e.target.value))}
          >
            <option value={"Clothing Girlz 1"} className="text-[12px] sm:text-[16px]">
              Clothing Girlz 1
            </option>
            <option value={"Clothing Girlz 2"} className="text-[12px] sm:text-[16px]">
              Clothing Girlz 2
            </option>
            <option value={"Clothing Girlz 3"} className="text-[12px] sm:text-[16px]">
              Clothing Girlz 3
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ad-name" className="text-[16px] font-semibold">
            Ad Name <span className="pl-2 text-red-600">*</span>
          </label>
          <input
            type="text"
            className="rounded-lg w-full px-2 py-3 border-2 border-[#F2F2F7] focus:border-[#2D9AFF] active:border-[#2D9AFF]"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
      </form>
      {/* Objective Selection */}
      <div className="flex flex-col gap-2">
        <div className="text-[16px] font-semibold">
          Objective <span className="pl-2 text-red-600">*</span>
        </div>
        <div className="flex gap-8">
          <div className="flex-1">
          {
          objectives.map((objective) => (
            <div
              key={objective.id}
              className={`border-2 rounded-lg py-3 px-2 mb-6 flex gap-4 items-center ${
                objective.id === selectedObjective.id ? "border-gray-600 font-bold" : ""
              } border-[#F2F2F7]`}
              onClick={() => handleObjectiveSelect(objective)}
            >
              <span className="text-xl">{objective.icon}</span>
              <span>{objective.name}</span>
            </div>
          ))
          }
          </div>
          <div className="flex-1 flex items-stretch">
            <div className="bg-[#F6F8F9] flex-grow px-8 py-10 rounded-lg mb-6">
              <h3 className="text-xl font-extrabold mb-2">{selectedObjective.name}</h3>
              <span className="text-sm text-[#666666]">{selectedObjective.description}</span>
              {selectedObjective && selectedObjective.options.map((option, index) => (
                <div key={index} className="font-semibold mt-4">&bull; {option}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Other fields similarly... */}
      {/* Headline */}
      <div className="flex flex-col gap-2">
        <label htmlFor="headline" className="text-[16px] font-semibold">
          Headline <span className="pl-2 text-red-600">*</span>
        </label>
        <input
          type="text"
          id="headline"
          className="rounded-lg w-full px-2 py-3 border-2 border-[#F2F2F7] focus:border-[#2D9AFF] active:border-[#2D9AFF]"
          value={headline}
          onChange={(e) => dispatch(setHeadline(e.target.value))}
        />
      </div>
      {/* Description */}
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-[16px] font-semibold">
          Description
        </label>
        <textarea
          id="description"
          className="rounded-lg w-full min-h-[80px] text-sm outline-none p-2 border-2 border-[#F2F2F7]"
          value={description}
          onChange={(e) => dispatch(setDescription(e.target.value))}
        />
      </div>
      {/* Call to Action and Destination URL */}
      <div className="grid grid-cols-5 gap-2 w-full">
        <div className="flex col-span-2 flex-col gap-2 w-full">
          <label htmlFor="action" className="text-[16px] font-semibold">
            Call to action<span className="pl-2 text-red-600">*</span>
          </label>
          <select
            id="action"
            className="rounded-lg py-2 px-3 place-self-stretch border-2 bg-white border-[#F2F2F7]"
            value={actionAndUrl.action}
            onChange={(e) => dispatch(setActionAndUrl({ ...actionAndUrl, action: e.target.value }))}
          >
            <option value="" className="text-[12px] place-self-stretch sm:text-[16px]">Select ...</option>
            {/* Add your options here */}
          </select>
        </div>
        <div className="flex col-span-3 w-full flex-col gap-2">
          <label htmlFor="url" className="text-[16px] font-semibold">
            Destination URL
          </label>
          <input
            type="text"
            id="url"
            placeholder="https://"
            className="rounded-lg outline-none w-full p-2 border-2 border-[#F2F2F7]"
            value={actionAndUrl.url}
            onChange={(e) => dispatch(setActionAndUrl({ ...actionAndUrl, url: e.target.value }))}
          />
        </div>
      </div>
      {/* File Upload */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ad-file" className="text-[16px] font-semibold">
          Upload Ad File
        </label>
        <input
          type="file"
          id="ad-file"
          className="rounded-lg w-full px-2 py-3 border-2 border-[#F2F2F7] focus:border-[#2D9AFF] active:border-[#2D9AFF]"
          onChange={(e) => dispatch(setFile(e.target.files[0]))}
        />
      </div>
    </div>
  );
};

export default MsetUpAds;
