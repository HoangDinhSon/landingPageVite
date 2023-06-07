import { Rectangle12, Rectangle13, Rectangle14, Rectangle15 } from '../assets/icons';

type propsProcesDetail = {
    imgSrc: any;
    para: string;
    header: string;
    number: string;
    isVertical: boolean;
};
const DummyDataForOurBlockChainDevelopmen = [
    {
        isVertical: true,
        imgSrc: Rectangle12,
        number: '01',
        header: ' Discovery Stage',
        para: ' We look at your project requirements at this stage. We try to geta sense of what blockchain solutions you need. Each blockchain network (public, private, and hybrid) has distinct pluses and minuses. \n \nSo, we decide which one will best drive your goals. Inshort, we gather all requirements at this stage and form an initial workflow based on that',
    },
    {
        isVertical: true,
        imgSrc: Rectangle13,
        number: '02',
        header: ' Product Feasibility Study',
        para: 'Next, we do a theoretical build-up of your blockchain app or website, outlining the architecture, frameworks, consensus mechanism, tech stacks, mockups, designs, and feasibility. \n \n Once our stakeholders approve the prototype and our Proof-of-Concept (POC), we proceed with the development work.',
    },
    {
        isVertical: true,
        imgSrc: Rectangle14,
        number: '03',
        header: ' Product Development',
        para: ' At this point, we focus on the blockchain platforms, programming languages, UI/UX, databases, APIs, and the middleware that connects the external systems with the blockchain.\n \nOur developers test and release an alpha version to spot issues. Once we fix all gaps and find the product doing well in the market, we add more complex features down the road.',
    },
    {
        isVertical: false,
        imgSrc: Rectangle15,
        number: '04',
        header: ' Support and Maintenance',
        para: 'Our job doesn&#180;t end with just the product launch. We offer post-launch support too. We closely monitor the transactions executed in blockchain and keep a regular watch to remove bugs/glitches (if any). \n\nWe even handle feature upgrades from time to time to ensure your product is always up to date and functions flawlessly throughout its lifetime.',
    },
];
function OurBlockchainDevelopmentProcess() {
    const ProcessDetail = ({ imgSrc, para, header, number, isVertical }: propsProcesDetail) => {
        // có is there pesudo ::after
        const myClassName = isVertical
            ? 'max-w-[674px] text-justify text-[18px]  leading-[23px] mt-[15px] font-normal  relative after:block after:absolute after:bg-[#FF1C03] after:h-[59px] after:w-[1px] whitespace-pre-line sm:after:hidden sm:text-left'
            : 'max-w-[674px] text-justify text-[18px] leading-[23px] mt-[15px] font-normal sm:text-left whitespace-pre-line';
        return (
            <div className=" pt-[49px] sm:pt-8 last:pt-[70px]">
                <div className="flex justify-between  ">
                    <div>
                        <h6>
                            <span className="text-[#FF1C03]">{number}</span>
                            {header}
                        </h6>
                        <p className={myClassName}>{para}</p>
                    </div>
                    <img
                        src={imgSrc}
                        alt=""
                        className="md:max-w-[262px] ml-2 sm:hidden max-w-[300px] h-[222px] object-cover"
                        width={'1000px'}
                        height={'1000px'}
                    />
                </div>
            </div>
        );
    };
    return (
        <section className="OurBlockchainDevelopmentProcess mt-[77px] px-[162px] xl:px-8 sm:pt-8 bgWhenScreenThan1441px">
            <div className="">
                <h1 className="max-w-[620px] mb-[76px]">Our Blockchain Development Process</h1>
                {DummyDataForOurBlockChainDevelopmen.map((ele) => {
                    return (
                        <div key={ele.header}>
                            <ProcessDetail
                                isVertical={ele.isVertical}
                                imgSrc={ele.imgSrc}
                                number={ele.number}
                                header={ele.header}
                                para={ele.para}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default OurBlockchainDevelopmentProcess;
