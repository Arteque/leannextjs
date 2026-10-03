import type { ComponentProps } from "react"
import Img from "../atoms/Img"
import InlineLink from "../atoms/links/InlineLink";

type LinkImgProps = Omit<ComponentProps<typeof InlineLink>, "children"> & {
    img: ComponentProps<typeof Img>;
}

const LinkImg = ({img, ...props}:LinkImgProps) => {
  return (
    <InlineLink {...props}>
        <Img {...img} />
    </InlineLink>
  )
}

export default LinkImg