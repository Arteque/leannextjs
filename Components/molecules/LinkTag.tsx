import InlineLink from "@/Components/atoms/links/InlineLink";
import type { ComponentProps } from "react";

type LinkTagProps = ComponentProps<typeof InlineLink>;

const LinkTag = ({
  className = "",
  href,
  children,
  ...props
}: LinkTagProps) => {
  return (
    <InlineLink
      className={`font-title tracking-wide block px-2 py-4 rounded-md text-center transition-all duration-300 hover:bg-background/20 ${className}`}
      href={href}
      {...props}
    >
      {children}
    </InlineLink>
  );
};

export default LinkTag;
