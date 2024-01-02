import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import HomeSection from "../components/HomeSection";

const Home = () => {
  return (
    <div className=" overflow-hidden block  ">
      <div>
        <HomeCarousel />
      </div>
      <div className="bg-white relative px-4 sm:px-1 mx-auto mt-[145px] sm:mt-[50px]">
        <div className=" grid com:flex sm:grid-cols-1 pl-0 sm:pl-0 relative com:left-24 sm:left-0 bg-white shadow-sm border-b rounded-xl pb-40 mb-8 w-auto">
          <div className="">
            <img
              src="/womanImg.png"
              alt="Woman Image"
              className="max-w-full h-auto"
            />
          </div>
          <div className=" basis-2/3 relative top-32 -left-2 sm:left-1 sm:px-3">
            <h1 className="font-[600] com:text-[60px] sm:text-[36px] text-[#343434]">
              Lauren Angelo
            </h1>
            <p className="com:text-[20px] sm:text-[18px] font-[500] sm:py-5 sm:px-0 leading-[1.55] text-left com:w-[55%] sm:w-[85%] text-[#343434]">
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
            <div className="gap-x-0 flex flex-wrap -mx-4 -ml-24 com:-ml-11 com:pb-48">
              <div className="w-[300px] h-[430px] px-4 hover:-translate-y-6 transition duration-1000  ease-in-out relative sm:ml-9 ">
                <Link to="/services/diamond-grading">
                  <div className="service_box_home">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/gem1.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8 bg-[#343434]">
                      <h1 className="text-white text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Diamond Grading and Stone Identification
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-[300px] h-[430px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative sm:ml-9">
                <Link to="/services/litigation-support">
                  <div className="service_box_home">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/litigation-support.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8 bg-[#343434]">
                      <h1 className="text-white text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Litigation Support
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-[300px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative sm:ml-9">
                <Link to="/services/estate-appraisals">
                  <div className="service_box_home">
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
                      <h1 className="text-white text-lg transition-all ease-in-out font-[Syne] font-bold">
                        Estate Appraisals
                      </h1>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-[300px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative sm:ml-9">
                <Link to="/services/coloured-stone">
                  <div className="service_box_home">
                    <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                      <div>
                        <img
                          src="/colour-stone-indentification.jpeg"
                          alt=""
                          className="w-full h-[300px] object-cover border-none align-middle"
                        />
                      </div>
                    </div>
                    <div className="py-6 px-8 bg-[#343434]">
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
      <HomeSection />
    </div>
  );
};

export default Home;
