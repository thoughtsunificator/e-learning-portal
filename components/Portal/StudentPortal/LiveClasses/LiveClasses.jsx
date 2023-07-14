import React from "react";
import CalendarComp from "./Calendar";
import UpcomingClasses from "./UpcomingClasses";
import _ from "lodash";
import { StudentApiRoutesEnum } from "@/src/shared/Constants"
import AxiosWrapper from "@/src/shared/AxiosWrapper";
import FullPageLoader from "../../common/Loader/FullPageLoader";

const LiveClasses = () => {
  const [nowDate, setNowDate] = React.useState(() => {
    return new Date().toISOString().slice(0, 10);
  });
  // const classes = {
  //   "2023-05-11": [
  //     {
  //       title: "Meeting on Rocks",
  //       passcode: "abcd",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "7:30pm",
  //       instructor: "Saurabh",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Meeting on Mountains",
  //       passcode: "abcd123",
  //       description:
  //         "This meeting is about the overall progress and increment of each candidate",
  //       time: "6:30pm",
  //       instructor: "Rick and Morty",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //   ],
  //   "2023-05-12": [
  //     {
  //       title: "Meeting on Rails",
  //       passcode: "laksjfl",
  //       description: "Some Description",
  //       time: "1:00pm",
  //       instructor: "Tom",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Thermo",
  //       passcode: "lakdsjfl",
  //       description:
  //         "This meeting is about the overall progress and increment of each alsdjfls",
  //       time: "4:00pm",
  //       instructor: "Jerry",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //   ],
  //   "2023-05-13": [
  //     {
  //       title: "Meeting on Rails",
  //       passcode: "laksjfl",
  //       description: "Some Description",
  //       time: "1:00pm",
  //       instructor: "Tom",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //     {
  //       title: "Thermo",
  //       passcode: "lakdsjfl",
  //       description:
  //         "This meeting is about the overall progress and increment of each alsdjfls",
  //       time: "4:00pm",
  //       instructor: "Jerry",
  //       link: "some link",
  //       timezone: "IST",
  //     },
  //   ],
  //   "2023-05-14": [
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //   ],
  //   "2023-05-15": [
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //   ],
  //   "2023-05-16": [
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //   ],
  //   "2023-05-17": [
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //     {
  //       title: "",
  //       passcode: "",
  //       description: "",
  //       time: "",
  //       instructor: "",
  //       link: "some link",
  //     },
  //   ],
  // };
  function meetingDate() {
    return _.keys(classes);
  }

  let [loading, setLoading] = React.useState(false);
  let apiService = AxiosWrapper();

  let [classes, setClasses] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    apiService
      .get(StudentApiRoutesEnum.live_classes, { params: { batch_id: "b1" } }) // TODO
      .then((resp) => {
        const liveClasses = {}
        for (const liveClass of resp?.data) {
          const [ day, month, year ] = liveClass.date.split("/")
          const dateStr = new Date(year, parseInt(month) - 1, parseInt(day) + 1).toISOString().slice(0, 10);
          if(! liveClasses[dateStr] ) {
            liveClasses[dateStr] = []
          }
          const {date, ...rest} = liveClass
          liveClasses[dateStr].push(rest)
        }
        setClasses(liveClasses);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err)
        console.log("");
      });
  }, []);
  

  return (
    <>
      <FullPageLoader loading={loading} />
      <div className="grid grid-cols-1 gap-10 divide-x divide-black/10 dark:divide-white/20 md:grid-cols-2 md:gap-0 lg:grid-cols-2 xl:gap-0">
        <div className="mx-auto max-w-[550px]">
          <h2 className="font-inter mb-4 text-2xl font-medium tracking-wider text-black/70 dark:text-white">
            Live Classes
          </h2>
          <CalendarComp setNowDate={setNowDate} meetingDates={meetingDate()} />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-inter mb-4 text-2xl font-medium tracking-wider text-black/70 dark:text-white">
              Upcoming Classes
            </h2>
            <div className="overflow-hidden rounded-2xl">
              <UpcomingClasses
                date={nowDate}
                classes={classes}
                data={classes[nowDate]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveClasses;
