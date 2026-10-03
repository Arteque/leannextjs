import Link from "next/link"
import type { ComponentProps } from "react"

type InlineLinkProps = ComponentProps<typeof Link>

const InlineLink = ({href="", children, ...props}:InlineLinkProps) => {
    return <Link href={href} {...props}>{children}</Link>
}

export default InlineLink