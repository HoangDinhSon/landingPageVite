interface iconType {
  publicEllipse: any;
  publicVectorOne: any;
  publicVectorSecond: any;
  privateClound: any;
  privateLock: any;
  hybridUp: any;
  hybridMidle: any;
  hybridDown: any;
}
type PropsApproaches = {
  ordinal: number;
  icon: iconType;
  header: string;
  paragrap: string;
};

function DetailBlockChain({
  ordinal,
  icon,
  header,
  paragrap,
}: PropsApproaches) {
  const IconDetailFirst = (props: any) => {
    const { icon, icon1, icon2 } = props;
    return (
      <div className="w-[98px] h-[98px] relative">
        <img src={icon} alt="" />
        <img src={icon1} alt="" className="top-5 left-4 absolute" />
        <img src={icon2} alt="" className="top-11 left-11 absolute" />
      </div>
    );
  };

  const IconDetailSecond = (props: any) => {
    const { privateCilcle, privateClound, privateLock } = props;
    return (
      <div className="w-[98px] h-[98px] relative">
        <img src={privateCilcle} alt="" />
        <img
          src={privateClound}
          alt=""
          className="top-5 left-[50%] -translate-x-[50%] absolute"
        />
        <img src={privateLock} alt="" className="top-11 left-[37px] absolute" />
      </div>
    );
  };

  const IconDetailThird = (props: any) => {
    const { hybridCicle, hybridUp, hybridMidle, hybridDown } = props;
    return (
      <div className="w-[98px] h-[98px] relative">
        <img src={hybridCicle} alt="" />
        <img
          src={hybridUp}
          alt=""
          className="absolute top-[21px] left-[50%] -translate-x-[50%]"
        />
        <img
          src={hybridMidle}
          alt=""
          className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]"
        />
        <img
          src={hybridDown}
          alt=""
          className="absolute bottom-[21px] left-[50%] -translate-x-[50%]"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center max-w-[343px] gap-[21px] sm:first:mt-0 sm:mt-[81px] ">
      {ordinal === 1 && (
        <IconDetailFirst
          icon={icon.publicEllipse}
          icon1={icon.publicVectorOne}
          icon2={icon.publicVectorSecond}
        />
      )}
      {ordinal === 2 && (
        <IconDetailSecond
          privateCilcle={icon.publicEllipse}
          privateClound={icon.privateClound}
          privateLock={icon.privateLock}
        />
      )}
      {ordinal === 3 && (
        <IconDetailThird
          hybridCicle={icon.publicEllipse}
          hybridUp={icon.hybridUp}
          hybridMidle={icon.hybridMidle}
          hybridDown={icon.hybridDown}
        />
      )}
      <h5 className="">{header}</h5>
      <p className="text-justify text-[18px]">{paragrap}</p>
    </div>
  );
}
export default DetailBlockChain;
