import { Rectangle12, Rectangle13, Rectangle14, Rectangle15 } from "../assets";

type propsProcesDetail = {
  imgSrc: any;
  para: string;
  header: string;
  number: string;
  isVertical: boolean;
};
function OurBlockchainDevelopmentProcess() {
  const ProcessDetail = ({
    imgSrc,
    para,
    header,
    number,
    isVertical,
  }: propsProcesDetail) => {
    const myClassName = isVertical
      ? "max-w-[674px] text-justify text-[18px] font-normal relative after:block after:absolute after:bg-[#FF1C03] after:h-[59px] after:w-[1px] whitespace-pre-line sm:after:hidden sm:text-left"
      : "max-w-[674px] text-justify text-[18px] font-normal sm:text-left";
    return (
      <div className="flex justify-between pt-[60px] sm:pt-8">
        <div>
          <h6>
            <span className="text-[#FF1C03]">{number}</span>
            {header}
          </h6>
          <p className={myClassName}>{para}</p>
        </div>
        <div className="sm:hidden">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    );
  };
  return (
    <section className="OurBlockchainDevelopmentProcess px-[162px] xl:px-8 sm:pt-8">
      <div>
        <h1 className="sm:text-[35px]">Our Blockchain Development Process</h1>
        {/* row 1  */}
        <ProcessDetail
          isVertical={true}
          imgSrc={Rectangle12}
          number="01"
          header=" Discovery Stage"
          para=" We look at your project requirements at this stage. We try to geta sense of what blockchain solutions you need. Each blockchain network (public, private, and hybrid) has distinct pluses and minuses. 
              So, we decide which one will best drive your goals. Inshort, we gather all requirements at this stage and form an initial workflow based on that"
        />
        <ProcessDetail
          isVertical={true}
          imgSrc={Rectangle13}
          number="02"
          header="Product Feasibility Study"
          para="Next, we do a theoretical build-up of your blockchain app or website, outlining the architecture, frameworks, consensus mechanism, tech stacks, mockups, designs, and feasibility.

          Once our stakeholders approve the prototype and our Proof-of-Concept (POC), we proceed with the development work."
        />
        <ProcessDetail
          isVertical={true}
          imgSrc={Rectangle14}
          number="03"
          header=" Product Development"
          para=" At this point, we focus on the blockchain platforms, programming languages, UI/UX, databases, APIs, and the middleware that connects the external systems with the blockchain.
          Our developers test and release an alpha version to spot issues. Once we fix all gaps and find the product doing well in the market, we add more complex features down the road."
        />
        <ProcessDetail
          isVertical={false}
          imgSrc={Rectangle15}
          number="04"
          header=" Support and Maintenance"
          para="Our job doesn’t end with just the product launch. We offer post-launch support too. We closely monitor the transactions executed in blockchain and keep a regular watch to remove bugs/glitches (if any).
          We even handle feature upgrades from time to time to ensure your product is always up to date and functions flawlessly throughout its lifetime."
        />
      </div>
    </section>
  );
}

export default OurBlockchainDevelopmentProcess;
