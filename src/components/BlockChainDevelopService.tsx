import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
function BlockChainDevelopService() {
  return (
    <section className="BlockChainDevelopService mt-[136px] ">
      <div className="px-[164px] ">
        <h1>Blockchain Development Services</h1>
        <h3 className="max-w-[936px] ">
          We offer futuristic Blockchain development solutions to help clients
          grow in this thriving market. We provide services in areas like
        </h3>

        {/* Cryptocurrency & NFTs */}
        <div className="flex  mt-[68px]">
          <h2 className="max-w-[340px]">Cryptocurrency & NFTs</h2>
          <div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[#666666] mr-4"
                />
                Cryptocurrency Development
              </h4>
              <p className="ml-[50px] ">
                Handoff your cryptocurrency development to our team of qualified
                engineers. Our team has real-world experience creating a range
                of crypto tokens, bitcoins, altcoins, NFTs, custom smart
                contracts, etc., with bank-level security features that help
                investors trade safely within a decentralized blockchain
                network.
              </p>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4  "
                />
                NFT Marketplace Development
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                Smart Contract Development
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                ICO and IEO Development
              </h4>
            </div>
          </div>
        </div>
        <hr className="w-full mt-8" />
        {/* Decentralized Solutions */}
        <div className="flex  mt-8">
          <h2 className="max-w-[340px]">Decentralized Solutions</h2>
          <div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4  "
                />
                Centralized / Decentralized Exchange Development
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                Hyperledger Solutions
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                DeFi Solution Development
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                Decentralized App (dApp) Development
              </h4>
            </div>
          </div>
        </div>
        <hr className="w-full mt-8" />
        {/* Blockchain Solutions */}
        <div className="flex  mt-8">
          <h2 className="max-w-[340px]">Blockchain Solutions</h2>
          <div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4  "
                />
                Dedicated Blockchain Development
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                End-to-end Blockchain Development
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                POC Development
              </h4>
            </div>

            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                Blockchain Consultation
              </h4>
            </div>
            <div className="max-w-[476px]">
              <h4 className="leading-8 h-8">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="text-[#FF1C03] mr-4 "
                />
                Blockchain Staff Augmentation
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlockChainDevelopService;
