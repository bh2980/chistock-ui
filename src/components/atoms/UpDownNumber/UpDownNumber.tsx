import React, { useEffect, useRef } from "react";
import type { UpDownNumberProps } from "./UpDownNumber.types";

export const UpDownNumber = ({ number }: UpDownNumberProps) => {
  const numberCoverRef = useRef<HTMLDivElement>(null);
  const numberContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!numberContainerRef?.current || !numberCoverRef.current) return;

    const { height } = numberContainerRef.current.getBoundingClientRect();

    numberCoverRef.current.style.height = `${height / 10}rem`;

    numberContainerRef.current.style.transform = `translateY(-${(number * height) / 10}rem)`;
  }, [number]);

  return (
    <div className="overflow-hidden" ref={numberCoverRef}>
      <div className="transition-all" ref={numberContainerRef}>
        <div>0</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
};

export default UpDownNumber;
