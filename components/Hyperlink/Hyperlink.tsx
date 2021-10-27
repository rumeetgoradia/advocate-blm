import { Link, LinkProps } from "@chakra-ui/layout"
import { createTransition } from "@utils"
import NextLink from "next/link"

const Hyperlink: React.FC<LinkProps> = ({ children, href, ...props }) => {
	return (
		<NextLink href={href || "#"} passHref>
			<Link
				{...props}
				textDecoration="none !important"
				opacity={0.65}
				bgImage={`linear-gradient(transparent calc(100% - 1px), white 1px)`}
				bgSize="0 100%"
				bgPosition="-100%"
				transition={createTransition(
					["background-size", "opacity", "color"],
					"fast"
				)}
				_hover={{ bgSize: "100% 100%", opacity: 1, color: "#ffffff" }}
				_focus={{ bgSize: "100% 100%", opacity: 1, color: "#ffffff" }}
			>
				{children}
			</Link>
		</NextLink>
	)
}

export default Hyperlink
