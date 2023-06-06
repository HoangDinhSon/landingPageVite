import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function DetailBlockchainService(props: any) {
  const { leftParagrap, lisDetail } = props;

  const DetailBlockChain = ({
    rightHeader,
    detail,
  }: {
    rightHeader: string;
    detail: string;
  }) => {
    const [isDisplay, setIsDisPlay] = useState(false);
    const toggleDisplay = () => {
      setIsDisPlay(!isDisplay);
    };
    return (
      <div className="max-w-[550px] select-none my_transition">
        <h4 className="leading-8  md:text-[18px] cursor-pointer " onClick={toggleDisplay}>
          {isDisplay ? (
            <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
          ) : (
            <FontAwesomeIcon icon={faPlus} className="text-[#FF1C03] mr-4  " />
          )}
          {rightHeader}
        </h4>
        {isDisplay && (
          <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
            {detail}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="flex  pt-[30px] md:block md:pt-[17px] group">
      <h2 className="max-w-[340px] md:text-[28px]">{leftParagrap}</h2>
      <div>
        {lisDetail.map((element: any) => {
          return (
            <DetailBlockChain
              rightHeader={element.right}
              detail={element.detail}
              key={element.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DetailBlockchainService;
