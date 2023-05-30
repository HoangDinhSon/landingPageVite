import { publicEllipse, publicVectorOne, publicVectorSecond } from "../assets";
import {PropsApproaches} from "../../type"

function Approachestoblockchain() {
  const DetailBlockChain = ({
    icon,
    icon1,
    icon2,
    header,
    paragrap,
  }: PropsApproaches) => {
    return (
      <div className="flex flex-col items-center max-w-[343px] gap-[21px] ">
        <div className="w-[98px] h-[98px] relative">
          <img src={icon} alt="" />
          <img src={icon1} alt="" className="top-5 left-4 absolute" />
          <img src={icon2} alt=""   className="top-11 left-11 absolute"/>
        </div>
        <h5 className="">{header}</h5>
        <p className="text-justify text-[18px]">{paragrap}</p>
      </div>
    );
  };
  const ButtonTouch=()=>{
    return(
       <button className="w-[282px] h-[70px] rounded-[5px] bg-[#FF1C03] text-white text-[25px] font-bold mt-[61px] mb-[95px]">Get in Touch</button>
    )
  }


  return (
    <section className=" mt-[161px] bg-[#FAFAFA]">
      <div className="flex flex-col items-center">
        <h1>Approaches to Blockchain</h1>
        <h3 className="max-w-[1103px] text-center">
          Our world-class team, of course, suggests which Blockchain approach
          would best fit your business. But, we let you have the last word
          before we get things rolling for you. Here are the Blockchain
          approaches we think can transform your business.
        </h3>
        <div className="flex gap-[45px] mt-[47px] ">
          <DetailBlockChain
            icon={publicEllipse}
            icon1={publicVectorOne}
            icon2={publicVectorSecond}
            header="Public"
            paragrap="Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining."
          />
          <DetailBlockChain
            icon={publicEllipse}
            icon1={publicVectorOne}
            icon2={publicVectorSecond}
            header="Public"
            paragrap="Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining."
          />
          <DetailBlockChain
            icon={publicEllipse}
            icon1={publicVectorOne}
            icon2={publicVectorSecond}
            header="Public"
            paragrap="Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining."
          />
        </div>
        <ButtonTouch/>
      </div>
    </section>
  );
}

export default Approachestoblockchain;
