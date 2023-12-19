import FaqBody from "../components/FaqBody"

const Faqs = () => {
    return (
      <div>
        <div className="block bg-[url('/back.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 lg:pt-64 lg:pb-60 sm:pt-36 sm:pb-40">
          <div className="bg-[rgb(52,52,52)] opacity-50 -z-10 absolute top-0 left-0 h-full w-full"></div>
          <div className="text left-0 right-0 top-[50px] font-[Syne] text-center translate-x-0 stroke-white opacity-10 -z-10 md:text-8xl sm:text-6xl lg:text-[300px] absolute font-bold fill-transparent stroke-1">
            FAQS
          </div>
          <div className="w-full px-4 mx-auto max-w-[1200px] container">
            <h1 className="text-white text-[120px] text-center mt-0  mb-2 font-semibold font-[Syne] leading-[0.833]">
              FAQS
            </h1>
          </div>
        </div>
        <FaqBody />
      </div>
    )
  }
  
  export default Faqs
  