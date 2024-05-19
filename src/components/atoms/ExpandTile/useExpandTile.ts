import { useState } from "react";
import { TileAlterAs, TileDefault } from "@atoms/Tile";
import { ExpandTileProps } from "./ExpandTile.types";

const useExpandTileStyle = (
  props: ExpandTileProps<TileDefault | TileAlterAs>,
  isExpand: boolean,
) => {
  const { padding, className, ...otherProps } = props;

  return { styleVariant: { padding, isExpand, className }, ...otherProps };
};

const useExpandTile = ({ expanded, ...props }: ExpandTileProps<TileDefault | TileAlterAs>) => {
  const [isExpand, setIsExpand] = useState(expanded || false);

  const changeTileState = () => {
    setIsExpand((current) => !current);
  };

  const {
    styleVariant,
    closeText = "닫기",
    expandText = "더 보기",
    hideWithGradient,
    ...otherProps
  } = useExpandTileStyle(props, isExpand);

  const showGradient = !isExpand && hideWithGradient;
  const BUTTON_TEXT = isExpand ? closeText : expandText;

  const buttonProps = {
    children: [BUTTON_TEXT],
    "aria-expanded": isExpand,
    onClick: changeTileState,
  };

  return {
    styleVariant,
    buttonProps,
    showGradient,
    ...otherProps,
  };
};

export default useExpandTile;
