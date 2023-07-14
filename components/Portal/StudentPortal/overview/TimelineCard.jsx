import React from "react";
import { Itim } from "@next/font/google";

const itim = Itim({ weight: "400", subsets: ["latin"] });

function TimelineCard(props) {
  return (
    <div
      className={props.className + "text-black " + itim.className}
      onClick={props.onClick}
      id={props.id}>
      <h3 className="font-inter mb-3 text-xl capitalize text-white dark:text-black">
        {props.title}
      </h3>
      <p className="text-sm text-white dark:text-black">{props.content}</p>
    </div>
  );
}

export default TimelineCard;
