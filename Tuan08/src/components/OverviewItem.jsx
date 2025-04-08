import React from "react";

export default function OverviewItem(props) {
  const { bgColor, title, icon, metric, poc } = props;
  const className = "flex rounded p-3 justify-between " + bgColor;
  return (
    <div className={className}>
      <div>
        <h4 className="font-bold">{title}</h4>
        <p className="my-2 text-2xl font-[700]">{metric}</p>
        <p className="text-xs"><span className="text-[green] font-bold">{poc}%</span> period of change</p>
      </div>
      <div>
        <button>
          <img src={icon} width={40}/>
        </button>
      </div>
    </div>
  );
}
