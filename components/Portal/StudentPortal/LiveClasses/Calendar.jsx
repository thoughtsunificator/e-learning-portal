import React from "react";
import { LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { useTheme } from "next-themes";
import dayjs from "dayjs";

const ExtractDate = (date) => {
  // Thu May 18 2023 -> 2023-05-11
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dev",
  ];
  const dateArray = date.split(" ");
  let month = months.indexOf(dateArray[1]);
  if (month <= 8) {
    month = `0${month + 1}`;
  } else {
    month = `${month + 1}`;
  }
  const day = dateArray[2];
  const year = dateArray[3];
  return `${year}-${month}-${day}`;
};

function CalendarComp(props) {
  const { theme, setTheme } = useTheme();

  function isSelectedDate(dt) {
    let flag = false;
    props?.meetingDates?.forEach((element) => {
      console.log(element, dt, dayjs(element).date(), "dts");
      if (dt == dayjs(element).date()) flag = true;
    });
    return flag;
  }
  function serverDay(ddays) {
    const isSelected =
      !props.outsideCurrentMonth && isSelectedDate(ddays.day.$D);

    if (ddays.outsideCurrentMonth) {
      return (
        <PickersDay
          className="!text-black/30 dark:!text-white/20"
          disabled={true}
          day={ddays.day}
        />
      );
    }

    return (
      <PickersDay
        // sx={styleP}
        className={`${
          isSelected && "!bg-black !text-white dark:!bg-white dark:!text-black"
        } `}
        onDaySelect={handleDateChange}
        day={ddays.day}
      />
    );
  }
  function handleDateChange(date) {
    props.setNowDate(ExtractDate(date["$d"].toDateString()));
  }

  const dts = ["2023-05-15", "2023-05-20", "2023-05-25"];
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} className=" w-full">
      <DateCalendar
        className="custom-calendar w-full rounded-2xl bg-[#D1D5F0] text-black dark:bg-[#1c263a] dark:text-white"
        views={["day"]}
        onChange={handleDateChange}
        slots={{
          day: serverDay,
        }}
      />
    </LocalizationProvider>
  );
}

export default CalendarComp;
