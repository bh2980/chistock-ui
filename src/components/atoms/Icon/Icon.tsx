import React from "react";
import { iconPath } from "@constants/iconPath";
import { iconVariants } from "./Icon.styles";
import { IconProps } from "./Icon.types";

const Icon = ({ icon, title, className, ...props }: IconProps) => {
  const { viewBox, path } = iconPath[icon];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconVariants({ className })}
      role="img"
      {...props}
    >
      {path.map((d, i) => (
        <path key={`path-${i}`} d={d} />
      ))}
      {title && <title>{title}</title>}
    </svg>
  );
};

export default Icon;
