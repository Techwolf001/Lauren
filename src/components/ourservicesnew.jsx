/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import ServiceNames from "../pages/services";

const OurServicesNew = () => {
  return (
    <div className="pt-36 pb-16 px-0 block overflow-hidden">
      <div className="flex flex-wrap flex-row mx-auto">
        <div className="mx-auto gap-2 justify-center items-center flex flex-wrap">
          {ServiceNames.map((ServiceNames) => {
            const { ImageAlt, ImageSrc, LinkTo, Name } = ServiceNames;
            return (
              <div className="flex flex-wrap flex-row cus1:-mx-4">
                <div className="flex grow-0 shrink-0 mcom:basis-1/2 cus1:basis-2/6 relative mx-4 min-h-[1px] w-full px-4 hover:-translate-y-6 transition duration-1000 ease-in-out ">
                  <Link to={LinkTo}>
                    <div className="service_box">
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
                        <h1 className="text-[#343434] text-lg transition-all ease-in-out font-[Syne] font-bold">
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
  );
};

export default OurServicesNew;
