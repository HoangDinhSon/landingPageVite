import certification from "../assets/custom-Blockchain/certification.svg";
import FramBox from "../assets/custom-Blockchain/FrameBox.svg";
import {
  basaumuoi,
  aminsuarance,
  Aia,
  IAG,
  imageHaiBa,
  ocbc,
  prudential,
  pwc,
  uob,
} from "../assets";

function CustomBlockchain() {
  return (
    <section className="CustomBlockchain mt-[172px] w-full ">
      <div className="px-[162px] xl:px-8 ">

        <div className="flex ">
          <div className="lg:w-full  ">
            <h1 className="text-5xl font-bold uppercase sm:text-[35px]">
              Custom Blockchain Development Services
            </h1>
            <h3 className="text-[25px] lg:w-full  sm:text-[20px]">
              Expert Blockchain Development Services for Secure and
              Decentralized Blockchain Technology
            </h3>
            <div className="mt-9 lg:mt-16">
              <img src={certification} alt="" />
            </div>
          </div>
          <div className="  lg:hidden">
            <img src={FramBox} alt="" className=""/>
          </div>
        </div>

        <div className="flex flex-col items-center mt-[86px] lg:mt-[72px]">
          <h3 className="text-base text-center">
            Our clients include 150 Global Brands, Silicon Valley Founders
          </h3>
          <div className=" flex  gap-[60px] mt-[30px] md:hidden">
            <img src={aminsuarance} alt="" />
            <img src={uob} alt="" />
            <img src={IAG} alt="" />
            <img src={imageHaiBa} alt="" />
          </div>
          <div className="flex gap-[60px] mt-[34px] md:hidden">
            <img src={prudential} alt="" />
            <img src={pwc} alt="" />
            <img src={Aia} alt="" />
            <img src={ocbc} alt="" />
            <img src={basaumuoi} alt="" />
          </div>
          <div className="hidden overflow-scroll w-full  md:!flex md:gap-2 lg:mt-12">
            <img src={aminsuarance} alt="" />
            <img src={uob} alt="" />
            <img src={IAG} alt="" />
            <img src={imageHaiBa} alt="" />
            <img src={prudential} alt="" />
            <img src={pwc} alt="" />
            <img src={Aia} alt="" />
            <img src={ocbc} alt="" />
            <img src={basaumuoi} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomBlockchain;
