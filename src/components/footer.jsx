import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[url('/footerbg.png')] h-[605px] pt-[115px] pb-[100px]">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="flex">
           <div className="max-w-[33.3333%] px-[15px] basis-2/6" >
              <div>
                <h1 className="text-[40px] text-white font-[Syne] mb-6 font-bold before:top-5 before:h-[2px] before:w-5 before:-left-10 before:content- ">
                    About Us
                </h1>
              </div>
              <div>
                <p className="w-full text-[#cdcdcd] leading-7 font-[Syne] text-base">     
                Lauren Angelo is an independent Gemologist and Jewelry appraiser with a passion for gemstones and jewelry. With over a 15 years of experience in the industry, she is highly skilled in evaluating and appraising a wide range of precious gems and jewellery pieces.                            
                </p>
              </div>
              <div>
                <Link to="/about" className="inline-block px-10 py-5 text-white border-2 mt-6 border-[#494949] bg-[#343434] text-sm tracking-[3px] font-[Syne] font-bold">Read More</Link>
              </div>
           </div>
           <div className="list-container">
           <div className="font-[Syne]">
                <h1>
                    Services
                </h1>
              </div>
              <div>
                <ul>
                  <li className="List">
                    Color Stone Identification
                  </li>
                  <li className="List">
                    Diamond grading and some identification
                  </li>
                  <li className="List">
                    Estate Appraisal
                  </li>
                  <li className="List">
                    Insurance Evauation/Appraisal
                  </li>
                  <li className="List">
                    Jewelry Insurance Appraisal                  
                  </li>
                  <li className="List">
                    Litigation Support
                  </li>
                  <li className="List">
                    Pre-purchase and quality verification

                  </li>
                  <li className="List">
                    Missing Jewelry Appraisals (Post Loss)
                  </li>
                  <li className="List">
                    Pre/Post Jewelry Purchase Consultation
                  </li>
                  <li className="List">
                    Report Verification
                  </li>
                </ul>
              </div>
           </div>
           <div>

           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
