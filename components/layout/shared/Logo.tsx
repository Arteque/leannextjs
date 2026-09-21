import Image from "next/image";
import type { ComponentProps } from "react";

type LogoProps = Omit<
  ComponentProps<typeof Image>,
  "src" | "width" | "height" | "alt"
> & {
  alt?: string;
};

const Logo = ({ alt = "ASEK", ...props }: LogoProps) => {
  return (
    <Image
      src="https://asek.academy/wp-content/uploads/2026/09/Main_Logo_Lock.svg"
      width={230}
      height={77}
      alt={alt}
      {...props}
    />
  );
};

export default Logo;
