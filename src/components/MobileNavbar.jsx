import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <div className="com:hidden tv:hidden cin:hidden">
      <div className=" flex justify-around">
        <div className="mx-4 mt-8">
          <button onClick={() => setShowSidebar(!showSideBar)}>
            <FaBars className="text-3xl text-[#0b2545]" />
          </button>
        </div>
        <div className="m-4 ">
          <Link to="/">
            <img src="/logo.png" className="w-[230px]" alt="Logo Image" />
          </Link>
        </div>
        <div className=" mt-5 mr-7 mb-5 ml-0 bg-[#0b2545] w-52 px-10 py-6 hidden hover:bg-[#343434] mcom:block ">
          <Link
            to="/contact"
            className="text-white font-semibold text-sm font-[Syne] tracking-widest "
          >
            GET A QUOTE
          </Link>
        </div>
        <div
          className={`${
            showSideBar ? "hidden" : "flex"
          } absolute top-0 right-0 bottom-0 z-[100]`}
        >
          <button
            onClick={() => setShowSidebar(!showSideBar)}
            className="absolute top-5 mb-4 left-5 border bg-red-500 text-white font-extrabold text-sm p-1"
          >
            <AiOutlineClose />
          </button>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
