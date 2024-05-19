import type { VariantProps } from "tailwind-variants";
import type { PolymorphicPropsWithInnerRefType } from "@customTypes/polymorphicType";
import { wrapperVariants } from "./Image.styles";

export type ImageProps = PolymorphicPropsWithInnerRefType<"img"> &
  VariantProps<typeof wrapperVariants> & {
    imageClassName?: string;
  };
