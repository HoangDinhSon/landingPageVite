import {loggoVinova,coolicon} from "../assets";

function Header() {
  return (
    <header className="Header sticky z-10 top-0 w-full px-[162px]  border-b-2  xl:px-8 bg-[#FAFAFA]">
      <div className="wrap  h-[52px] text-[14px] flex justify-between  items-center ">
        <div className="logo">
          <img src={loggoVinova} alt="" />
        </div>
        <div className="nav xl:hidden"  >
          <ul className="flex gap-[21px] font-normal">
            <li >HOME</li>
            <li>SERVICES</li>
            <li className="text-[#3f3534]">BLOCKCHAIN</li>
            <li>BLOG</li>
            <li>JOBS</li>
            <li>ABOUT</li>
            <li>TESTIMONIALS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="xl:!block hidden">
          <img src={coolicon} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
