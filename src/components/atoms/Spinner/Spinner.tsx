import { SpinnerVariants } from "./Spinner.styles";
import { SpinnerProps } from "./Spinner.types";

const Spinner = ({ size, className, ...props }: SpinnerProps) => {
  return (
    <svg
      width="200"
      height="200"
      strokeWidth={"24px"}
      viewBox="0 0 400 400"
      className={SpinnerVariants({ size, className })}
      {...props}
    >
      <g className="animate-[spin_2s_linear_infinite] origin-center">
        <path
          d="M132.826 264.259C145.449 277.631 161.754 286.959 179.679 291.064C197.604 295.168 216.344 293.866 233.528 287.32C250.713 280.775 265.571 269.28 276.222 254.291C286.874 239.301 292.842 221.489 293.371 203.108C293.9 184.727 288.966 166.601 279.194 151.024C269.422 135.447 255.25 123.117 238.47 115.594C221.69 108.071 203.057 105.693 184.925 108.76C166.794 111.827 149.979 120.202 136.608 132.826"
          strokeWidth="24"
          strokeLinecap="round"
          className="stroke-surface-on fill-none"
        />
        <circle cx="108.425" cy="200.773" r="21.5577" fill="#FFD465" />
      </g>
      <circle
        cx="200.425"
        cy="30.773"
        r="21.5577"
        className="fill-error origin-center animate-[spin_1.5s_ease-in-out_infinite]"
      />
      <g className="origin-center animate-[spin_1.5s_infinite] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] ">
        <circle cx="199.802" cy="30.15" r="12.9346" className="fill-primary" transform="rotate(25, 200, 200)" />
      </g>
    </svg>
  );
};

export default Spinner;
