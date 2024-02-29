import { styled } from "@mui/material/styles";

const StyledSvg = styled("svg")(({ theme }) => ({
  position: "absolute",
  top: 0,
  zIndex: 1,
  left: 0,
  right: 0,
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export default function Shadow() {
  return (
    <StyledSvg
      width="1396"
      height="360"
      viewBox="0 0 1396 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_52_305)">
        <ellipse
          cx="717"
          cy="503"
          rx="364"
          ry="342"
          fill="#B5964D"
          fill-opacity="0.16"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_52_305"
          x="0"
          y="-192"
          width="1434"
          height="1390"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="176.5"
            result="effect1_foregroundBlur_52_305"
          />
        </filter>
      </defs>
    </StyledSvg>
  );
}
