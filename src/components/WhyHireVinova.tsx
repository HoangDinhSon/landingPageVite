import { cercleForHire } from "../assets";
interface PropsForWhyWeHire {
  head: string;
  pragraph: string;
}

function WhyHireVinova() {
  const ItemReasonHire = ({ head, pragraph }: PropsForWhyWeHire) => {
    return (
      <div className="flex flex-col items-center  text-center max-w-[317px] sm:mt-8 sm:first:mt-0">
        <div className="">
          <img src={cercleForHire} alt="" />
        </div>
        <h6 className="mt-[26px]">{head}</h6>
        <p>{pragraph}</p>
      </div>
    );
  };
  return (
    <section className="WhyHireVinova  mt-[128px] bg-[#FAFAFA] py-[128px] px-[162px] lg:px-8 sm:px-8 sm:mt-8 sm:py-8">
      <div className="">
        <h1 className="text-center">
          Why Hire <span className="text-[#FF1C03]">vinova</span>?
        </h1>
        <div className="grid grid-cols-3 gap-y-[31px] gap-x-[51px] mt-[79px] sm:flex sm:mt-8 sm:flex-col sm:items-center sm:gap-y-0 ">
          <ItemReasonHire
            head="We Match Your Needs"
            pragraph="By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately."
          />
          <ItemReasonHire
            head="World-class Coding Standards"
            pragraph="By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately."
          />
          <ItemReasonHire
            head="Work with Experts"
            pragraph="By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately."
          />
          <ItemReasonHire
            head="ISO Certified"
            pragraph="By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately."
          />
          <ItemReasonHire
            head="Transparency"
            pragraph="By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately."
          />
          <ItemReasonHire
            head="Top of the line"
            pragraph="By partnering with Capital Numbers, you'll get access to our 700+ in-house developers and will be able to fill any role immediately."
          />
        </div>
      </div>
    </section>
  );
}

export default WhyHireVinova;
