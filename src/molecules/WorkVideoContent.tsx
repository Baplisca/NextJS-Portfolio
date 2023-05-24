import React from "react";
import { IWorkVideo } from "../interfaces/work-video.interface";
import styles from "./WorkVideoContent.module.scss";

const WorkVideoContent = (props: { videoItems: IWorkVideo[] }) => {
  return (
    <>
      <details>
        <summary>Movie</summary>
        <div style={{ textAlign: "center" }}>
          {props.videoItems.map((videoItem, idx) => (
            <div className={styles.YoutubeWrapper} key={idx}>
              <iframe
                width={videoItem.width}
                height={videoItem.height}
                src={videoItem.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videoItem.title}
              ></iframe>
            </div>
          ))}
        </div>
      </details>
    </>
  );
};

export default WorkVideoContent;
