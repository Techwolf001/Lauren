import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="bg-[url('/footerbg.png')] h-[550px] pt-[50px] relative mcom:pt-[115px] pb-[100px] ">
          <div className="max-w-[1200px] w-full mx-auto px-4">
            <div className="block com:flex">
              <div className="com:max-w-[33.3333%] px-[15px] com:basis-2/6">
                <div>
                  <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 before:content- ">
                    About Us
                  </h1>
                </div>
                <div>
                  <p className="w-full text-[#cdcdcd] leading-7 font-[Syne] text-base">
                    Lauren Angelo is an independent Gemologist and Jewelry
                    appraiser with a passion for gemstones and jewelry. With
                    over a 15 years of experience in the industry, she is highly
                    skilled in evaluating and appraising a wide range of
                    precious gems and jewellery pieces.
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
              <div className="list-container hidden com:block">
                <div className="font-[Syne]">
                  <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 before:content- ">
                    Services
                  </h1>
                </div>
                <div>
                  <ul className="grid grid-cols-2">
                    <Link to="/services/coloured-stone">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Coloured Stone Identification
                      </li>
                    </Link>

                    <Link to="/services/diamond-grading">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Diamond grading and stone <br />
                        identification
                      </li>
                    </Link>
                    <Link to="/services/estate-appraisal">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Estate Appraisal
                      </li>
                    </Link>
                    <Link to="">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Insurance Evauation/Appraisal
                      </li>
                    </Link>
                    <Link to="/services/jewelry-insurance">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Jewelry Insurance Appraisal
                      </li>
                    </Link>
                    <Link to="/services/litigation-support">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Litigation Support
                      </li>
                    </Link>
                    <Link to="/services/pre-purchase">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Pre-purchase and quality <br />
                        verification
                      </li>
                    </Link>
                    <Link to="/services/jewelry-appraisals">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Missing Jewelry Appraisals
                        <br /> (Post Loss)
                      </li>
                    </Link>
                    <Link to="/services/jewelry-purchase">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Pre/Post Jewelry Purchase
                        <br /> Consultation
                      </li>
                    </Link>
                    <Link to="/services/report-verification">
                      <li className="List w-full text-[#cdcdcd] leading-7 font-[Syne] text-base px-2 py-1 cursor-pointer duration-500">
                        Report Verification
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="max-w-[33.3333%] px-[15px] basis-2/6 ">
                <div className="">
                  <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 sm:w-[190%] before:content- ">
                    Find Us
                  </h1>
                </div>
                <div>map</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#222222] w-full h-auto px-6 py-7 cus1:grid cus1:grid-cols-3 flex flex-col justify-center items-center">
          <ul className="flex my-5">
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
          <div className="my-5">
            <Link to="/">
              <img src="/logo2.png" className="w-[250px]" alt="Logo Image" />
            </Link>
          </div>
          <div>
            <p className="text-white">
              <span>Copyright By</span>
              <span>
                {" "}
                © {new Date().getFullYear()}
                <span className="font-bold">
                  <Link to="/"> Lauren Angelo Gems</Link>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
