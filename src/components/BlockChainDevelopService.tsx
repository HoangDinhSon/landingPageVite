import { DetailBlockchainService } from "./small-component";
function BlockChainDevelopService() {
  return (
    <section className="BlockChainDevelopService mt-[136px] md:mt-8 bgWhenScreenThan1441px">
      <div className="px-[162px] lg:px-8">
        <h1 className="md:text-[35px]">Blockchain Development Services</h1>
        <h3 className="max-w-[936px] mb-[38px] md:text-xl md:mt-[29px] md:pb-[17px] leading-[150%]">
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
