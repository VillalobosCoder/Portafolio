import type { SVGProps } from "react";

const Kotlin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="kotlin_grad"
        x1="100%"
        y1="0%"
        x2="0%"
        y2="100%"
      >
        <stop offset="0%" style={{ stopColor: "#E44857" }} />
        <stop offset="46.89%" style={{ stopColor: "#C711E1" }} />
        <stop offset="100%" style={{ stopColor: "#7F52FF" }} />
      </linearGradient>
    </defs>
    <path
      d="M256 256H0V0h256L128 128z"
      fill="url(#kotlin_grad)"
    />
  </svg>
);

export default Kotlin;