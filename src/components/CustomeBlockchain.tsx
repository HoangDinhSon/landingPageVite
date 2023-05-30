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
    <section className="CustomBlockchain mt-[172px] ">
      <div className="px-[167px] xl:px-8 ">
        <div className="flex ">
          <div className="lg:w-full   lg:text-center">
            <h1 className="text-5xl font-bold uppercase sm:text-[35px]">
              Custom Blockchain Development Services
            </h1>
            <p className="text-[25px] lg:w-full lg:text-center sm:text-[20px]">
              Expert Blockchain Development Services for Secure and
              Decentralized Blockchain Technology
            </p>
            <div className="mt-9">
              <img src={certification} alt="" />
            </div>
          </div>
          <div className="h-[352px] w-[481px] lg:hidden">
            <img src={FramBox} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center  ">
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
          <div className=" hidden overflow-scroll w-full  md:block ">
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
