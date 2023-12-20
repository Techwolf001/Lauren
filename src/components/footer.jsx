import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('/footerbg.png')] h-[550px] pt-[115px] pb-[100px]">
        <div className="max-w-[1200px] w-full mx-auto px-4">
          <div className="flex">
            <div className="max-w-[33.3333%] px-[15px] basis-2/6">
              <div>
                <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 before:content- ">
                  About Us
                </h1>
              </div>
              <div>
                <p className="w-full text-[#cdcdcd] leading-7 font-[Syne] text-base">
                  Lauren Angelo is an independent Gemologist and Jewelry
                  appraiser with a passion for gemstones and jewelry. With over
                  a 15 years of experience in the industry, she is highly
                  skilled in evaluating and appraising a wide range of precious
                  gems and jewellery pieces.
                </p>
              </div>
              <div>
                <Link
                  to="/about"
                  className="inline-block px-10 py-5 text-white border-2 mt-6 border-[#494949] bg-[#343434] text-sm tracking-[3px] font-[Syne] font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="list-container">
              <div className="font-[Syne]">
                <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 before:content- ">
                  Services
                </h1>
              </div>
              <div>
                <ul className="grid grid-cols-2">
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Color Stone Identification
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Diamond grading and stone <br />
                    identification
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Estate Appraisal
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Insurance Evauation/Appraisal
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Jewelry Insurance Appraisal
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Litigation Support
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Pre-purchase and quality <br />
                    verification
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Missing Jewelry Appraisals
                    <br /> (Post Loss)
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Pre/Post Jewelry Purchase
                    <br /> Consultation
                  </li>
                  <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                    Report Verification
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[33.3333%] px-[15px] basis-2/6">
              <div>
                <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 before:content- ">
                  Find Us
                </h1>
              </div>
              <div>map</div>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Footer;
