
function NavForMobile({handleToggle}:any) {
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
}

export default NavForMobile;