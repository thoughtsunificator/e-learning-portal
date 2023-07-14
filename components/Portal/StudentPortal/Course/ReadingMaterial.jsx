import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BsFillFilePdfFill } from "react-icons/bs";
function ReadingMaterial(props) {
  return (
    <div className=" w-full cursor-pointer select-none rounded-3xl bg-black/10 p-5 dark:bg-[#D9D9D9]">
      <div className="flex gap-4">
        <BsFillFilePdfFill className="text-2xl text-black dark:text-[#be3320]" />
        <div>
          <p className="text-base font-medium text-black dark:text-black">
            {props.title}
          </p>
          <p className="pt-5 text-sm font-normal text-black dark:text-black/70">
            by: Palavi das
          </p>
        </div>
      </div>
      <a
        className="ml-5 mt-6 flex flex-row items-center justify-center gap-[10px] rounded-xl bg-[#be3320] px-2 py-2.5 text-white/80 shadow-[0px_4px_10px_rgba(0,0,0,0.5)] hover:opacity-80"
        href={props.href}
        target="_blank">
        Download
        <FontAwesomeIcon icon={faCloudArrowDown} className="text-white/70" />
      </a>
    </div>
  );
}

export default ReadingMaterial;
