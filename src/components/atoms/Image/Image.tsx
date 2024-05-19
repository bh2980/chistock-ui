import React from "react";
import { imageVariants, wrapperVariants } from "./Image.styles";
import { ImageProps } from "./Image.types";

//TODO 로딩 실패 시 대체 이미지 or 대체 컴포넌트 fallback 처리 넣기
const Image = ({ rounded, className, imageClassName, ...props }: ImageProps) => {
  return (
    <div className={wrapperVariants({ rounded, className })}>
      <img className={imageVariants({ className: imageClassName })} {...props} />
    </div>
  );
};

export default Image;
