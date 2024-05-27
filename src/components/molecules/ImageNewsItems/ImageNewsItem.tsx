import { getRelativeTime } from "@utils/getRelativeTime";
import Image, { type ImageProps } from "@atoms/Image";
import InteractionState, { interactionStateVariants } from "@atoms/InteractionState";
import List from "@atoms/List/List";
import { imageNewsItemVariants } from "./ImageNewsItem.styles";
import { ImageNewsItmeProps } from "./ImageNewsItem.types";

//TODO Link도 사용될 수 있음.
const ImageNewsItem = ({
  image,
  category,
  source,
  timestamp,
  title,
  summary,
  className,
  ...props
}: ImageNewsItmeProps) => {
  const { root, newsItemWrapper, newsInfoWrapper, categoryText, sourceDateWrapper, titleText, contentText } =
    imageNewsItemVariants();

  return (
    <a className={root({ className: interactionStateVariants({ focusOutlineOffset: true, className }) })} {...props}>
      {image}
      <div className={newsItemWrapper()}>
        <div className={newsInfoWrapper()}>
          <span className={categoryText()}>{category}</span>
          <List divider={"•"} className={sourceDateWrapper()} horizontal>
            <span>{source}</span>
            <span>{getRelativeTime(timestamp)}</span>
          </List>
        </div>
        <span className={titleText()}>{title}</span>
        <span className={contentText()}>{summary}</span>
      </div>
      <InteractionState />
    </a>
  );
};

const NewsImage = (props: Omit<ImageProps, "className">) => {
  return <Image {...props} className="absolute w-full h-full hover:scale-125 transition-transform" />;
};

ImageNewsItem.Image = NewsImage;

export default ImageNewsItem;
