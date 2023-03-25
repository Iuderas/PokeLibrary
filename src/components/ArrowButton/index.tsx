import { FC } from "react";

import { IArrowButton } from "./interfaces";

import * as S from "./styles";

export const ArrowButton: FC<IArrowButton> = ({
  backgroundColor,
  disabled = false,
  onClick,
  buttonSize = 32,
  iconSize = 20,
  color,
  rotate,
}) => {
  return (
    <S.IconButton
      disabled={disabled}
      size={buttonSize}
      backgroundColor={backgroundColor}
      onClick={onClick}
      rotate={rotate}
    >
      <svg
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 7 14"
        data-testid="icon-arrow-right"
        style={{ width: iconSize, height: iconSize }}
      >
        <defs>
          <path
            d="M9.9995,19 C9.7735,19 9.5465,18.924 9.3595,18.768 C8.9355,18.415 8.8785,17.784 9.2315,17.36 L13.7075,11.989 L9.3925,6.627 C9.0465,6.197 9.1145,5.567 9.5445,5.221 C9.9755,4.875 10.6045,4.943 10.9515,5.373 L15.7795,11.373 C16.0775,11.744 16.0735,12.274 15.7685,12.64 L10.7685,18.64 C10.5705,18.877 10.2865,19 9.9995,19"
            id="icon-arrow-right"
          />
        </defs>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-2494.000000, -692.000000)">
            <g transform="translate(233.000000, 190.000000)">
              <g transform="translate(1896.000000, 287.000000)">
                <g transform="translate(351.000000, 205.000000)">
                  <g transform="translate(5.000000, 5.000000)">
                    <use
                      fill={color}
                      fillRule="evenodd"
                      xlinkHref="#icon-arrow-right"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </S.IconButton>
  );
};
