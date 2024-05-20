import type { VariantProps } from "tailwind-variants";
import type { ComponentPropsWithInnerRef } from "@customTypes/utilType";
import { SpinnerVariants } from "./Spinner.styles";

export type SpinnerProps = ComponentPropsWithInnerRef<"svg"> & VariantProps<typeof SpinnerVariants>;
