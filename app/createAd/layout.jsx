import AdsHeader from "../components/AdsHeader";
import CreateAdPreview from "../components/CreateAdPreview";
import styles from "../CustomScrollbarComponent.module.css";

export default function CreateAdLayout({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col fixed">
      <div className="h-[8%]">
        <AdsHeader />
      </div>
      <div className="h-[92%] ">
        <div className="h-full grid grid-cols-2 w-full">
          <div
            className={`overflow-y-scroll mb-16 bg-[#F6F8F9] ${styles.customScrollbar} col-span-1 p-4`}
          >
            {children}
          </div>
          <div className="col-span-1 bg-[#EEF1F3] p-2 h-full">
            <CreateAdPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
