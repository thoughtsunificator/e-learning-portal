import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  HiOutlineDocument,
  HiOutlineDocumentDuplicate,
  HiOutlineFolder,
} from "react-icons/hi";
import { CgScreen } from "react-icons/cg";
import { BiText } from "react-icons/bi";
// props -> title , index, completed, resources, length, onClick
function VideoSidebarSubComp(props) {
  console.log(props, "props");
  return (
    <div
      className="flex w-full flex-col justify-center border-t border-black/5 bg-[#f7f9fa] p-2 dark:border-white dark:border-white/10 dark:bg-[#090E34]"
      onClick={() => props.onClick(props.item)}>
      <div className="flex flex-row items-center justify-start gap-3">
        <input
          type="radio"
          id={props.title}
          name="video"
          value={props.title}
          defaultChecked={props.completed}
          className="cursor-pointer"
        />
        <label htmlFor={props.title} className="font-inter text-sm font-medium">
          {props.index}. {props.title}
        </label>
      </div>
      <div
        className={`flex w-full flex-row items-center gap-5  ${
          props.resources ? "justify-between px-3 " : "justify-start"
        }`}>
        <div className="ml-4 flex flex-row items-center justify-center gap-2">
          {props.item.resource_type === "video" && (
            <CgScreen className="text-[10px] text-black dark:text-white" />
          )}
          {props.item.resource_type === "text" && (
            <BiText className="text-[10px] text-black dark:text-white" />
          )}
          {props.item.resource_type === "document" && (
            <HiOutlineDocumentDuplicate className="text-[10px] text-black dark:text-white" />
          )}
          <p className="font-inter block  w-28 truncate whitespace-nowrap   text-[10px] font-light">
            {props.item.resource_type}
            {/* {props.item.resource_desc} */}
          </p>
        </div>
        {/* {props.resources && (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full items-center justify-center gap-1 rounded border  border-transparent bg-black/70 px-1 py-px text-[9px] font-normal text-white dark:border-white/40 dark:bg-black">
                <HiOutlineFolder className="text-[9px]" aria-hidden="true" />
                Resources
                <FiChevronDown className="text-[9px]" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-50 mt-px w-40 origin-top-right divide-y divide-black/20 rounded-xl bg-[#f7f9fa] shadow-lg ">
                <div className=" px-1 py-1">
                  <Menu.Item>
                    <button className="group rounded-xl hover:bg-black/10 flex items-center w-full px-2 py-2 text-xs text-black">
                      Edit
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        )} */}
      </div>
    </div>
  );
}

export default VideoSidebarSubComp;
