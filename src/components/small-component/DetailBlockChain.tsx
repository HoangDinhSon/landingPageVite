type PropsApproaches = {
  icon: any;
  header: string;
  paragrap: string;
};
function DetailBlockChain({ icon, header, paragrap }: PropsApproaches) {
  const IconDetail = (props: any) => {
    const { icon } = props;
    return (
      <div className="w-[98px] h-[98px] relative">
        <img src={icon} alt="" />
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center max-w-[343px] gap-[21px]  ">
      <IconDetail icon={icon} />
      <h5 className="">{header}</h5>
      <p className="text-justify text-[18px]">{paragrap}</p>
    </div>
  );
}
export default DetailBlockChain;
