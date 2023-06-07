import { cercleForHire } from '../assets/icons';
interface PropsForWhyWeHire {
    head: string;
    pragraph: string;
    key?: any;
}
const dummydataForWhyHireVinaoVa = [
    {
        head: 'We Match Your Needs',
        pragraph:
            "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
        head: 'World-class Coding Standards',
        pragraph:
            "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
        head: 'Work with Experts',
        pragraph:
            "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
        head: 'ISO Certified',
        pragraph:
            "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
        head: 'Transparency',
        pragraph:
            "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
    {
        head: 'Top of the line',
        pragraph:
            "By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately.",
    },
];

function WhyHireVinova() {
    const ItemReasonHire = ({ head, pragraph, key }: PropsForWhyWeHire) => {
        return (
            <div key={key} className="flex flex-col items-center  text-center max-w-[317px] sm:pt-8 sm:first:pt-0">
                <img src={cercleForHire} alt="" className="w-[84px] h-[84px]" />
                <h6 className="mt-[26px]">{head}</h6>
                <p className="leading-[20px]">{pragraph}</p>
            </div>
        );
    };
    return (
        <section className="WhyHireVinova  mt-[128px] bg-[#FAFAFA] py-[128px] px-[162px] lg:px-8 sm:px-8 sm:mt-8 sm:py-8 bgWhenScreenThan1441px">
            <div className="">
                <h1 className="text-center">
                    Why Hire <span className="text-[#FF1C03]">vinova</span>?
                </h1>
                <div className="grid grid-cols-3 gap-y-[31px] gap-x-[51px] mt-[79px] sm:flex sm:mt-8 sm:flex-col sm:items-center sm:gap-y-0 ">
                    {dummydataForWhyHireVinaoVa.map((ele) => {
                        return (
                            <div key ={ele.head}>
                                <ItemReasonHire head={ele.head} pragraph={ele.pragraph} />;
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default WhyHireVinova;
