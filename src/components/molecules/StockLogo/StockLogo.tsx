import { useState } from "react";
import Image from "@atoms/Image";
import { stockImageVariants, stockLogoVariants } from "./StockLogo.styles";
import type { StockLogoProps } from "./StockLogo.types";

//TODO 이미지에서 fallback 처리가 되면 거기서 해결하고 외부 div 제거해서 리팩토링하기
const StockLogo = ({ src, alt, ticker, className, ...imageProps }: StockLogoProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div className={stockLogoVariants({ className })} title={alt}>
      {(!src || hasError) && <span className="font-bold">{ticker}</span>}
      {src && (
        <Image src={src} alt={alt} className={stockImageVariants({ hasError })} onError={handleError} {...imageProps} />
      )}
    </div>
  );
};

export default StockLogo;
