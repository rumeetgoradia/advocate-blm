import { Box, Link, Text } from "@chakra-ui/layout"
import { createTransition } from "@utils"
import NextLink from "next/link"
type TagProps = {
	path: string
}

const Tag: React.FC<TagProps> = ({ children, path }) => {
	return (
		<Box mb={1} ml={1}>
			<NextLink href={path} passHref>
				<Link
					userSelect="none"
					textDecoration="none"
					_focus={{ outline: "none" }}
				>
					<Text
						as="h4"
						opacity={0.75}
						lineHeight="0.9"
						letterSpacing="2px"
						textTransform="uppercase"
						fontSize="smaller"
						borderRadius="sm"
						color="black"
						bg="white"
						pt={2}
						pb="calc(0.5rem - 1px)"
						pl={3}
						pr="calc(0.75rem - 2px)"
						transition={createTransition("opacity")}
						_hover={{
							opacity: 1,
						}}
					>
						{children}
					</Text>
				</Link>
			</NextLink>
		</Box>
	)
}

export default Tag
