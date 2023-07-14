import { useState } from "react";
import Mark from "./Mark";
import Attendance from "./Attendence";
import { attendance } from "../data";

export default function Index() {
  const [detail, setDetail] = useState(true);

  return (
    <div className="mx-auto w-11/12">
      {detail ? (
        <Attendance setDetail={setDetail} attendance={attendance} />
      ) : (
        <Mark setDetail={setDetail} />
      )}
    </div>
  );
}
