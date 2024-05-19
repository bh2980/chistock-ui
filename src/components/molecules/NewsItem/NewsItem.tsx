import React from "react";
import { getRelativeTime } from "@utils/getRelativeTime";
import InteractionState, { interactionStateVariants } from "@atoms/InteractionState";
import List from "@atoms/List/List";
import { newsItemVariants } from "./NewsItem.styles";
import { NewsItemProps } from "./NewsItem.type";

//TODO Link도 사용될 수 있음
const NewsItem = ({
  category,
  source,
  timestamp,
  title,
  summary,
  className,
  ...props
}: NewsItemProps) => {
  const { root, newsInfoWrapper, categoryText, sourceDateWrapper, titleText, contentText } =
    newsItemVariants();

  return (
    <a className={root({ className: interactionStateVariants({ className }) })} {...props}>
      <InteractionState />
      <div className={newsInfoWrapper()}>
        <span className={categoryText()}>{category}</span>
        <List divider={"•"} className={sourceDateWrapper()} horizontal>
          <span>{source}</span>
          <span>{getRelativeTime(timestamp)}</span>
        </List>
      </div>
      <span className={titleText()}>{title}</span>
      <span className={contentText()}>{summary}</span>
    </a>
  );
};

export default NewsItem;
