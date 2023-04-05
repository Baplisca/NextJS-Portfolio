// import { Carousel } from "react-responsive-carousel";
import { IWorkImage } from "../interfaces/work-image.interface";
import Image from "next/image";

const imagePathBase = "/assets/";
const WorkImageContent = (props: { imageItems: IWorkImage[] }) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {/* <Carousel autoPlay infiniteLoop> */}
        {props.imageItems.map((imageItem) => (
          <Image
            src={imagePathBase + imageItem.src}
            alt={imageItem.alt}
            key={imageItem.src}
            width={imageItem.width}
            height={imageItem.height}
          />
        ))}
        {/* </Carousel> */}
      </div>
    </>
  );
};

export default WorkImageContent;
