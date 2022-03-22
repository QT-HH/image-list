import React, { memo } from "react";

const ArrowLeftIcon = ({ height = "24px", onClick, style, fill, className }) => (
    <svg
        height={height}
        width={height}
        fill={fill}
        viewBox="0 0 24 24"
        style={style}
        onClick={onClick ? onClick : () => {}}
        className={className}
    >
        <path
            d="M16 3L7 12L16 21"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default memo(ArrowLeftIcon);