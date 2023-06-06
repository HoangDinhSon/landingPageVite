import { useState } from "react";
import { loggoVinova, coolicon, xmarkSolid } from "../assets";
// import { NavForMobile } from "./small-component";
function Header() {
  const [isMobile, setIsMoble] = useState(false);
  const handleToggle = () => {
    setIsMoble(!isMobile);
  };
  const NavForMobile = () => {
    return (
      <div className="fixed left-0 top-[78px] h-[320px]  w-full bg-[#00000090] pt-4 my_transition ">
        <ul className="flex flex-col gap-2  text-white  text-[20px] text-center font-medium  ">
          <li onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              HOME
            </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              SERVICES
            </a>
          </li>
          <li className="text-[red] " onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              BLOCKCHAIN
            </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#blog" className="cursor-pointer">
              BLOG
            </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              JOBS
            </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              ABOUT
            </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              TESTIMONIALS
            </a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact" className="cursor-pointer">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <header className="Header sticky z-10 top-0 w-full px-[162px]  border-b-2  xl:px-8 bg-[#FAFAFA] bgWhenScreenThan1441px ">
      <div className="wrap  h-[78px] text-[14px] flex justify-between  items-center ">
        <div className="logo cursor-pointer">
          <img src={loggoVinova} alt="" />
        </div>
        <div className="nav xl:hidden mr-9">
          <ul className="flex gap-[21px] font-normal">
            <li>HOME</li>
            <li>SERVICES</li>
            <li className="text-[#E21A22]">BLOCKCHAIN</li>
            <li>BLOG</li>
            <li>JOBS</li>
            <li>ABOUT</li>
            <li>TESTIMONIALS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        {!isMobile && (
          <div className="xl:!block hidden" onClick={handleToggle}>
            <img src={coolicon} alt="" />
          </div>
        )}
        {isMobile && (
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
        {isMobile && <NavForMobile />}
      </div>
    </header>
  );
}

export default Header;
