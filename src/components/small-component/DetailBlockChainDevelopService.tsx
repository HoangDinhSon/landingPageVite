import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function DetailBlockchainService(props: any) {
  const { leftParagrap, lisDetail } = props;
  const [isDisplayFirst, setIsDisplayFirst] = useState(false);
  const [isDisplaySecond, setIsDisplaySecond] = useState(false);
  const [isDisplayThird , setIsDisplayThird]= useState(false);
  const [isDisplayFourth , setIsDisplayFourth]= useState(false);
  const [isDisplayFifth, setIsDisplayFifth]= useState(false);
  const togleDisplayfirst = () => {
    setIsDisplayFirst(!isDisplayFirst);
  };
  const togleDisplaySecond = () => {
    setIsDisplaySecond(!isDisplaySecond);
  };
  const togleDisplayThird = () => {
    setIsDisplayThird(!isDisplayThird);
  };
  const togleDisplayFourth = () => {
    setIsDisplayFourth(!isDisplayFourth);
  };
  const togleDisplayFifth = () => {
    setIsDisplayFifth(!isDisplayFifth);
  };

  return (
    <div className="flex  pt-[30px] md:block md:pt-[17px] group ">
      <h2 className="max-w-[340px] md:text-[28px]">{leftParagrap}</h2>
      <div>
        {/* first */}
        <div className="max-w-[550px] ">
          <h4 className="leading-8  md:text-[18px]" onClick={togleDisplayfirst}>
            {isDisplayFirst ? (
              <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
            )}
            {lisDetail[0].right}
          </h4>
          {isDisplayFirst && (
            <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
              {lisDetail[0].detail}
            </p>
          )}
        </div>
        {/* second */}
        <div className="max-w-[550px] ">
          <h4
            className="leading-8  md:text-[18px]"
            onClick={togleDisplaySecond}
          >
            {isDisplaySecond ? (
              <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
            )}
            {lisDetail[1].right}
          </h4>
          {isDisplaySecond && (
            <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
              {lisDetail[1].detail}
            </p>
          )}
        </div>
        {/* third */}
        <div className="max-w-[550px] ">
          <h4
            className="leading-8  md:text-[18px]"
            onClick={togleDisplayThird}
          >
            {isDisplayThird ? (
              <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
            )}
            {lisDetail[2].right}
          </h4>
          {isDisplayThird && (
            <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
              {lisDetail[2].detail}
            </p>
          )}
        </div>
        {/* fourth */}
        <div className="max-w-[550px] ">
          <h4
            className="leading-8  md:text-[18px]"
            onClick={togleDisplayFourth}
          >
            {isDisplayFourth ? (
              <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
            )}
            {lisDetail[3].right}
          </h4>
          {isDisplayFourth && (
            <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
              {lisDetail[3].detail}
            </p>
          )}
        </div>
        {/* fifth */}
        <div className="max-w-[550px] ">
          <h4
            className="leading-8  md:text-[18px]"
            onClick={togleDisplayFifth}
          >
            {isDisplayFifth ? (
              <FontAwesomeIcon icon={faXmark} className="text-[#666666] mr-4" />
            ) : (
              <FontAwesomeIcon
                icon={faPlus}
                className="text-[#FF1C03] mr-4  "
              />
            )}
            {lisDetail[4].right}
          </h4>
          {isDisplayFifth && (
            <p className="ml-[50px] max-w-[476px] mb-4 mt-2  md:text-[18px] ">
              {lisDetail[4].detail}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default DetailBlockchainService;
