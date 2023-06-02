import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
function BlockChainDevelopService() {
  const DetailBlockchainService = (props: any) => {
    const {
      leftParagrap,
      isDisplayDetail,
      rightFirst,
      rightSecond,
      rightThird,
      rightFour,
      rightFifth,
    } = props;
    return (
      <div className="flex  pt-[32px] md:block md:pt-[17px] ">
        <h2 className="max-w-[340px] md:text-[28px]">{leftParagrap}</h2>
        <div>
          <div className="max-w-[550px]">
            <h4 className="leading-8  md:text-[18px]">
              {isDisplayDetail ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#666666] mr-4"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4  "
                />
              )}
              {rightFirst}
            </h4>
            {isDisplayDetail && (
              <p className="ml-[50px] mb-4 mt-2  md:text-[18px] ">
                Handoff your cryptocurrency development to our team of qualified
                engineers. Our team has real-world experience creating a range
                of crypto tokens, bitcoins, altcoins, NFTs, custom smart
                contracts, etc., with bank-level security features that help
                investors trade safely within a decentralized blockchain
                network.
              </p >
            )}
          </div>
          <div className="max-w-[550px]">
            <h4 className="leading-8   md:text-[18px]">
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
              {rightSecond}
            </h4>
          </div>
          <div className="max-w-[550px]">
            <h4 className="leading-8   md:text-[18px]">
              <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4 " />
              {rightThird}
            </h4>
          </div>
          <div className="max-w-[550px]">
            <h4 className="leading-8   md:text-[18px]">
              <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4 " />
              {rightFour}
            </h4>
          </div>
          <div className="max-w-[550px]  md:text-[18px]">
            <h4 className="leading-8 ">
              <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4 " />
              {rightFifth}
            </h4>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section className="BlockChainDevelopService mt-[136px] md:mt-8 bgWhenScreenThan1441px">
      <div className="px-[162px] lg:px-8">
        <h1 className="md:text-[35px]">Blockchain Development Services</h1>
        <h3 className="max-w-[936px] mb-8 md:text-xl md:mt-[29px] md:pb-[17px] ">
          We offer futuristic Blockchain development solutions to help clients
          grow in this thriving market. We provide services in areas like
        </h3>

        {/* Cryptocurrency & NFTs */}
        <DetailBlockchainService
          leftParagrap={"Cryptocurrency & NFTs"}
          isDisplayDetail={true}
          rightFirst={"Cryptocurrency Development"}
          rightSecond={"Crypto Wallets Development"}
          rightThird={"NFT Marketplace Development"}
          rightFour={"Smart Contract Development"}
          rightFifth={"ICO and IEO Development"}
        
        />
        <hr className="w-full mt-8" />
        {/* Decentralized Solutions */}
        <DetailBlockchainService
          leftParagrap={"Decentralized Solutions"}
          isDisplayDetail={false}
          rightFirst={"Centralized / Decentralized Exchange Development"}
          rightSecond={"Hyperledger Solutions"}
          rightThird={"DeFi Solution Development"}
          rightFour={"Decentralized App (dApp) Development"}
          rightFifth={"Decentralized App (dApp) Development"}
        />
        <hr className="w-full mt-8" />
        {/* Blockchain Solutions */}
        <DetailBlockchainService
          leftParagrap={"Blockchain Solutions"}
          isDisplayDetail={false}
          rightFirst={"Dedicated Blockchain Development"}
          rightSecond={"End-to-end Blockchain Development"}
          rightThird={"POC Development"}
          rightFour={"Blockchain Consultation"}
          rightFifth={"Blockchain Staff Augmentation"}
        />
      </div>
    </section>
  );
}

export default BlockChainDevelopService;
