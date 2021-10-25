import { Box, BoxProps, Heading } from "@chakra-ui/layout"
import { createTransition } from "@utils"

type ContentSectionProps = {
	title: string
} & BoxProps

const ContentSection: React.FC<ContentSectionProps> = ({
	children,
	id,
	title,
	...props
}) => {
	return (
		<Box role="group" id={id} w="full" {...props}>
			<Heading
				as="h2"
				userSelect="none"
				display="inline-block"
				fontSize={{ base: "lg", sm: "2xl" }}
				fontWeight={500}
				textTransform="uppercase"
				letterSpacing={{ base: "1px", sm: "2px" }}
				borderRadius="md"
				color={{ base: "black", sm: "white" }}
				bg={{ base: "white", sm: "black" }}
				mb={5}
				py={{ base: 1, sm: 2 }}
				pl={{ base: 3, sm: 0 }}
				pr={{ base: "calc(0.75rem - 1px)", sm: 0 }}
				transition={createTransition([
					"color",
					"background",
					"letter-spacing",
					"padding",
				])}
				_groupHover={{
					color: "black",
					bg: "white",
					letterSpacing: { base: "1px", sm: "3px" },
					pr: { base: "calc(0.75rem - 1px)", sm: "calc(1rem - 3px)" },
					pl: { base: 3, sm: 4 },
				}}
			>
				{title}
			</Heading>
			{children}
		</Box>
	)
}

export default ContentSection
