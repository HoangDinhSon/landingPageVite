import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";

function DetailBlockchainService(props: any) {
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
    <div className="flex  pt-[30px] md:block md:pt-[17px] group ">
      <h2 className="max-w-[340px] md:text-[28px]">{leftParagrap}</h2>
      <div>
        <div className="max-w-[550px]">
          <h4 className="leading-8  md:text-[18px]">
            {isDisplayDetail ? (
              <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
            )}
            {rightFirst}
          </h4>
          {isDisplayDetail && (
            <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
              Handoff your cryptocurrency development to our team of qualified
              engineers. Our team has real-world experience creating a range of
              crypto tokens, bitcoins, altcoins, NFTs, custom smart contracts,
              etc., with bank-level security features that help investors trade
              safely within a decentralized blockchain network.
            </p>
          )}
        </div>
        <div className="max-w-[550px]">
          <h4 className="leading-7   md:text-[18px]">
            <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4  " />
            {rightSecond}
          </h4>
        </div>
        <div className="max-w-[550px]">
          <h4 className="leading-7   md:text-[18px]">
            <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4 " />
            {rightThird}
          </h4>
        </div>
        <div className="max-w-[550px]">
          <h4 className="leading-7   md:text-[18px]">
            <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4 " />
            {rightFour}
          </h4>
        </div>
        <div className="max-w-[550px]  md:text-[18px] group-[:nth-of-type(2)]:hidden">
          <h4 className="leading-7 ">
            <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4 " />
            {rightFifth}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default DetailBlockchainService;
