import { ComponentPropsWithoutRef, ElementType } from "react";
import { VariantProps } from "tailwind-variants";

import { InnerRefType } from "./polymorphicType";

/** 객체 속성의 값들에서 Nullable한 값 제거하는 타입 */
export type NonNullableProps<Obj> = {
  [P in keyof Obj]: NonNullable<Obj[P]>;
};

/** VariantsProps의 속성의 값들에서 Nullable한 값 제거한 타입 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VariantPropsType<Component extends (...args: any) => any> = NonNullableProps<
  VariantProps<Component>
>;

export type ComponentPropsWithInnerRef<T extends ElementType> = ComponentPropsWithoutRef<T> &
  InnerRefType<T>;
