import React from "react";
import { IWorkVideo } from "../interfaces/work-video.interface";
const WorkVideoContent = (props: { videoItems: IWorkVideo[] }) => {
  return (
    <>
      <details>
        <summary>動画</summary>
        <div style={{ textAlign: "center" }}>
          {props.videoItems.map((videoItem) => (
            <p key={videoItem.src}>
              <iframe
                width={videoItem.width}
                height={videoItem.height}
                src={videoItem.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videoItem.title}
              ></iframe>
            </p>
          ))}
        </div>
      </details>
    </>
  );
};

export default WorkVideoContent;
