"use client";

import React from "react";
import TextField from "../TextField";
import { Itim } from "@next/font/google";
import axios from "axios";
import {
  StudentApiRoutesEnum,
  StudentRouteEnum,
  idToken,
  jwtToken,
  studentInformation,
} from "@/src/shared/Constants";
import { useRouter } from "next/navigation";
import FullPageLoader from "../../Loader/FullPageLoader";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";

const itim = Itim({ weight: "400", subsets: ["latin"] });

function Login(props) {
  let [username, setUserName] = React.useState("");
  let [password, setPassword] = React.useState("");
  const router = useRouter();
  let [isValid, setValid] = React.useState(false);
  let [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleOnchange = (e) => {
    if (e.target.type === "text") {
      setUserName(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };

  // validating the login credentials
  React.useEffect(() => {
    if (username.length > 0 && password.length > 0 && password.length <= 8) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [username, password]);

  async function authenticate() {
    // Perform API calls only after validation
    setLoading(true);
    await axios
      .post(StudentApiRoutesEnum.login, {
        username,
        password,
      })
      .then((resp) => {
        // storing username and batch in localStorage
        localStorage.setItem(
          studentInformation,
          JSON.stringify({
            name: resp?.data?.student?.student_name,
            batch: resp?.data?.student?.batch_no,
            course_id: resp?.data?.student?.course_id,
            email: resp?.data?.student?.student_email,
            student_username: resp?.data?.student?.student_username,
          })
        );

        Cookies.set(idToken, resp.data.idToken);
        localStorage.setItem(jwtToken, resp.data.token);
        router.push(StudentRouteEnum.studentChooseCourse);
      })
      .catch((err) => {
        console.log("");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 50);
      });
    setLoading(false);
  }

  React.useEffect(() => {
    if (localStorage.getItem(jwtToken) !== null) {
      router.push(StudentRouteEnum.studentChooseCourse);
    }
  }, []);
  return (
    <>
      <FullPageLoader loading={loading} />
      <div className="grid grid-cols-1 md:h-screen md:grid-cols-2">
        <div className="flex h-full items-center justify-center  bg-[#090E34] py-10 text-center md:py-0">
          <a href="" className=" flex flex-col items-center justify-center">
            <img
              src="/images/logo.png"
              className=" h-20 dark:block md:h-32"
              alt="Aeczone Logo"
            />
            <p className="mt-5 self-center whitespace-nowrap text-sm text-white">
              Aeczone Academy
            </p>
          </a>
        </div>
        <div className=" flex h-full grow items-center justify-center border-white/20 py-10 text-center dark:border-l md:py-0">
          <div className="mx-auto flex w-full max-w-[450px] flex-col items-center justify-center px-5">
            <h1 className="font-inter mb-10 text-3xl font-semibold tracking-wider">
              {props.mode === "admin" ? "Admin Log In" : "Student Log In"}
            </h1>
            <TextField
              title={props.mode === "admin" ? "ID" : "Student ID"}
              placeholder="ID"
              type="text"
              img="/images/login/msgicon.png"
              icon={
                <BsFillEnvelopeFill
                  size={18}
                  className="shrink-0 text-[#090E34]"
                />
              }
              onchange={handleOnchange}
            />
            <TextField
              title="Password"
              placeholder="Password"
              type="password"
              img="/images/login/lockicon.png"
              icon={<BiLockAlt size={18} className="shrink-0 text-[#090E34]" />}
              onchange={handleOnchange}
            />
            <button
              type="button"
              className="mt-10 w-full cursor-pointer rounded-xl bg-[#090E34] py-3 text-xl font-medium text-white hover:bg-opacity-70 dark:bg-white dark:text-[#090E34]"
              disabled={!isValid}
              // style={!isValid ? { backgroundColor: "#090E34" } : {}}
              onClick={() => authenticate()}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
      {/* <div
        className={
          "flex h-screen w-full flex-col place-items-center justify-center xs:gap-[50px] sm:gap-[70px] " +
          itim.className
        }></div> */}
      {error
        ? toast.error("Login Error!", {
            toastId: "toastID",
          })
        : ""}
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default Login;
