import {
  aws,
  azure,
  docker,
  eckecr,
  gcp,
  Kubernetes,
  Ethereum,
  solona,
  tezos,
  polkadot,
  cardano,
  hyperledge,
  solonasohai,
  angular,
  golang,
  java,
  javascript,
  nodejs,
  reactjs,
} from "../assets";
import {} from "../assets";
import {} from "../assets";
import { IconForTechnology } from "./small-component";
function TechnologyStackWeUSe() {
  return (
    <section className="TechnologyStackWeUSe mt-[69px] w-full px-[162px] md:px-8 bgWhenScreenThan1441px ">
      <div className="text-center">
        <h1>Technology Stack We Use</h1>
        <h3 className="max-w-[923px] leading-[150%] mt-[5px] mx-auto sm:text-xl font-light">
          Our blockchain developers provide you the quality you need and the
          flexibility you want using the following tech stacks:
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-y-[51px] gap-x-[51px] mt-[61px] xl:block">
        {/* row 1 colum 1   */}
        <div className="">
          <p className="text-center">Cloud & Containerization</p>
          <div className="gap-4 flex mt-[20px] justify-center xl:mt-7 sm:flex-wrap sm:gap-x-10">
            <IconForTechnology img={aws} paragraph="AWS" />
            <IconForTechnology img={azure} paragraph="Azure" />
            <IconForTechnology img={gcp} paragraph="GCP" />
            <IconForTechnology img={docker} paragraph="Docker" />
            <IconForTechnology img={Kubernetes} paragraph="Kubernetes" />
            <IconForTechnology img={hyperledge} paragraph="ECK/ECR" />
          </div>
        </div>
        {/* row 1 cột 2  */}
        <div className="">
          <p className="text-center xl:mt-9 ">Platforms & Blockchains</p>
          <div className="gap-4 flex mt-[20px]  justify-center  sm:flex-wrap sm:gap-x-10">
            <IconForTechnology img={Ethereum} paragraph="Ethereum" />
            <IconForTechnology img={solona} paragraph="Solana" />
            <IconForTechnology img={tezos} paragraph="Tezos" />
            <IconForTechnology img={polkadot} paragraph="PolkaDot" />
            <IconForTechnology img={cardano} paragraph="Cardano" />
            <IconForTechnology img={eckecr} paragraph="Hyperledger" />
          </div>
        </div>
        {/*row 2 colum 1 */}
        <div className="">
          <p className="text-center xl:mt-9">Languages</p>
          <div className=" flex mt-[20px] justify-center xl:justify-center sm:flex-wrap ">
            <div className="flex gap-4 ">
              <IconForTechnology img={solonasohai} paragraph="Solana" />
              <IconForTechnology img={angular} paragraph="Angular" />
              <IconForTechnology img={golang} paragraph="GoLang" />
            </div>
            <div className="flex gap-4 sm:mt-4">
              <IconForTechnology img={java} paragraph="Java" />
              <IconForTechnology img={javascript} paragraph="Javascript" />
              <IconForTechnology img={nodejs} paragraph="node.js" />
              <IconForTechnology img={reactjs} paragraph="react.js " />
            </div>
          </div>
        </div>

        {/* row 2   colum 2  */}
        <div className="row-2-colum-2">
          <p className="text-center xl:mt-9 ">Standards we Follow</p>
          <div className="gap-2 flex mt-[20px] justify-center text-[14px]  xl:justify-center  sm:grid-cols-4 sm:grid">
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              ST20
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              EC20
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              ERC721
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              ERC1559
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              AML
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              KYC
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              GDPR
            </p>
            <p className="h-[63px] px-[4px] rounded-[5px] border border[#D7D7D7] leading-[63px] text-center">
              PSI DSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyStackWeUSe;
