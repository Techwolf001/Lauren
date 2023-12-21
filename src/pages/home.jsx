import { Link } from "react-router-dom"
import HomeCarousel from "../components/HomeCarousel"

const Home = () => {
  return (
    <div className=" overflow-hidden block  ">
      <div >
        <HomeCarousel />
      </div>
      <div className="bg-white relative px-4 mx-auto ">
          <div className=" flex pl-10 relative left-20 bg-white shadow-xl border-b rounded-xl pb-40 mb-8">
            <div className="basis-2/6">
              <img src="/womanImg.png" alt="Woman Image" className="max-w-full h-auto"/>
            </div>
            <div className=" basis-2/3">
              <h1 className="font-[600] text-[60px]">
                LAUREN ANGELO
              </h1>
              <p className="text-[20px] font-[500]">
                Lauren Angelo is an independent Gemologist and<br/> 
                Jewelry appraiser with a passion for gemstones and<br/> 
                jewelry. With over a 15 years of experience in the industry,<br/> 
                she is highly skilled in evaluating and appraising a wide <br/>
                range of precious gems and jewellery pieces.
              </p>
            </div>
        </div>
        <div>
          <h2 className="font-[600] text-[60px] text-center pt-8 pb-16 ">What We Do</h2>
        </div>
      </div>
      <div className="px-0 pt-[145px] pb-[65px] overflow-hidden block">
        <div className="container px-4 md:ml-44 ml-24">
            <div>
                <div className="container gap-x-0 flex flex-wrap -mx-4">
                   <div className="w-[300px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000  ease-in-out relative">
                    
                    <Link to="/services/diamond-grading">
                      <div className="service_box_home">
                        <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                          <div>
                            <img src="/gem1.jpeg" alt="" className="w-full h-[300px] object-cover border-none align-middle"/>
                          </div>
                        </div>
                        <div className="py-6 px-8">
                          <h1 className="text-white text-lg transition-all ease-in-out font-[Syne] font-bold">
                            Diamond Grading and Stone Identification
                          </h1>
                        </div>
                      </div>
                      </Link>
                   </div>
                   <div className="w-[300px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative">
                    <Link to="/services/litigation-support">
                      <div className="service_box_home">
                        <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                          <div>
                            <img src="/litigation-support.jpeg" alt="" className="w-full h-[300px] object-cover border-none align-middle"/>
                          </div>
                        </div>
                        <div className="py-6 px-8">
                          <h1 className="text-white text-lg transition-all ease-in-out font-[Syne] font-bold">
                            Litigation Support
                          </h1>
                        </div>
                      </div>
                      </Link>
                   </div>
                   <div className="w-[300px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative">
                    <Link to="/services/estate-appraisals">
                      <div className="service_box_home">
                        <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                          <div>
                            <img src="/estate-appraisal.jpeg" alt="" className="w-full h-[300px] object-cover border-none align-middle"/>
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
                   <div className="w-[300px] h-[430px] min-h-[1px] px-4 hover:-translate-y-6 transition duration-1000 ease-in-out relative">
                    <Link to="/services/coloured-stone">
                      <div className="service_box_home ">
                        <div className="relative max-w-full overflow-hidden rounded-br-3xl ">
                          <div>
                            <img src="/colour-stone-indentification.jpeg" alt="" className="w-full h-[300px] object-cover border-none align-middle"/>
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
      <div className="container items-center gap-x-0 -mx-4 align-middle">
        <div className="container">
          <p className="font-[700] leading-[3px] text-[#0b2545] text-center pb-16 uppercase ">
              15+ years of experience in Gemology & Jewelery Appraisal 
          </p>
          <h2 className="text-[80px] p-[15px 0 25px] text-center leading-[1.125] font-[600]">Get Expert Gems<br/> and Jewellery<br/> Appraisal</h2>
        </div>
        <div className="container relative justify-center items-center flex my-9 mb-32 bg-[#0b2545] w-64 lg:px-11 x px-6 py-4 hover:bg-[#343434] ">
          <Link to="/contact" className="text-white uppercase  font-bold  justify-center font-[Syne] text-sm max-[1303px]:text-xs tracking-widest">
              book appraisal
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
