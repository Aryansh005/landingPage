import React from "react";
import { OUR_SERIVICES } from "../../constant/mapperConstant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurServiceCard = () => {
  const CalcResponsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    <div className="sm:hidden lg:block">
      <div className="flex justify-between flex-wrap w-[70%] mx-auto items-center mt-16">
        {OUR_SERIVICES.map((item, idx) => (
          <div className="mx-auto">
            <img src={item.src} width="300px" />
          </div>
        ))}
      </div>
      </div>
      <div className="lg:hidden">
      <Carousel
        responsive={CalcResponsive}
        autoPlay={true}
        autoPlaySpeed={1000}
        infinite={true}
      >
        {OUR_SERIVICES.map((item, idx) => (
        <div className="mx-auto">
          <img src={item.src} width="300px" />
        </div>
      ))}
      </Carousel>
      </div>
      
    </>
  );
};

function OurService() {
  return (
    <div className="mt-16">
      <p className="text-5xl font-extrabold text-center">
        OUR <span className="text-red-600">SERVICES</span>
      </p>
      <OurServiceCard />
    </div>
  );
}

export default OurService;
