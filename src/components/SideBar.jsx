import {} from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SideBar = () => {
  // const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-black/90">
        <div className="bg-white shadow-md h-[100vh] w-[280px] py-10 px-0">
          <div className="relative m-auto align-middle flex justify-center bottom-8 mt-6">
            <Link to="/">
              <img src="/logo.png" className="w-[150px]" alt="Logo Image" />
            </Link>
          </div>
          <ul className="w-full flex flex-col leading-[1.55]">
            <li className="border-t-[#dcdcdc] border-b-[#dcdcdc] border border-l-0 border-r-0 w-full py-1 capitalize">
              <Link
                to={"/"}
                className="text-[#343434] text-left text-[16px] font-Syne px-8 w-full pr-[12.5rem] py-2"
              >
                Home
              </Link>
            </li>
            <li className="border-t-0 border-b-[#dcdcdc] border border-l-0 border-r-0 w-full py-1 capitalize">
              <Link
                to={"/about"}
                className="text-[#343434] text-left text-[16px] font-Syne px-8 w-full py-2 pr-[11rem]"
              >
                About us
              </Link>
            </li>
            <li className="border-t-0 border-b-[#dcdcdc] border border-l-0 border-r-0 w-full py-1 capitalize">
              <Link
                to={"/services"}
                className="text-[#343434] text-left text-[16px] font-Syne px-8 w-full py-2 pr-[10rem]"
              >
                our services
              </Link>
            </li>
            <li className="border-t-0 border-b-[#dcdcdc] border border-l-0 border-r-0 w-full py-1 capitalize">
              <Link
                to={"/appraisal"}
                className="text-[#343434] text-left text-[16px] font-Syne px-8 w-full py-2 pr-[11rem]"
              >
                Appraisal
              </Link>
            </li>
            <li className="border-t-0 border-b-[#dcdcdc] border border-l-0 border-r-0 w-full py-1 capitalize">
              <Link
                to={"/faqs"}
                className="text-[#343434] text-left text-[16px] font-Syne px-8 w-full py-2 pr-[12.5rem]"
              >
                faqs
              </Link>
            </li>
            <li className="border-t-0 border-b-[#dcdcdc] border border-l-0 border-r-0 w-full py-1 capitalize">
              <Link
                to={"/contact"}
                className="text-[#343434] text-left text-[16px] font-Syne px-8 w-full py-2 pr-[12.5rem]"
              >
                contact
              </Link>
            </li>
          </ul>
          <div className="bg-[#0b2545] flex mx-3 my-9">
            <div>
              <IoCallOutline className="text-5xl my-3 ml-3 text-white" />
            </div>
            <div className="py-4 px-1">
              <h1 className="font-bold font-[Syne] text-[14px] uppercase text-white">
                Free Consultation
              </h1>
              <p className="text-[14px] font-[Syne] text-white">
                +91 98402 456 987
              </p>
            </div>
          </div>
          <div>
            <h2 className="capitalize text-[16px] font-[600] font-Syne text-center mb-0.5">
              Follow us on:
            </h2>
            <ul className="flex items-center justify-center">
              <li className="border shadow-md p-1 rounded-full m-1">
                <Link className="">
                  <FaFacebookF className="text-blue-700" />
                </Link>
              </li>
              <li className="border shadow-md p-1 rounded-full m-1">
                <Link className="">
                  <BsTwitterX className="text-black" />
                </Link>
              </li>
              <li className="border shadow-md p-1 rounded-full m-1">
                <Link className="">
                  <FaLinkedin className="text-blue-600" />
                </Link>
              </li>
              <li className="border shadow-md p-1 rounded-full m-1">
                <Link className="">
                  <FaWhatsapp className="text-black" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
