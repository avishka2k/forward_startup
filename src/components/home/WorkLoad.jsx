import React from "react";

function WorkLoad(props) {
  return (
    <div className="w-full h-full border border-line_color">
      <div className="flex flow-row h-full items-center">
        <div className="flex flex-col pl-10 text-text_dark gap-3">
          <p className=" text-5xl font-bold">{props.title}</p>
          <p className="text-xl">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkLoad;
