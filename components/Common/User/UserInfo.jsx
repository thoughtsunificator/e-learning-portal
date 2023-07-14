"use client";
import React from "react";
// import styles from "./userinfo.module.scss";
import ThemeButton from "@/components/Features/ThemeButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  ExternalApiEndPoints,
  StudentRouteEnum,
  idToken,
  jwtToken,
  studentInformation,
} from "@/src/shared/Constants";
import Cookies from "js-cookie";
import _ from "lodash";

const UserInfo = (props) => {
  let [showUserInfo, setShowUserInfo] = React.useState(false);
  let [studentInfo, setStudentInfo] = React.useState(null);
  let [avatarUrl, setAvatarUrl] = React.useState("/images/bgs/graybg.png");
  let content;
  let router = useRouter();

  React.useEffect(() => {
    const studentData = localStorage.getItem(studentInformation);
    setStudentInfo(JSON.parse(studentData));
  }, []);

  React.useEffect(() => {
    // generates avatar for the user
    if (studentInfo) {
      let studentName = studentInfo?.name?.replace(/ /g, "+");
      setAvatarUrl(
        ExternalApiEndPoints.avatar +
          "?name=" +
          studentName +
          "&background=random&length=2&size=128&font-size=0.5&rounded=true"
      );
    }
  }, [studentInfo]);
  const signOut = () => {
    Cookies.remove(idToken);
    localStorage.removeItem(jwtToken);
    router.push(StudentRouteEnum.studentlogin);
  };
  if (showUserInfo) {
    content = (
      <>
        <div className="absolute z-[999] box-border flex h-[20.2rem] w-[21.8rem] flex-col place-items-center justify-start rounded-[1rem] bg-white shadow-xl dark:border dark:border-white dark:border-white dark:bg-[#1D2144]">
          <div className="absolute right-[1rem] top-[0.35rem] cursor-pointer">
            <ArrowDropUpIcon
              className="h-[2rem] w-[2rem]"
              onClick={() => setShowUserInfo(false)}></ArrowDropUpIcon>
          </div>
          <img
            src="https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg?w=1800&t=st=1680658774~exp=1680659374~hmac=0ee98cd8ef278e59ee0ba06dfcb56c13e2a3a6fc851523080b22017dcb746f25"
            className="h-[8rem] w-[21.8rem] rounded-tl-[1rem] rounded-tr-[1rem]"
          />
          <div className="absolute left-[1rem] top-[6.5rem] flex flex-row place-items-center justify-start gap-4">
            <img src={avatarUrl} className="h-[4rem] w-[4rem] rounded-full" />
            <p className="relative top-[0.8rem] text-2xl font-normal">
              {studentInfo?.name?.split(" ")[0] ?? "--"}
            </p>
          </div>
          <div className="absolute top-[11.7rem] grid w-full grid-cols-3 justify-around">
            <div className="flex flex-col place-items-center justify-center">
              <p className="text-lg font-medium">ID</p>
              <p className="text-md">{props.id}</p>
            </div>
            <div className="flex flex-col place-items-center justify-center">
              <p className="text-lg font-medium">Course</p>
              <p className="text-md">{props.course}</p>
            </div>
            <div className="flex flex-col place-items-center justify-center">
              <p className="text-lg font-medium">Batch</p>
              <p className="text-md">{studentInfo?.batch ?? "--"}</p>
            </div>
          </div>
          <div className="absolute top-[15.9rem] h-[1px] w-10/12 border-[0.5px] border-black/20 dark:border-white/20"></div>
          <div className="absolute right-[2rem] top-[17rem] flex cursor-pointer flex-row place-items-end justify-center gap-2">
            <LogoutIcon></LogoutIcon>
            <p className="text-lg" onClick={signOut}>
              Signout
            </p>
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <div
          onClick={() => setShowUserInfo(true)}
          className="cursor-pointer rounded-[2.6rem] border-[0.3px] border-black dark:border-white">
          <img
            src={avatarUrl}
            className="mx-auto h-[2.6rem] w-[2.6rem] rounded-[2.6rem]"
          />
        </div>
      </>
    );
  }
  return (
    <div className="h-[67px] px-8 py-3 shadow-md">
      <div
        className={
          showUserInfo
            ? "z-50 flex flex-row place-items-start justify-end gap-[3rem]"
            : "z-50 flex flex-row place-items-center justify-end gap-[2rem]"
        }>
        <ThemeButton></ThemeButton>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <div
                onClick={() => setShowUserInfo(true)}
                className="cursor-pointer rounded-[2.6rem] border-[0.3px] border-black dark:border-white">
                <img
                  src={avatarUrl}
                  className="mx-auto h-[2.6rem] w-[2.6rem] rounded-[2.6rem]"
                />
              </div>
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
            <Menu.Items>
              <div className="absolute right-0 z-50 w-[20rem] overflow-hidden  rounded-2xl border border-black/5 bg-white shadow-xl dark:border-white dark:border-white/10  dark:bg-[#1D2144]">
                <div className="p-4">
                  <div className=" flex items-center justify-start gap-4">
                    <img
                      src={avatarUrl}
                      className="h-[3rem] w-[3rem] rounded-full"
                    />
                    <p className="text-xl font-semibold capitalize">
                      {studentInfo?.name?.split(" ")[0] ?? "--"}
                    </p>
                  </div>
                  <div className="mt-8 grid w-full grid-cols-3 justify-around">
                    <div className="flex flex-col place-items-center justify-center">
                      <p className="text-base font-medium">ID</p>
                      <p className="mt-2 text-xs text-black/60 dark:text-white/80">
                        {props.id}
                      </p>
                    </div>
                    <div className="flex flex-col place-items-center justify-center">
                      <p className="text-base font-medium">Course</p>
                      <p className="mt-2 text-xs text-black/60 dark:text-white/80">
                        {props.course}
                      </p>
                    </div>
                    <div className="flex flex-col place-items-center justify-center">
                      <p className="text-base font-medium">Batch</p>
                      <p className="mt-2 text-xs text-black/60 dark:text-white/80">
                        {studentInfo?.batch ?? "--"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-[1px] w-full bg-black/5 dark:bg-white/5"></div>
                <div className="flex cursor-pointer items-center gap-2 px-6 py-2.5 hover:bg-black/5 dark:hover:bg-white/10">
                  <LogoutIcon className="text-sm"></LogoutIcon>
                  <p className="text-sm" onClick={signOut}>
                    Signout
                  </p>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        {/* {content} */}
      </div>
    </div>
  );
};

export default UserInfo;
