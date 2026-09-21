import Link from "next/link";
import type { ComponentProps } from "react";

type LinkTagProps = ComponentProps<typeof Link>;

const LinkTag = ({
  className = "",
  href,
  children,
  ...props
}: LinkTagProps) => {
  return (
    <Link
      className={`font-title tracking-wide block px-2 py-4 rounded-md text-center transition-all duration-300 hover:bg-background/20 ${className}`}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkTag;
