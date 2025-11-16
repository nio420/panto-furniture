import React from "react";

const TooltipBtn = ({position='bottom', colors=['bg-red-700', 'bg-green-700','bg-pink-700']}) => {
  const positionClass = {
    bottom: {
      tooltip: 'bottom-full left-1/2 transform -translate-x-1/2 mb-3',
      arrow: 'left-1/2 transform -translate-x-1/2 -bottom-2 border'
    },
  }

  return (
    <>
      {/* Hover button with tooltip effect */}
      <div className="absolute bottom-20 left-20 group">
        <button className="relative p-2 bg-white/35 rounded-full border text-xl cursor-pointer border-white/25">
          {/* Tooltip */}
          <div className={`absolute hidden group-hover:flex p-2 space-x-1 rounded-lg bg-white/25 shadow-md ${positionClass[position].tooltip}`}>
            {colors.map((color, index) => (
              <div key={index} className={`size-4 ${color} border-white/25 rounded-full`}></div>
            ))}



            {/* Tooltip Arrow */}
            <div className={`absolute ${positionClass[position].arrow}  w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/35`}></div>
          </div>
        </button>
      </div>
    </>
  );
};

export default TooltipBtn;
