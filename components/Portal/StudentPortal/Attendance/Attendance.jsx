import CircularProgress from "./CircularProgress";
import GraphStats from "./GraphStats";
import Progress from "./Progress";
import { useState, useEffect } from "react"
import AxiosWrapper from "@/src/shared/AxiosWrapper";
import {
  StudentApiRoutesEnum,
} from "@/src/shared/Constants";
import FullPageLoader from "../../common/Loader/FullPageLoader";
import {
  studentInformation,
} from "@/src/shared/Constants";


const data = [
  { name: "", value: 60 },
  { name: "", value: 40 },
];
const data2 = [
  { name: "", value: 70 },
  { name: "", value: 30 },
];
const total = [{ name: "", value: 100 }];
const COLORS = ["#16B364", "#EAECF0"];
const COLORS2 = ["#C19D40", "#EAECF0"];
const COLORS3 = ["#E10D0D", "#EAECF0"];

const Attendance = () => {
  
  let [loading, setLoading] = useState(false);
  let apiService = AxiosWrapper();

  let [studentMetadata, setStudentMetadata] = useState();

  const [attended, setAttended] = useState(null)
  const [unattended, setUnAttended] = useState(null)
  useEffect(() => {
    const studentInfo = JSON.parse(localStorage.getItem(studentInformation));
    if (studentInfo?.course_id) {
      setLoading(true);
      apiService
        .get(StudentApiRoutesEnum.studentMetaData)
        .then((resp) => {
          setStudentMetadata(resp?.data?.data);
          setAttended(resp?.data?.data[studentInfo.course_id]?.attendace.attended)
          const total_classes = resp?.data?.data[studentInfo.course_id]?.attendace.total_classes
          setUnAttended(total_classes - attended)
          setLoading(false);
        })
        .catch((err) => {
          console.error(err)
          console.log("");
        });
    }
  }, []);
  
  return ( // TODO FullPageLoader, where can I get batch_id?
  <>
    <FullPageLoader loading={loading} />
    <div className="mb-5">
      <div className="grid h-full grid-cols-1 gap-20 px-10 md:grid-cols-4 md:gap-5">
        <div className="flex items-center justify-center gap-1 md:col-span-1">
          <div className="relative flex h-[78px] w-[78px] min-w-[78px] items-center justify-center overflow-hidden rounded-full">
            <Progress
              data={total}
              COLORS={COLORS}
              width={68}
              height={68}
              outerRadius={30}
              innerRadius={25}
            />
          </div>
          <p className="text-left text-sm font-normal text-black dark:text-white">
            {attended} <br />
            Total Attendance
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 text-center md:col-span-1">
          <div className="relative flex h-[78px] w-[78px] min-w-[78px] items-center justify-center overflow-hidden rounded-full">
            <Progress
              data={data2}
              COLORS={COLORS2}
              width={68}
              height={68}
              outerRadius={30}
              innerRadius={25}
            />
          </div>
          <p className="text-left text-sm font-normal text-black dark:text-white">
            {unattended} <br />
            Unattended
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 text-center md:col-span-1">
          <div className="relative flex h-[78px] w-[78px] min-w-[78px] items-center justify-center overflow-hidden rounded-full">
            <Progress
              data={data2}
              COLORS={COLORS3}
              width={68}
              height={68}
              outerRadius={30}
              innerRadius={25}
            />
          </div>
          <p className="text-left text-sm font-normal text-black dark:text-white">
            {unattended} <br />
            Unattended
          </p>
        </div>
      </div>
      <div className="my-16 h-px w-full bg-black/10 dark:bg-white/10" />
      <div className="grid h-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="mx-auto w-full rounded-xl bg-[#fff] p-5 shadow-xl sm:max-w-[330px]">
          <CircularProgress />
        </div>
        <div className="mx-auto w-full sm:max-w-[370px]">
          <div className="w-full space-y-4 rounded-xl bg-[#D1D5F0] px-5 py-10 shadow-xl dark:bg-black">
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Student Name:
              </p>
              <p className="text-sm font-medium text-black/60 dark:text-white">
                Priya Tripati
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Student Email:
              </p>
              <p className="text-sm font-medium text-black/60 dark:text-white">
                xyz@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Batch No:
              </p>
              <p className="text-sm font-medium text-black/60 dark:text-white">
                232B-23C
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Country:
              </p>
              <p className="text-sm font-medium text-black/60 dark:text-white">
                UAE
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Payment:
              </p>
              <p className="rounded-full bg-[#90EE90] px-2 py-px text-xs font-normal text-black">
                completed
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Enrolled Date:
              </p>
              <p className="text-sm font-medium text-black/60 dark:text-white">
                22/11/2022
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-1/2 text-right text-sm font-medium text-black dark:text-white">
                Attendance:
              </p>
              <p className="text-sm font-medium text-black/60 dark:text-white">
                {attended}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Attendance;
