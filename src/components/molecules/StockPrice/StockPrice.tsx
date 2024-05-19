import React from "react";
import { Else, If, Then } from "react-if";
import { getFormatNumber } from "@utils/getFormatNumber";
import UpDownNumber from "@atoms/UpDownNumber";
import { StockPriceProps } from "./Stock.types";

const StockPrice = ({
  price,
  prefix,
  postfix,
  decimalPoint = 0,
  animated = false,
  className,
  ...props
}: StockPriceProps) => {
  const isNumber = (char: string) => Boolean(char.match(/[0-9]/));

  return (
    <div className={`flex whitespace-pre ${className}`} {...props}>
      {Array.from(getFormatNumber({ number: price, decimalPoint, prefix, postfix })).map(
        (str, i) => (
          <If condition={animated && isNumber(str)} key={`sp-${i}`}>
            <Then>
              <UpDownNumber number={Number(str)} />
            </Then>
            <Else>{str}</Else>
          </If>
        ),
      )}
    </div>
  );
};

export default StockPrice;
