import { DetailBlockchainService } from "./small-component";
const DataForBlockChainDevelopService = [
  {
    id:1,
    leftParagrap: "Cryptocurrency & NFTs",
    lisDetail: [
      {
        right: "Cryptocurrency Development",
        detail: "Handoff your cryptocurrency development to our team of qualified engineers. Our team has real-world experience creating a range of crypto tokens, bitcoins, altcoins, NFTs, custom smart contracts, etc., with bank-level security features that help investors trade safely within a decentralized blockchain network.",
      },
      {
        right: "Crypto Wallets Development",
        detail: "detailRightSecond",
      },
      {
        right: "NFT Marketplace Development",
        detail: "detailrightThird",
      },
      {
        right: "Smart Contract Development",
        detail: "detailRightFourth",
      },
      {
        right: "ICO and IEO Development",
        detail: "detailRightFifth",
      },
    ],
  },
  {
    id:2,
    leftParagrap: "Decentralized Solutions",
    lisDetail: [
      {
        right: "Centralized / Decentralized Exchange Development",
        detail: "detailtRightFist123",
      },
      {
        right: "Hyperledger Solutions",
        detail: "detailRightSecond",
      },
      {
        right: "DeFi Solution Development",
        detail: "detailrightThird",
      },
      {
        right: "Decentralized App (dApp) Development",
        detail: "detailRightFourth",
      },
      {
        right: "ICO and IEO Development2",
        detail: "detailRightFifth",
      },
    ],
  },
  {
    id:3,
    leftParagrap: "Decentralized Solutions",
    lisDetail: [
      {
        right: "Centralized / Decentralized Exchange Development",
        detail: "detailtRightFist123",
      },
      {
        right: "Hyperledger Solutions",
        detail: "detailRightSecond",
      },
      {
        right: "DeFi Solution Development",
        detail: "detailrightThird",
      },
      {
        right: "Decentralized App (dApp) Development",
        detail: "detailRightFourth",
      },
      {
        right: "ICO and IEO Development2",
        detail: "detailRightFifth",
      },
    ],
  },

  

];
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
        {DataForBlockChainDevelopService.map((aService) => {
          return (
            <div key={aService.id}>
              <DetailBlockchainService
                leftParagrap={aService.leftParagrap}
                lisDetail={aService.lisDetail}
              />
              <hr className="w-full mt-8" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BlockChainDevelopService;
