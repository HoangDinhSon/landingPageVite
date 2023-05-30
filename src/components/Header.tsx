import {loggoVinova,coolicon} from "../assets";

function Header() {
  return (
    <header className="Header fixed top-0 w-screen px-[164px]  border-b-2  xl:px-8">
      <div className="wrap  h-[52px] text-[14px] flex justify-between  items-center ">
        <div className="logo">
          <img src={loggoVinova} alt="" />
        </div>
        <div className="nav xl:hidden"  >
          <ul className="flex gap-[21px]">
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
        <div className="xl:block">
          <img src={coolicon} alt="" />
        </div>
      </div>
    </header>
  );
}

export default Header;
