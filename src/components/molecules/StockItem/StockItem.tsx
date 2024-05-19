import Divider from "@atoms/Divider/Divider";
import StockLogo from "@molecules/StockLogo/StockLogo";
import StockChangeLabel from "../StockChangeLabel";
import StockPrice from "../StockPrice";
import { stockItemVariants } from "./StockItem.styles";
import { StockItemProps } from "./StockItem.types";
import { useStockItem } from "./useStockItem";

//TODO 나중에 조립식으로 바꾸거나 해야할 듯
//TODO 중간 그래프 대응
//TODO 로고 없는 경우 대응
//TODO Link 혹은 Div 태그로 변경 가능해야함 -> 이 경우 interactionState 고민
// Link로 감싸는 방법도 있지만..........고민
const StockItem = (props: StockItemProps) => {
  const { companyName, ticker } = props;

  const { src, title, subtitle, market, currentPrice, change, tickerAccent, size } = useStockItem(props);

  const {
    root,
    stockInfoContainer,
    stockPriceContainer,
    stockTextContainer,
    subtitleContainer,
    stockLogo,
    titleText,
    subtitleText,
    marketText,
    tickerMarketDivider,
    labelText,
    priceText,
  } = stockItemVariants({ tickerAccent, size });

  return (
    <div className={root()}>
      <div className={stockInfoContainer()}>
        <StockLogo src={src} alt={`${companyName} logo`} ticker={ticker} className={stockLogo()} />
        <div className={stockTextContainer()}>
          <span className={titleText()}>{title}</span>
          <div className={subtitleContainer()}>
            <span className={subtitleText()}>{subtitle}</span>
            {market && (
              <>
                <Divider vertical className={tickerMarketDivider()} />
                <span className={marketText()}>{market}</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={stockPriceContainer()}>
        <StockPrice price={currentPrice} prefix="$ " decimalPoint={2} className={priceText()} />
        <StockChangeLabel change={change} className={labelText()} />
      </div>
    </div>
  );
};

export default StockItem;
