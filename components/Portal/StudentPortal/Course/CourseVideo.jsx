import React from "react";
import ReactPlayer from "react-player";
import { Player } from "video-react";
import "node_modules/video-react/dist/video-react.css"; // import css
import { AiFillPlayCircle } from "react-icons/ai";

const CourseVideo = (props) => {
  const [progress, setProgress] = React.useState(0);
  const [isVideoComplete, setVideoComplete] = React.useState(false);
  const [duration, setDuration] = React.useState(0);

  function videoEnded(_event) {
    setVideoComplete(true);
    // perform an api call to update the percentage covered
  }

  function onProg(e) {
    const percentage = Math.floor((e.playedSeconds / duration) * 100);
    setProgress(percentage);
  }

  function handleDuration(duration) {
    setDuration(duration);
  }
  return (
    <div>
      <div className="-6 relative overflow-hidden rounded-2xl">
        <div className="absolute z-50 flex h-full w-full items-center justify-center bg-gradient-to-t from-black/30 to-black/70">
          <div>
            <AiFillPlayCircle size={82} className="cursor-pointer text-white" />
          </div>
        </div>
        {/* <Player controls={true} height={"70vh"} src={props.url} /> */}
        <ReactPlayer
          width="100%"
          height="80vh"
          url={props.url}
          onEnded={videoEnded}
          controls={false}
          onProgress={onProg}
          onDuration={handleDuration}
        />
      </div>
    </div>
  );
};

export default CourseVideo;
