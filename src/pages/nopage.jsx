import { Link } from "react-router-dom";

const Nopage = () => {
  return (
    <div>
      <div className="block bg-[url('/back.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 pt-64 pb-60">
        <div className="bg-[rgb(52,52,52)] opacity-50 -z-10 absolute top-0 left-0 h-full w-full"></div>
        <div className="text left-0 right-0 top-[50%] sm:top-[38%] com:top-[50px] mcom:top-[195px] font-[Syne] text-center translate-x-0 stroke-white opacity-10 -z-10 com:text-[300px] absolute font-bold fill-transparent stroke-1 mcom:text-[150px] tab:text-[100px] sm:text-[90px]">
          Error
        </div>
        <div className="w-full px-4 mx-auto max-w-[1200px]  ">
          <h1 className="text-white mcom:text-[120px] text-[90px] text-center mt-0  mb-2 font-semibold font-[Syne] leading-[0.833]">
            404 NOT FOUND
          </h1>
        </div>
      </div>
      <div className="pt-[145px] pb-32 mcom:px-40  overflow-hidden block">
        <div className="px-4 flex items-center justify-center  mx-auto">
          <div className="mb-8 pb-5  relative">
            <h2 className="text-5xl font-semibold uppercase">PAGE NOT FOUND</h2>
          </div>
          <div className=" mt-5 mr-7 relative right-12 mb-5 ml-0 bg-[#0b2545] w-48 lg:px-11 px-6 py-4 hover:bg-[#343434]">
            <Link
              to="/"
              className="text-white text-center items-center justify-center flex font-bold font-[Syne] text-sm max-[1303px]:text-xs tracking-widest"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nopage;
