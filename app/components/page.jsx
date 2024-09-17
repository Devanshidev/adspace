"use client";
import { useSearchParams } from "next/navigation";
import React,{useState} from "react";
import IMG1 from "../assets/img1.png";
import IMG2 from "../assets/img2.png";
import IMG3 from "../assets/img3.png";
import Image from "next/image";
import FeatureCard from "../components/FeatureCard";
import avatar from "../assets/Avatar (2).png";
import Link from "next/link";

const page = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  const [states, setStates] = useState({
    firstName: "",
    lastName: "",
    pan:"",
    organization:"",
    Gst:"",
    PhoneNumber:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    Address:"",
    City:"",
    State:"",
    PostalCode:"",
    FamousLandMark:""
  });

  const changeStates = (e) => {
    try {
      const { value, name } = e.target;
      
      setStates({
        ...states,
        [name]:value
      });
     
    } catch (error) {
      console.log(error);
    }
  };
  console.log(states);

  return (
    <div className="mt-7 w-full ">
      {Number(step) == 1 && (
        <div className="flex flex-col  gap-3  items-center">
          <div className="flex flex-col gap-6">
            <FeatureCard
              img={<Image src={IMG1} alt="image-1" />}
              heading="Individual"
              para="Advertise your own app or service to gain traction within the Grovyo user base.."
              flag="true"
            />
            <FeatureCard
              img={<Image src={IMG2} alt="image-1" />}
              heading="Organization"
              para="Run ads for multiple accounts and earn cashback on your ad spend"
              flag="false"
            />
            <FeatureCard
              img={<Image src={IMG3} alt="image-1" />}
              heading="Affiliator"
              para="Run ads for multiple accounts and earn cashback on your ad spend"
              flag="false"
            />
          </div>
          <Link
            href={"/registration?step=2"}
            className="bg-[#47A6FF] text-white px-4 py-1 text-[16px] rounded-lg"
          >
            Continue
          </Link>
        </div>
      )}

      {Number(step) == 2 && (
        <div className="flex  flex-col items-center">
          <div className="flex flex-col w-full gap-1 items-center mt-4">
            <Image className="h-[70px] w-[70px]" src={avatar} />
            <div className="text-blue-600">Change picture</div>
          </div>
          <div className="flex flex-col gap-2 w-[50%] mt-8 ">
          <div className="flex mx-4 gap-2 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px] ">First Name</div>{" "}
              <input
                type="text"
                className="px-2"
                name="firstName"
                value={states.firstName}
                onChange={changeStates}
                placeholder="David"
              />
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Last Name</div>{" "}
              <input
                type="text"
                className="px-2"
                name="lastName"
                value={states.lastName}
                onChange={(e) => changeStates(e)}
                placeholder="Warner"
              />
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Organization Name </div>
            <input
              type="text"
              className="px-2"
              value={states.organization}
              name="organization"
             onChange={changeStates}
              placeholder="WarnerOrganization"
            />
          </div>
          <hr className="mx-4 mb-2" />
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Pan</div>
            <input
              type="text"
              className="px-2"
               name="pan"
              value={states.pan}
              onChange={(e) => changeStates(e)}
              placeholder="IOLMA902ND"
            />
          </div>
          <hr className="mx-4 mb-2" />
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Gst</div>
            <input
              type="text"
              className="px-2"
              value={states.Gst}
              name="Gst"
              onChange={(e) => changeStates(e)}
              placeholder="JSk33"
            />
          </div>
          <hr className="mx-4 mb-2" />
          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">Phone Number</div>
              <input
                type="text"
                className="px-2"
                value={states.PhoneNumber}
                name="PhoneNumber"
                onChange={(e) => changeStates(e)}
                placeholder="+91 1234567891"
              />
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Email</div>
              <input
                type="text"
                className="px-2"
                value={states.Email}
                name="Email"
                onChange={(e) => changeStates(e)}
                placeholder="Smith@gmail.com"
              />
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>

          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">Password</div>
              <input
                type="text"
                className="px-2"
                value={states.Password}
                name="Password"
                onChange={(e) => changeStates(e)}
                placeholder="Smith"
              />
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Confirm Password</div>
              <input
                type="text"
                className="px-2"
               value={states.ConfirmPassword}
                name="ConfirmPassword"
                onChange={(e) => changeStates(e)}
                placeholder="Smith"
              />
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className="mx-4 space-y-1">
            <div className="text-[14px]">Address</div>
            <input
              type="text-area"
              className="px-2"
             value={states.Address}
             name="Address"
             onChange={(e) => changeStates(e)}
              placeholder="Street road,Lucknow"
            />
          </div>
          <hr className="mx-4 mb-2" />
          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">City</div>
              <input
                type="text"
                className="px-2"
                value={states.City}
                name="City"
                onChange={(e) => changeStates(e)}
                placeholder="Lucknow"
              />
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">State</div>
              <input
                type="text"
                className="px-2"
               value={states.State}
               name="State"
               onChange={(e) => changeStates(e)}
                placeholder="Uttar Pradesh"
              />
            </div>
          </div>
          <div className="flex  mb-2">
            <hr className="ml-4 w-[50%]" />
            <hr className="mx-4 w-[50%]" />
          </div>
          <div className="flex mx-4 ">
            <div className="w-[50%] space-y-1">
              <div className="text-[14px]">Postal Code</div>
              <input
                type="text"
                className="px-2"
                value={states.PostalCode}
               name="PostalCode"
               onChange={(e) => changeStates(e)}
                placeholder="000000"
              />
            </div>
            <div className="space-y-1">
              <div className="text-[14px]">Famous Landmark</div>
              <input
                type="text"
                className="px-2"
                value={states.FamousLandMark}
               name="FamousLandMark"
               onChange={(e) => changeStates(e)}
                placeholder="Smithin Club"
              />
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
          <div className=" w-[50%] flex my-8 mb-8">
            <Link
              href={"/registration?step=3"}
              className="border rounded-lg px-5 py-2 text-[14px] cursor-pointer"
            >
              Go Next &#10230;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
