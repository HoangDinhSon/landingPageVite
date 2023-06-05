import {
  publicEllipse,
  publicVectorOne,
  publicVectorSecond,
  privateClound,
  privateLock,
  hybridUp,
  hybridMidle,
  hybridDown,
} from "../assets";
import {ButtonTouch,DetailBlockChain} from "./small-component";
function Approachestoblockchain() {
  const icon = {
    publicEllipse:publicEllipse,
    publicVectorOne:publicVectorOne,
    publicVectorSecond:publicVectorSecond,
    privateClound:privateClound,
    privateLock:privateLock,
    hybridUp:hybridUp,
    hybridMidle:hybridMidle,
    hybridDown:hybridDown,
  }
  return (
    <section className=" mt-[153px] bg-[#FAFAFA] pt-[84px] sm:mt-9 sm:pt-[57px]">
      <div className="flex flex-col items-center">
        <h1 className=" sm:text-center">
          Approaches to Blockchain
        </h1>
        <h3 className="max-w-[1103px] leading-[150%] text-center sm:text-xl sm:text-center sm:mt-8">
          Our world-class team, of course, suggests which Blockchain approach
          would best fit your business. But, we let you have the last word
          before we get things rolling for you. Here are the Blockchain
          approaches we think can transform your business.
        </h3>
        <div className="flex gap-[45px] mt-[47px] md:block">
          <DetailBlockChain
            ordinal={1}
            icon={icon}
            header="Public"
            paragrap="Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining."
          />
          <DetailBlockChain
            ordinal={2}
            icon={icon}
            header="Private"
            paragrap="Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining."
          />
          <DetailBlockChain
            ordinal={3}
            icon={icon}
            header="Hybrid"
            paragrap="Permission-less and non-restrictive, public blockchains work best when maintaining large user bases where any member of the shared network can verify records, do proof-of-work, or engage in mining."
          />
        </div>
        <ButtonTouch />
      </div>
    </section>
  );
}

export default Approachestoblockchain;
