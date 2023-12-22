import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className=" overflow-hidden block  ">
      <div className={`fixed top-0 right-0 z-[101]`}>
        <SideBar />
      </div>
      <div>
        <HomeCarousel />
      </div>
      <div className="bg-white relative px-4 sm:px-1 mx-auto mt-[145px] sm:mt-[50px]">
        <div className=" grid grid-cols-2 sm:grid-cols-1 pl-0 sm:pl-0 relative left-5 sm:left-0 bg-white shadow-sm border-b rounded-xl pb-40 mb-8 w-auto">
          <div className="">
            <img
              src="/womanImg.png"
              alt="Woman Image"
              className="max-w-full h-auto"
            />
          </div>
          <div className=" basis-2/3 relative top-32 -left-2 sm:left-1 sm:px-3">
            <h1 className="font-[600] text-[60px] sm:text-[36px] text-[#343434]">
              Lauren Angelo
            </h1>
            <p className="text-[20px] sm:text-[18px] font-[500] sm:py-5 sm:px-0 leading-[1.55] text-left sm:w-[85%] text-[#343434]">
              Lauren Angelo is an independent Gemologist and Jewelry appraiser
              with a passion for gemstones and jewelry. With over a 15 years of
              experience in the industry, she is highly skilled in evaluating
              and appraising a wide range of precious gems and jewellery pieces.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-[600] text-[60px] sm:text-[36px] text-center text-[#343434] pt-8 pb-16 ">
            What We Do
          </h2>
        </div>
      </div>
      <div className="px-0 pt-[145px] sm:pt-[10px] pb-[65px] overflow-hidden block">
        <div className="px-4 md:ml-44 ml-24">
          <div>
            <div className="gap-x-0 flex flex-wrap -mx-4 -ml-24 com:-ml-11">
              <div className="w-[300px] sm:w-[400px] h-[430px] px-4 hover:-translate-y-6 transition duration-1000  ease-in-out relative">
                <Link to="/services/diamond-grading">
                  <div className="service_box">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/gem1.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8">
                      <h1 className="text-[#343434] text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Diamond Grading and Stone Identification
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-[300px] sm:w-[400px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative">
                <Link to="/services/litigation-support">
                  <div className="service_box">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/litigation-support.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8">
                      <h1 className="text-[#343434] text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Litigation Support
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-[300px] sm:w-[400px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative">
                <Link to="/services/estate-appraisals">
                  <div className="service_box">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/estate-appraisal.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8">
                      <h1 className="text-[#343434] text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Estate Appraisals
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-[300px] sm:w-[400px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative">
                <Link to="/services/coloured-stone">
                  <div className="service_box ">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/colour-stone-indentification.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8">
                      <h1 className=" text-white text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Coloured Stone Identification
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container gap-x-0 flex flex-wrap -mx-4">
          <div className="max-w-[1200px]">
            <p className="font-[700] leading-[3px] text-[#0b2545] text-center pb-16 uppercase ">
              15+ years of experience in Gemology & Jewelery Appraisal
            </p>
            <h2 className="text-[80px] p-[15px 0 25px] text-center leading-[1.125] font-[600]">
              Get Expert Gems
              <br /> and Jewellery
              <br /> Appraisal
            </h2>
          </div>
          <div className=" relative right-0 left-[29rem] my-9 mb-32 bg-[#0b2545] w-64 lg:px-11 x px-6 py-4 hover:bg-[#343434]">
            <Link
              to="/contact"
              className="text-white uppercase font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest"
            >
              book appraisal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
