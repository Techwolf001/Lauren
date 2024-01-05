import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="pb-32 pt-0 px-0 overflow-hidden block">
      <div className="">
        <div className="max-w-[900px] my-0 mx-auto text-center">
          {/* <p className="font-[700] com:leading-[3px] sm:w-[69%] sm:leading-[23px] text-[#0b2545] text-[22px] sm:text-[19px] text-center pb-12 uppercase "> */}
          <p className="mb-0 font-bold text-[#0b2545] pb-3 uppercase mt-0 text-center">
            15+ years of experience in Gemology & Jewelery Appraisal
          </p>
          <h2 className="com:text-[100px] sm:text-[40px] tab:text-[60px] text-[#343434]  pb-[25px] px-0 text-center leading-[1.125] font-[600]">
            Get Expert Gems and Jewellery Appraisal
          </h2>
          <div className=" grid-flow-col justify-center items-center right-0 text-center my-9 mb-32 bg-[#0b2545] w-72 mx-auto px-6 py-4">
            <ul className="m-0 p-0 ">
              <li className="ButtonList">
                <Link
                  to="/contact"
                  className="text-white py-5 px-9 transition-all duration-300 ease-in-out delay-0    uppercase font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest text-center relative "
                >
                  book appraisal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
