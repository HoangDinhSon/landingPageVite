import { iconfacebook, icontwiter } from "../assets";

function Footer() {
  return (
    <div id="contact" className="relative h-[821px] bg-[url('./assets/Footer/people.jpg')] bg-no-repeat my-pg-position text-white sm:h-[600px] ">
    
        {/* row 1  */}
        <div className="absolute w-full top-[25%] left-1/2 -translate-x-2/4 flex flex-col items-center ">
          <h2 className="uppercase text-center text-[28px]">
            Begin your journey with us
          </h2>
          <h3 className="text-center text-[35px]">
            We'd love to see how we can hely you{" "}
          </h3>
          <button className=" font-bold border-2 rounded-md py-[4px] px-[18px] mt-6 hover:text-[#E21A22] sm:px-[10px] sm:py-[2px]">
            GET IN TOUCH
          </button>
        </div>
        {/* row 2  */}
        <div className="bg-[#E21A22] py-[58px]  absolute bottom-[38px] left-0 pl-[70%] w-full sm:pl-0 sm:flex sm:flex-col sm:items-center sm:text-xs sm:py-[15px] ">
          <p className="font-bold">Visit us </p>
          <p>28 Sin Ming Lane #03-137,</p>
          <p>Midview City,</p>
          <p>Singapore 573972 </p>
        </div>
        {/* row 3  */}
        <div className="bg-[#991217] text-white h-[45px] w-full flex justify-around items-center absolute bottom-0 left-0 ">
          <span className="sm:text-[12px]">
            Copyright &copy; 2023 Vinova Pte.Ltd.All rights reserved.
          </span>
          <div className="flex gap-5 sm:gap-3">
            <img src={iconfacebook} alt="" className="object-obtain  w-5 h-5" />
            <img
              src={icontwiter}
              alt=""
              className="object-obtain  text-[red]  w-5 h-5"
            />
          </div>
        </div>
      </div>
  );
}

export default Footer;
