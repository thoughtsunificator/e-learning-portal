import React from "react";
import { useTheme } from "next-themes";
import { FiEye } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";

function CourseCard(props) {
  const { theme, setTheme } = useTheme();
  // course, duration, module, bried description, locked(bool)
  return (
    <div>
      <div className="box-border flex h-[170px] w-full items-center justify-center rounded-t-2xl bg-[#d4dced] p-5 dark:bg-[#bcd1ff]">
        {theme === "dark" ? (
          <img src="/svg/LaptopDark.svg" className="h-[4rem] w-[4rem]" />
        ) : (
          <img src="/svg/LaptopLight.svg" className="h-[4rem] w-[4rem]" />
        )}
      </div>
      <div>
        <div className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-[#6E798C]">Module</p>
            <p className="text-sm font-normal text-[#6E798C]">
              {props.duration} min
            </p>
          </div>
          <h4 className="my-3 text-xl capitalize text-black lg:text-2xl">
            {props.module_name}
          </h4>
          <p className="clamp-3 h-16 text-sm text-[#374A59]">{props.content}</p>

          <div className="mt-4 flex items-center justify-between">
            {props.isModuleActive ? (
              <>
                <p className="text-sm text-primary">0 % completed</p>
                <button
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black hover:bg-primary hover:text-white"
                  onClick={() => props.handleModuleSelection(props.moduleid)}>
                  {/*add onclick for this */}
                  <FiEye />
                </button>
              </>
            ) : (
              <>
                <div style={{ flexGrow: 1 }} />
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-[#7c0f00] hover:bg-[#7c0f00] hover:text-white">
                  <HiLockClosed className="" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
