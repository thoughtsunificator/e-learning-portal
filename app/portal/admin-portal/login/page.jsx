"use client";
import AdminLogin from "@/components/Portal/common/Login/admin/index";
import ChooseCourse from "@/components/Portal/common/ChooseCourse/index";
import ThemeButton from "@/components/Features/ThemeButton";
import AxiosWrapper from "@/src/shared/AxiosWrapper";

const LoginPage = () => {
  return (
    <>
      <div className="absolute right-[40px] top-[20px]">
        <ThemeButton></ThemeButton>
      </div>
      {/* <div className="absolute left-0 top-0 h-[140px] w-[140px] bg-[#1A7FC1] opacity-60 xs:hidden sm:block"></div> */}
      {/* <div className="absolute left-0 top-0 h-[100px] w-[100px] bg-[#1A7FC1] xs:hidden sm:block"></div> */}
      <AdminLogin mode="student" />
      {/* <ChooseCourse mode="student" /> */}
      {/* <img
        src="/images/login/login.png"
        alt="svg"
        className="-z-50 opacity-60 absolute bottom-0 right-0"
      /> */}
    </>
  );
};

export default LoginPage;
