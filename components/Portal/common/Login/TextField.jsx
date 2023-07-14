import React from "react";
function TextField(props) {
  return (
    <div className="mt-5 flex w-full flex-col place-items-start justify-center gap-2">
      <p className="text-sm font-normal text-black dark:text-white">
        {props.title}
      </p>
      <div className="flex w-full items-center rounded-[15px] border-2 border-[#9BA4A9]/30 px-5 py-3 dark:bg-white dark:focus-within:border-white">
        {props.icon}
        <p className="mx-3 text-2xl font-medium text-[#CED2D5]/50 ">|</p>
        <input
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onchange}
          className="w-full bg-transparent text-base font-normal text-black outline-none placeholder:font-light placeholder:text-[#CED2D5]"
        />
      </div>
    </div>
  );
}

export default TextField;
