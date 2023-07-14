import React from "react";

function AssignmentCard(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
      <div
        className={`flex w-full cursor-pointer flex-col items-center justify-between rounded-xl hover:bg-black/70 bg-[${props.color}] px-5 py-5 text-white shadow-lg md:flex-row md:py-1.5`}>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-[2rem]">
          <div className="bg-[#5d65ab] opacity-0"></div>
          <div className="bg-[#ba0224] opacity-0"></div>
          <div className="bg-[#088724] opacity-0"></div>
          <img src="/svg/clipboard.svg" className="h-[3rem] w-[3rem]" />
          <span className="text-xl font-semibold capitalize md:text-2xl">
            {props.title}
          </span>
          <span className="text-base font-normal text-[#ADB3CC] md:text-sm">
            {props.course}, {props.module}
          </span>
        </div>
        <span className="mt-4 justify-end text-lg font-normal text-white/90 md:mt-0 md:text-base">
          Due {props.due}
        </span>
      </div>
    </div>
  );
}

export default AssignmentCard;
