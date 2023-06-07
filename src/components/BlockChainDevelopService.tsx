import { DetailBlockchainService } from './small-component';
import { DataForBlockChainDevelopService } from '../../dummy_data';

function BlockChainDevelopService() {
    return (
        <section id="blog" className="BlockChainDevelopService mt-[136px] md:mt-8 bgWhenScreenThan1441px">
            <div className="px-[162px] lg:px-8">
                <h1 className="md:text-[35px]">Blockchain Development Services</h1>
                <h3 className="max-w-[936px] mb-[38px] md:text-xl md:mt-[29px] md:pb-[17px] leading-[150%]">
                    We offer futuristic Blockchain development solutions to help clients grow in this thriving market.
                    We provide services in areas like
                </h3>
                {DataForBlockChainDevelopService.map((aService) => {
                    return (
                        <div key={aService.id} className="group">
                            <DetailBlockchainService
                                leftParagrap={aService.leftParagrap}
                                lisDetail={aService.lisDetail}
                            />
                            <hr className="w-full mt-8 group-last:hidden " />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default BlockChainDevelopService;
