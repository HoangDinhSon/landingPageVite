import { iconfacebook, icontwiter } from "../assets";

function Footer() {
  return (
    <div className="relative h-[821px]  bg-[red] text-white">
      <div className="">
        <div className="absolute top-[15%] left-1/2 -translate-x-2/4 flex flex-col items-center">
          <h2 className="uppercase">Begin your journey with us</h2>
          <h3>We'd love to see how we can hely you </h3>
          <button className="text-[25px] border rounded-md py-[4px] px-[15px] mt-6">
            GET IN TOUCH
          </button>
        </div>
        <div className="bg-[yellow]  absolute bottom-[70px] pl-[70%] w-full">
          <p>Visit us </p>
          <p>28 Sin Ming Lane #03-137,</p>
          <p>Midview City,</p>
          <p>Singapore 573972 </p>
        </div>
        <div className="bg-[blue] text-white h-[70px] w-full flex justify-around items-center absolute bottom-0 ">
          <span>Copyright 2023 Vinova pte.Ltd.All rights reserved.</span>
          <div className="flex gap-5 ">
            <img
              src={iconfacebook}
              alt=""
              className="object-obtain w-[40px] h-[40px] "
            />
            <img
              src={icontwiter}
              alt=""
              className="object-obtain w-[40px] h-[40px] text-[red]"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
