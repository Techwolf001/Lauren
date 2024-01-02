import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  return (
    <div>
      <div className="bg-[#222222] w-full h-auto px-4 py-7 grid grid-cols-3">
        <ul className="flex">
          <li className="border-2 border-[#393939] p-5 h-16 w-16 hover:bg-[#c6ac82] duration-300 hover:border-[#c6ac82] mr-3">
            <Link to={""}>
              <FaFacebookF className="text-white items-center flex justify-center" />
            </Link>
          </li>
          <li className="border-2 border-[#393939] p-5 h-16 w-16 hover:bg-[#c6ac82] duration-300 hover:border-[#c6ac82] mr-3">
            <Link to={""}>
              <BsTwitterX className="text-white items-center flex justify-center" />
            </Link>
          </li>
          <li className="border-2 border-[#393939] p-5 h-16 w-16 hover:bg-[#c6ac82] duration-300 hover:border-[#c6ac82] mr-3">
            <Link to={""}>
              <FaLinkedin className="text-white items-center flex justify-center" />
            </Link>
          </li>
          <li className="border-2 border-[#393939] p-5 h-16 w-16 hover:bg-[#c6ac82] duration-300 hover:border-[#c6ac82] mr-3">
            <Link to={""}>
              <FaWhatsapp className="text-white items-center flex justify-center" />
            </Link>
          </li>
        </ul>
        <div className="">
          <Link to="/">
            <img src="/logo2.png" className="w-[250px]" alt="Logo Image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
