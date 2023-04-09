import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { IWorkImage } from "../interfaces/work-image.interface";
import Image from "next/legacy/image";

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
          showThumbs={false}
          centerMode={props.centerMode}
          centerSlidePercentage={props.centerSlidePercentage}
        >
          {props.imageItems.map((imageItem) => (
            <Image
              src={imagePathBase + imageItem.src}
              alt={imageItem.alt}
              key={imageItem.src}
              width={imageItem.width}
              height={imageItem.height}
              layout={"responsive"}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default WorkImageContent;
