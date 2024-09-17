import Link from "next/link";

const AdsHeader = () => {
  return (
    <div className=" bg-white h-full text-black border shadow-lg flex justify-between items-center py-3 px-4 sm:px-10">
      <h1 className="font-semibold text-xl">Set up new Ad</h1>
      <div className="flex items-center gap-4 ">
        <Link href="" className="underline">
          Discord
        </Link>
        <button className="text-white p-2 bg-[#2D9AFF] rounded-xl px-5 text-sm">
          Save
        </button>
      </div>
    </div>
  );
};

export default AdsHeader;
