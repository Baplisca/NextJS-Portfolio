import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IWorkImage } from "../interfaces/work-image.interface";

const imagePathBase = "/assets/";

const WorkImageContent = (props: {
  imageItems: IWorkImage[];
  centerMode?: boolean;
  centerSlidePercentage?: number;
}) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Carousel
          autoPlay
          infiniteLoop
          centerMode={props.centerMode}
          centerSlidePercentage={props.centerSlidePercentage}
        >
          {props.imageItems.map((imageItem) => (
            <img
              src={imagePathBase + imageItem.src}
              alt={imageItem.alt}
              key={imageItem.src}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default WorkImageContent;
