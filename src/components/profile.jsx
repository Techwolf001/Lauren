const Profile = () => {
  return (
    <div className="pt-[145px] pb-[50px] px-0 overflow-hidden block">
      <div className="px-4 mx-auto ">
        <div className="pl-20 ">
          <div className="flex flex-wrap mx-24 mcom:mx-16 tab:mx-8 sm:mx-4">
            <div className="flex flex-col -mx-4">
              <div>
                <h1 className="font-semibold text-6xl">LAUREN ANGELO</h1>
              </div>
              <div className="font-medium text-xl pt-8 pb-6 px-0">
                GIA Certified Gemologist and Jewellery Appraisal Professional
                with over 20 years of experience.
              </div>
            </div>
            <div className="mcom:flex block">
              <div className="basis-2/6 shrink-0 grow-0 max-w-[33.3333%] w-full relative min-h-[1] px-4">
                <img
                  src="/womanImg.png"
                  alt="Woman image"
                  className="max-w-full h-auto align-middle border-none rounded-[10px]"
                />
              </div>
              <div className="basis-2/3 grow-0 shrink-0 max-w-[66.66667%] relative w-full px-4">
                <div className="">
                  <div className="m-auto p-4">
                    <div>
                      <p className="text-[17px] leading-8 mt-0 mb-4">
                        Lauren Angelo is a highly skilled Independent Gemologist
                        and Jewellery Appraiser with years of experience in the
                        industry. With a strong background in gemology and an
                        unwavering commitment to quality, she provides
                        comprehensive appraisals and evaluations of fine
                        jewellery pieces for clients around the world.
                      </p>
                      <p className="text-[17px] leading-8 mt-0 mb-4">
                        Lauren’s expertise lies in the identification, grading,
                        and valuation of precious gemstones and diamonds, as
                        well as antique and modern jewellery. She has an eye for
                        detail and a deep understanding of the industry, which
                        allows her to provide accurate and detailed reports that
                        are trusted by insurance companies, lawyers, and private
                        clients alike.
                      </p>
                      <p className="text-[17px] leading-8 mt-0 mb-4">
                        In addition to her appraisal services, Lauren also
                        offers consulting services to individuals and businesses
                        looking to purchase or sell jewellery. Her extensive
                        knowledge of the market and industry trends allows her
                        to provide invaluable advice to her clients, ensuring
                        that they make informed decisions.
                      </p>
                      <p className="text-[17px] leading-8 mt-0 mb-4">
                        Lauren is dedicated to continuing her education and
                        staying up-to-date with the latest advancements in the
                        field. She holds a degree in Gemology from the
                        Gemological Institute of America (GIA) and is a member
                        of the National Association of Jewelry Appraisers
                        (NAJA).
                      </p>
                      <p className="text-[17px] leading-8 mt-0 mb-4">
                        With her expertise, attention to detail, and commitment
                        to quality, Lauren is a trusted and sought-after
                        Independent Gemologist and Jewellery Appraiser.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl mb-4 font-normal leading-5 mt-0">
                    EDUCATION
                  </h3>
                  <ul className="mb-4 mt-0">
                    <li className="mb-6 list-disc ml-8">
                      <strong>GEMOLOGICAL INSTITUTE OF AMERICA (GIA) – </strong>
                      Graduate Gemologist (GG), 2000
                    </li>
                    <li className="mb-6 list-disc ml-8">
                      <strong>AMERICAN GEM SOCIETY (AGS) – </strong>Certified
                      Gemologist Appraiser (CGA), 2007
                    </li>
                  </ul>
                  <h3 className="text-3xl mb-4 font-normal leading-5 mt-0">
                    ACTIVITIES AND PROFESSIONAL COURSE
                  </h3>
                  <ul>
                    <li className="mb-6 list-disc ml-8">
                      <strong>
                        ACCREDITED GEMOLOGISTS ASSOCIATION (AGA) –{" "}
                      </strong>
                      Voting Member
                    </li>
                    <li className="mb-6 list-disc ml-8">
                      <strong>AMERICAN SOCIETY OF APPRAISERS (ASA) – </strong>
                      Affiliate Member
                    </li>
                    <li className="mb-6 list-disc ml-8">
                      <strong>AMERICAN GEM SOCIETY (AGS) – </strong>Gemology
                      Courses
                    </li>
                    <li className="mb-6 list-disc ml-8">
                      <strong>INTERNATIONAL SOCIETY OF APPRAISERS – </strong>
                      Affiliate Member
                    </li>
                    <li className="mb-6 list-disc ml-8">
                      <strong>APPRAISERS ASSOCIATION – </strong>Affiliate Member
                    </li>
                    <li className="mb-6 list-disc ml-8">
                      <strong>
                        CULTURED PEARL ASSOCIATION OF AMERICA (CPAA) –{" "}
                      </strong>
                      Pearl Course 2017
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
