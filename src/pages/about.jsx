import HomeSectionTwo from "../components/HomeSectionTwo";
import Profile from "../components/profile";

const About = () => {
  return (
    <div>
      <div className="block bg-[url('/back.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 pt-64 pb-60">
        <div className=" bg-[rgb(52,52,52)] opacity-50 -z-10 absolute top-0 left-0 h-full w-full"></div>
        <div className="text left-0 right-0 top-[50%] sm:top-[38%] com:top-[60px] mcom:top-[195px] font-[Syne] text-center translate-x-0 stroke-white opacity-10 -z-10 com:text-[200px] tv:text-[270px] absolute font-bold fill-transparent stroke-1 mcom:text-[150px] tab:text-[100px] sm:text-[70px]">
          About Us
        </div>
        <div className="w-full px-4 mx-auto">
          <h1 className="text-white mcom:text-[120px] text-[90px] text-center mt-0  mb-2 font-semibold font-[Syne] leading-[0.833]">
            My Profile
          </h1>
        </div>
      </div>
      <Profile />
      <HomeSectionTwo />
    </div>
  );
};

export default About;
