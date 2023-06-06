import { useState } from "react";
import { loggoVinova, coolicon, xmarkSolid } from "../assets";
function Header() {
  const [isMobile, setIsMoble] = useState(false);
  const handleToggle = () => {
    setIsMoble(!isMobile);
  };

  const NavForMobile = () => {
    return (
      <div className="fixed left-0 top-[78px] h-[320px]  w-full bg-[#00000090] pt-4 my_transition">
        <ul className="flex flex-col gap-2  text-white  text-[20px] text-center font-medium">
          <li className="cursor-pointer " onClick={handleToggle}>
            HOME
          </li>
          <li className="cursor-pointer " onClick={handleToggle}>
            SERVICES
          </li>
          <li className="text-[red] cursor-pointer" onClick={handleToggle}>
            BLOCKCHAIN
          </li>
          <li className="cursor-pointer" onClick={handleToggle}>
            <a href="#blog">BLOG</a>
          </li>
          <li className="cursor-pointer" onClick={handleToggle}>
            JOBS
          </li>
          <li className="cursor-pointer" onClick={handleToggle}>
            ABOUT
          </li>
          <li className="cursor-pointer" onClick={handleToggle}>
            TESTIMONIALS
          </li>
          <li className="cursor-pointer" onClick={handleToggle}>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <header className="Header sticky z-10 top-0 w-full px-[162px]  border-b-2  xl:px-8 bg-[#FAFAFA] bgWhenScreenThan1441px ">
      <div className="wrap  h-[78px] text-[14px] flex justify-between  items-center ">
        <div className="logo">
          <img src={loggoVinova} alt="" />
        </div>
        <div className="nav xl:hidden mr-9">
          <ul className="flex gap-[21px] font-normal">
            <li>HOME</li>
            <li>SERVICES</li>
            <li className="text-[#3f3534]">BLOCKCHAIN</li>
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
          <div
            onClick={handleToggle}
            className="w-[18px] h-[18px]"
          >
            <img src={xmarkSolid} alt="" width="18px" height="18px" className="w-[18px] h-[18px] object-cover mysvgNav"/>
          </div>
        )}
        {isMobile && <NavForMobile />}
      </div>
    </header>
  );
}

export default Header;
