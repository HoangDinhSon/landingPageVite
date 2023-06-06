import { useState } from "react";
function Under() {
  const [plusWidth, setPlusWidth] = useState(false);
  const classTransition= plusWidth?"w-4 h-[150px] overflow-hidden bg-slate-500 transition-[height] duration-[5s]":"w-4 h-0 overflow-hidden bg-slate-500 transition-[height] duration-[5s]"
  return (
    <div>
      <div className={classTransition}>
        <ul>
            <li className="overflow-hidden">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
      </div>
      <button
        onClick={() => {
          setPlusWidth(!plusWidth);
        }}
      >
        Click{" "}
      </button>
    </div>
  );
}
export default Under;
