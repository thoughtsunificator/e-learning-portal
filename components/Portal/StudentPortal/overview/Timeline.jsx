import React from "react";
import TimelineCard from "./TimelineCard";
function Timeline(props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    props.setCurrentCard(() => currentIndex);
  }, [currentIndex]);
  return (
    <div>
      {props.cards.map((card, index) => {
        return (
          <div
            className=" flex w-fit flex-row items-start justify-center gap-3"
            key={index}>
            <div className="flex flex-col items-center justify-center gap-5">
              <div
                className={
                  (!card.completed
                    ? "bg-[#c5cbd4] "
                    : "bg-[#1A8409] dark:bg-[#9AE48E] ") +
                  "h-[1rem] w-[1rem] rounded-full"
                }></div>
              {index !== props.cards.length - 1 && (
                <div
                  className={
                    (!card.completed ? "bg-[#c5cbd4] " : "bg-[#9AE48E] ") +
                    "max-h-[18rem] min-h-[10rem] w-[0.12rem]"
                  }></div>
              )}
            </div>
            <TimelineCard
              className={
                (currentIndex === index
                  ? "border-[2px] border-[#9AE48E] shadow-2xl dark:border-[#1A8409] "
                  : "border-[2px] border-transparent ") + props.className
              }
              title={card.title}
              content={card.content}
              id={index}
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
