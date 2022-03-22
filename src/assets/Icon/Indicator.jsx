import React, { memo } from "react";

const IndicatorIcon = ({ height = "24px", onClick, style, fill, className }) => (
    <svg
        height={height}
        width={height}
        fill={fill}
        viewBox="0 0 24 24"
        style={style}
        onClick={onClick ? onClick : () => {}}
        className={`${className}`}
    >
        <circle cx="70" cy="70" r="70"></circle>
    </svg>
);

export default memo(IndicatorIcon);