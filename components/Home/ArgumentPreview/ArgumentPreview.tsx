import { Box, Flex, Heading, Link } from "@chakra-ui/layout"
import type { Argument } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"
import { Tag } from "./Tag"

type ArgumentPreviewProps = {
	argument: Argument
}

const ArgumentPreview: React.FC<ArgumentPreviewProps> = ({ argument }) => {
	const path = `/arguments/${argument.slug}`

	return (
		// <NextLink href={path} passHref>
		<Link
			as={NextLink}
			href={path}
			passHref
			userSelect="none"
			textDecoration="none !important"
			_focus={{ outline: "none" }}
		>
			<Box
				cursor="pointer"
				px={6}
				pt={6}
				pb={5}
				mb={{ base: 4, md: 5 }}
				opacity={0.75}
				transition={createTransition("opacity")}
				borderColor="white"
				border="2px"
				borderRadius="lg"
				_hover={{ opacity: 1 }}
			>
				<Heading as="h3" size="lg" mb={6} letterSpacing="-1px">
					{argument.title}
				</Heading>
				<Flex flexWrap="wrap" ml={-2}>
					{argument.facts && <Tag path={`${path}#facts`}>Facts</Tag>}
					{argument.assertions && (
						<Tag path={`${path}#assertions`}>Assertions</Tag>
					)}
					{argument.sources && <Tag path={`${path}#sources`}>Sources</Tag>}
				</Flex>
			</Box>
		</Link>
		// </NextLink>
	)
}

export default ArgumentPreview
