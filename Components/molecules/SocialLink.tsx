import InlineLink from "@/components/atoms/links/InlineLink";
import type { ComponentProps } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialLinkProps = Omit<ComponentProps<typeof InlineLink>, "children"> & {
  icon: IconProp;
  label: string;
};

const SocialLink = ({
  className = "",
  icon,
  label,
  ...props
}: SocialLinkProps) => {
  return (
    <InlineLink className={`${className}`} {...props}>
      <span className="sr-only">{label}</span>
      <FontAwesomeIcon icon={icon} />
    </InlineLink>
  );
};

export default SocialLink;
