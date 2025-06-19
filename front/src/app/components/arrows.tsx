import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type ArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <MdArrowForwardIos size={20} />
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "rgba(0,0,0,0.5)",
        borderRadius: "50%",
        width: 40,
        height: 40,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <MdArrowBackIos size={20} />
    </div>
  );
}
export { NextArrow, PrevArrow };
