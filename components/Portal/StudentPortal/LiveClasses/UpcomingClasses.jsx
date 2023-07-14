import { RxCopy } from "react-icons/rx";
import Notification from "../../../../app/services/notification-service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpcomingClasses({ date, classes, data }) {
  const copyText = () => {
    navigator.clipboard.writeText("passcode");
    Notification.success("successfully copied");
  };
  const Card = ({
    title,
    description,
    instructor,
    time,
    passcode,
    link,
    timezone,
  }) => {
    return (
      <div className="bg:border-black/80 flex w-full flex-col items-start justify-center py-5 text-black">
        <p className="font-inter text-lg font-medium text-black dark:text-white">
          {title}
        </p>
        <p className="font-inter mb-2 mt-2 text-sm font-normal text-[#7D7D7D] lg:pr-20">
          {description}
        </p>
        <p className="font-inter mb-2 mt-3 flex items-center gap-3 text-sm font-medium text-black dark:text-white">
          passcode -{" "}
          <span className="flex items-center gap-2 font-medium text-[#7D7D7D]">
            {passcode}{" "}
            <RxCopy
              className="cursor-pointer text-black dark:text-white"
              onClick={copyText}
            />
          </span>
        </p>
        <div className="text-md flex w-full items-center justify-between">
          <span className="font-inter mb-2 mt-3 text-xs font-medium text-black dark:text-white">
            {instructor?.toUpperCase()}
          </span>
          <div className="flex flex-col items-center justify-center space-y-px">
            <span className="text-xs font-normal text-black dark:text-white">
              {time?.toUpperCase()} {timezone?.toUpperCase()}
            </span>
            <span className="text-xs font-normal text-black dark:text-white">
              {date?.toUpperCase()}
            </span>
          </div>
        </div>
        <span
          className="font-inter mt-4 flex h-10 cursor-pointer select-none items-center justify-center rounded-xl bg-gradient-to-r from-[#678CE3] from-10%  to-[#090E34] to-90% px-6 text-sm text-white hover:opacity-80 dark:bg-[#0336AC] dark:from-transparent dark:to-transparent"
          onClick={() => {
            console.log("hello");
          }}>
          JOIN
        </span>
      </div>
    );
  };
  if (!data) {
    return (
      <h2 className="font-inter mb-4 text-2xl font-medium italic tracking-wider text-black dark:text-white">
        No Upcoming Classes
      </h2>
    );
  }

  return (
    <div className="primary_scrollbar mx-auto flex h-[500px] w-full max-w-[350px] flex-col items-center space-y-5 divide-y divide-black/10 overflow-x-hidden overflow-y-scroll rounded-2xl border border-[#C8C8C8] bg-[#D1D5F0] px-5 dark:bg-[#373a59] lg:w-[350px]">
      <ToastContainer
        position="top-right"
        theme="light"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      {classes[date]?.map((item, index) => {
        return (
          <Card
            title={item.title}
            description={item.description}
            instructor={item.instructor}
            time={item.time}
            passcode={item.passcode}
            timezone={item.timezone}
            link={item.link}
          />
        );
      })}
    </div>
  );
}

export default UpcomingClasses;
