import { ButtonTouch, DetailBlockChain } from './small-component';
import { dumyDataForApproachtoblockchain } from '../../dummy_data';
function Approachestoblockchain() {
    return (
        <section className=" mt-[153px] bg-[#FAFAFA] pt-[84px] sm:mt-9 sm:pt-[57px]">
            <div className="flex flex-col items-center">
                <h1 className=" sm:text-center">Approaches to Blockchain</h1>
                <h3 className="max-w-[1103px] leading-[150%] text-center sm:text-xl sm:text-center sm:mt-8">
                    Our world-class team, of course, suggests which Blockchain approach would best fit your business.
                    But, we let you have the last word before we get things rolling for you. Here are the Blockchain
                    approaches we think can transform your business.
                </h3>
                <div className="flex gap-[45px] mt-[47px] md:block">
                    {dumyDataForApproachtoblockchain.map((element) => {
                        return (
                            <>
                                <DetailBlockChain
                                    icon={element.icon}
                                    header={element.header}
                                    paragrap={element.paragrap}
                                />
                            </>
                        );
                    })}
                </div>
                <ButtonTouch />
            </div>
        </section>
    );
}

export default Approachestoblockchain;
