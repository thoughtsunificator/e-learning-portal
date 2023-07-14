"use client";
import React from "react";
import ThemeButton from "@/components/Features/ThemeButton";
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

const UserAdminInfo = (props) => {
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
  return (
    <div className="h-[67px] px-8 py-3 shadow-md">
      <div
        className={
          showUserInfo
            ? "z-50 flex flex-row place-items-start justify-end gap-[3rem]"
            : "z-50 flex flex-row place-items-center justify-end gap-[2rem]"
        }
      >
        <ThemeButton></ThemeButton>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <div
                onClick={() => setShowUserInfo(true)}
                className="cursor-pointer rounded-[2.6rem] border-[0.3px] border-black dark:border-white"
              >
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
            leaveTo="transform opacity-0 scale-95"
          >
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
      </div>
    </div>
  );
};

export default UserAdminInfo;
