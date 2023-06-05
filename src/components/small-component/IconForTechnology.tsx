import {propsForTechnology} from "../../../type"
function IconForTechnology({ img, paragraph, myclass }: propsForTechnology) {
    return ( 
        <div className={`w-[52px] flex flex-col items-center ${myclass}`}>
        <img src={img} alt="" className="w-[52px] h-[52px]" />
        <p className="text-[13px]  text-center mt-[6px] ">{paragraph}</p>
      </div>
     );
}

export default IconForTechnology;