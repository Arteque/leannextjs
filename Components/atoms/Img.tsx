import Image from "next/image";
import type { ComponentProps } from "react";

type LogoProps = ComponentProps<typeof Image>;

const Img = ({ ...props }: LogoProps) => {
  return <Image {...props} />;
};

export default Img;
