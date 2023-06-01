import { aws, azure, docker, eckecr, gcp, Kubernetes } from "../assets";
import {
  Ethereum,
  solona,
  tezos,
  polkadot,
  cardano,
  hyperledge,
} from "../assets";
import {
  solonasohai,
  angular,
  golang,
  java,
  javascript,
  nodejs,
  reactjs,
} from "../assets";
import { props } from "../../type";
function TechnologyStackWeUSe() {
  const LogoAndDeail = ({ img, paragraph }: props) => {
    return (
      <div className="w-[52px] flex flex-col items-center">
        <img src={img} alt="" className="w-[52px] h-[52px]" />
        <p className="text-[13px]  text-center mt-[6px] ">
          {paragraph}
        </p>
      </div>
    );
  };
  return (
    <section className="TechnologyStackWeUSe mt-[69px] w-full px-[162px] sm:px-8 ">
      <div className="text-center">
        <h1 className="sm:text-[30px]">Technology Stack We Use</h1>
        <h3 className="max-w-[923px] mx-auto sm:text-xl font-light">
          Our blockchain developers provide you the quality you need and the
          flexibility you want using the following tech stacks:
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-y-[71px] gap-x-[51px] mt-[61px] xl:block">
        {/* cột 1  */}
        <div className="">
          <p className="text-center">Cloud & Containerization</p>
          <div className="gap-4 flex mt-[20px] justify-center xl:mt-7 sm:flex-wrap sm:gap-x-10">
            <LogoAndDeail img={aws} paragraph="AWS" />
            <LogoAndDeail img={azure} paragraph="Azure" />
            <LogoAndDeail img={gcp} paragraph="GCP" />
            <LogoAndDeail img={docker} paragraph="Docker" />
            <LogoAndDeail img={Kubernetes} paragraph="Kubernetes" />
            <LogoAndDeail img={hyperledge} paragraph="ECK/ECR" />
          </div>
        </div>
        {/* row 1 cột 2  */}
        <div className="">
          <p className="text-center xl:mt-9 ">Platforms & Blockchains</p>
          <div className="gap-4 flex mt-[20px]  justify-center  sm:flex-wrap sm:gap-x-10">
            <LogoAndDeail img={Ethereum} paragraph="Ethereum" />
            <LogoAndDeail img={solona} paragraph="Solana" />
            <LogoAndDeail img={tezos} paragraph="Tezos" />
            <LogoAndDeail img={polkadot} paragraph="PolkaDot" />
            <LogoAndDeail img={cardano} paragraph="Cardano" />
            <LogoAndDeail img={eckecr} paragraph="Hyperledger" />
          </div>
        </div>
        {/*row 2 colum 1 */}
        <div className="">
          <p className="text-center xl: mt-9">Languages</p>
          <div className="gap-4 flex mt-[20px] justify-between xl:justify-center sm:flex-wrap-reverse ">
            <LogoAndDeail img={solonasohai} paragraph="Solana" />
            <LogoAndDeail img={angular} paragraph="Angular" />
            <LogoAndDeail img={golang} paragraph="GoLang" />
            <LogoAndDeail img={java} paragraph="Java" />
            <LogoAndDeail img={javascript} paragraph="Javascript" />
            <LogoAndDeail img={nodejs} paragraph="node.js" />
            <LogoAndDeail img={reactjs} paragraph="react.js " />
          </div>
        </div>

        {/* cột 2 dòng 2   */}
        <div className="">
          <p className="text-center xl: mt-9 ">Standards we Follow</p>
          <div className="gap-1 flex mt-[20px] justify-between text-[14px]  xl:justify-center  sm:flex-wrap-reverse">
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
