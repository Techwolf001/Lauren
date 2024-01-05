/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import HomeCarousel from "../components/HomeCarousel";
import HomeSection from "../components/HomeSection";
import Testimonial from "../components/Testimonial";

const ServicesNamesHome = [
  {
    id: 1,
    ImageSrc: "/gem1.jpeg",
    ImageAlt: "Gems Image",
    LinkTo: "/services/diamond-grading",
    Name: "Diamond Grading and Stone Identification",
  },
  {
    id: 2,
    ImageSrc: "/litigation-support.jpeg",
    ImageAlt: "Litigation Support",
    LinkTo: "/services/litigation-support",
    Name: "Litigation Support",
  },
  {
    id: 3,
    ImageSrc: "/estate-appraisal.jpeg",
    ImageAlt: "Estate Appraisals",
    LinkTo: "/services/estate-appraisals",
    Name: "Estate Appraisals",
  },
  {
    id: 4,
    ImageSrc: "/colour-stone-indentification.jpeg",
    ImageAlt: "Coloured Stone Identification",
    LinkTo: "/services/coloured-stone",
    Name: "Coloured Stone Identification",
  },
];

const Home = () => {
  return (
    <div className=" overflow-hidden block  ">
      <div>
        <HomeCarousel />
      </div>
      <div className="bg-white relative px-4 sm:px-1 mx-auto mt-[145px] pt-[120px] sm:mt-[50px]">
        <div className=" grid com:flex sm:grid-cols-1 com:justify-around pl-0 sm:pl-0 relative com:left-24 sm:left-0 bg-white shadow-sm border-b rounded-xl pb-40 mb-8 w-auto">
          <div className="mx-auto">
            <img
              src="/womanImg.png"
              alt="Woman Image"
              className="max-w-full h-auto"
            />
          </div>
          <div className=" basis-2/3 grow-0 shrink-0 relative top-32 items-center flex justify-start flex-col sm:left-1 sm:px-3">
            <h1 className="font-[600] com:text-[60px] sm:text-[36px] tab:text-5xl text-[#343434]">
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

      <div className="mcom:pt-36 pt-16 pb-16 px-0 block overflow-hidden">
        <div className="flex flex-wrap flex-row mx-auto">
          <div className="mx-auto gap-2 justify-center items-center flex flex-wrap">
            {ServicesNamesHome.map((ServicesNamesHome) => {
              const { ImageAlt, ImageSrc, LinkTo, Name } = ServicesNamesHome;
              return (
                <div className="flex flex-wrap flex-row cus1:-mx-4">
                  <div className="flex grow-0 shrink-0 mcom:basis-1/2 cus1:basis-2/6 relative mx-4 min-h-[1px] w-full px-4 hover:-translate-y-6 transition duration-1000 ease-in-out ">
                    <Link to={LinkTo}>
                      <div className="service_box_home">
                        <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                          <div>
                            <img
                              src={ImageSrc}
                              alt={ImageAlt}
                              className="w-full h-[300px] object-cover border-none align-middle"
                            />
                          </div>
                        </div>
                        <div className="py-6 px-8">
                          <h1 className="text-[#fff] text-lg transition-all ease-in-out font-[Syne] font-bold">
                            {Name}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <HomeSection />
      <Testimonial />
    </div>
  );
};

export default Home;
