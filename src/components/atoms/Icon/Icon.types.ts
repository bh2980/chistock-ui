import { VariantProps } from "tailwind-variants";
import { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";
import { iconPath } from "@constants/iconPath";
import { iconVariants } from "./Icon.styles";

type IconBaseProps = {
  icon: keyof typeof iconPath;
  title?: string;
};

export type IconProps = PolymorphicPropsWithInnerRefType<"svg"> &
  VariantProps<typeof iconVariants> &
  IconBaseProps;
