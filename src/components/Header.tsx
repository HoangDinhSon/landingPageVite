import { useState } from 'react';
import { loggoVinova, coolicon, xmarkSolid } from '../assets/icons';
import { NavForMobile } from './small-component';
import { dummyDataFoHeaderDeskhop } from '../../dummy_data';
function Header() {
    const [isOpenNavBarForMobile, setIsOpenNavbarForMobile] = useState(false);
    const handleToggle = () => {
        setIsOpenNavbarForMobile(!isOpenNavBarForMobile);
    };
    return (
        <header className="Header sticky z-10 top-0 w-full px-[162px]  border-b-2  xl:px-8 bg-[#FAFAFA] bgWhenScreenThan1441px ">
            <div className="wrap  h-[78px] text-[14px] flex justify-between  items-center ">
                <div className="logo cursor-pointer">
                    <a href="#">
                        <img src={loggoVinova} alt="" />
                    </a>
                </div>
                <div className="nav xl:hidden mr-9">
                    <ul className="flex gap-[21px] font-normal">
                        {dummyDataFoHeaderDeskhop.map((element) => {
                            return (
                                <li className={element.className}>
                                    <a href={element.href}>{element.content}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* Mobile:  open/close Nav bar for mobile  */}
                {!isOpenNavBarForMobile && (
                    <div className="xl:!block hidden" onClick={handleToggle}>
                        <img src={coolicon} alt="" />
                    </div>
                )}
                {isOpenNavBarForMobile && (
                    <div onClick={handleToggle} className="w-[18px] h-[12px]">
                        <img
                            src={xmarkSolid}
                            alt=""
                            width="18px"
                            height="12px"
                            className="w-[18px] h-[12px] object-cover mysvgNav"
                        />
                    </div>
                )}
                {isOpenNavBarForMobile && <NavForMobile handleToggle={handleToggle} />}
            </div>
        </header>
    );
}

export default Header;
