import { dummyDataFoHeaderDeskhop } from "../../../dummy_data";

function NavForMobile(props: any) {
  const handleToggle = props.handleToggle;
  return (
    <div className="fixed left-0 top-[78px] h-[320px]  w-full bg-[#00000090] pt-4 my_transition ">
      <ul className="flex flex-col gap-2  text-white  text-[20px] text-center font-medium  ">
        {dummyDataFoHeaderDeskhop.map((element) => {
          return (
            <li className={element.className} onClick={handleToggle}>
              <a href={element.href}>{element.content}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavForMobile;
