import { MdMailOutline } from "react-icons/md";
import { BsTelephone, BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="hidden com:block tv:block cin:block">
        <div className=" max-xl:hidden">
          <nav className="flex justify-between border px-[13px] bg-[#f9f9f9]">
            <div className="flex">
              <ul className="flex">
                <li>
                  <span className="flex mt-1 ml-4">
                    <MdMailOutline className="m-[4px]" />
                    <a
                      href="mailto:fawasrufai09@gmail.com "
                      className="font-[Syne]"
                    >
                      fawasrufai09@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <span className="flex mt-1 ml-6">
                    <BsTelephone className="m-[4px]" />
                    <a href="tel:+2347044637201 " className="font-[Syne]">
                      +2347044637201
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex">
              <ul className="flex cursor-pointer">
                <li>
                  <FaFacebookF className="m-2 opacity-50 hover:opacity-100" />
                </li>
                <li>
                  <BsTwitterX className="m-2 opacity-50 hover:opacity-100" />
                </li>
                <li>
                  <FaLinkedin className="m-2 opacity-50 hover:opacity-100" />
                </li>
                <li>
                  <FaWhatsapp className="m-2 opacity-50 hover:opacity-100" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="flex h-24 shadow-md top-6 z-50 bg-[#f9f9f9] w-full">
          <nav className="flex justify-between px-[10px] py-[15px]">
            <ul className="flex">
              <li className="px-2">
                <Link to="/" className="font-bold text-[14px] font-[Syne] ">
                  HOME.
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to="/about"
                  className="font-bold text-[14px] font-[Syne] "
                >
                  ABOUT US.
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to="/services"
                  className="font-bold text-[14px] font-[Syne] "
                >
                  OUR SERVICES.
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to="/appraisal"
                  className="font-bold text-[14px] font-[Syne] "
                >
                  APPRAISAL.
                </Link>
              </li>
              <li className="px-2">
                <Link to="/faq" className="font-bold text-[14px] font-[Syne] ">
                  FAQS.
                </Link>
              </li>
              <li className="px-2">
                <Link
                  to="/contact"
                  className="font-bold text-[14px] font-[Syne] "
                >
                  CONTACT.
                </Link>
              </li>
            </ul>
          </nav>
          <div className="relative w-[305px] -top-2 z-10 right-0 mx-0 my-auto inline-block">
            <Link to="/">
              <img src="/logo.png" className="w-[250px]" alt="Logo Image" />
            </Link>
          </div>
          <div className=" mt-5 mr-7 mb-5 ml-0 bg-[#0b2545] w-60 lg:px-11 x px-6 py-4 hover:bg-[#343434]">
            <Link
              to="/contact"
              className="text-white font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest"
            >
              GET A QUOTE
            </Link>
          </div>
          <div className="flex">
            <div>
              <IoCallOutline className="text-6xl my-3 text-[#0b2545]" />
            </div>
            <div className="py-4 px-1">
              <h1 className="font-bold font-[Syne] text-[14px] uppercase">
                Free Consultation
              </h1>
              <p className="text-[14px] font-[Syne]">+91 98402 456 987</p>
            </div>
          </div>
        </div>
      </div>
      <MobileNavbar className="xl:block" />
    </div>
  );
};

export default Navbar;
