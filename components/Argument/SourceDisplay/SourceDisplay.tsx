import { Flex, Link, Text } from "@chakra-ui/layout"
import { Source } from "@constants"
import { createTransition } from "@utils"

type SourceDisplayProps = {
	source: Source
	sourceNum: number
}

const SourceDisplay: React.FC<SourceDisplayProps> = ({ source, sourceNum }) => {
	const { title, url, year } = source

	return (
		<Link
			href={url}
			isExternal
			textDecoration="none !important"
			w="full"
			userSelect="none"
			_focus={{ outline: "none" }}
		>
			<Flex
				position="relative"
				zIndex={5}
				w="full"
				justify="center"
				align="center"
				bg="gray.800"
				borderRadius="md"
				overflow="hidden"
				py={4}
				pl="1px"
				opacity={0.75}
				transition={createTransition(["opacity", "padding"])}
				_hover={{
					opacity: 1,
					pl: "2px",
					"& .source-info": {
						letterSpacing: "2px",
					},
					"& .source-number": {
						transform: "translate(-50%, -50%) scale(2)",
						opacity: 0,
					},
				}}
			>
				<Text
					className="source-info"
					position="relative"
					zIndex={7}
					fontSize="xs"
					fontWeight={500}
					letterSpacing="1px"
					lineHeight={0.9}
					textTransform="uppercase"
					transition={createTransition("letter-spacing")}
				>{`${title}${year ? ` (${year})` : ""}`}</Text>
				<Text
					className="source-number"
					position="absolute"
					zIndex={6}
					top="54%"
					left="24%"
					transform="translate(-50%, -50%)"
					fontWeight={900}
					fontSize="6xl"
					lineHeight={1}
					pointerEvents="none"
					letterSpacing="-2px"
					color="gray.700"
					opacity={0.75}
					transition={createTransition(["transform", "opacity"])}
				>
					{sourceNum}
				</Text>
			</Flex>
		</Link>
	)
}

export default SourceDisplay
