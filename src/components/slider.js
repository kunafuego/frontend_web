import React,{useState,useEffect} from "react";

export default function Slider() {
  const [value,onChange]=useState(1);
  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })
  return (
    <div className="slider-parent">
      <div className="labelproducto">
          <label>Cantidad</label>
      </div>
      <input type="range" min="1" className="slider" id="sliderid" max="2500" value={value}
        onChange={({ target: { value: radius } }) => {
                      onChange(radius);
                    }}
        />
        <div className="buble"> 
        {value}
        </div>
    </div>
  );
}