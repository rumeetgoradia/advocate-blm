import { StackProps, VStack } from "@chakra-ui/layout"
import { createTransition } from "@utils"

const Paragraphs: React.FC<StackProps> = ({ children, ...props }) => {
	return (
		<VStack
			mt={{ sm: -3 }}
			justify="flex-start"
			align="flex-start"
			spacing={5}
			opacity={0.75}
			transition={createTransition("opacity")}
			_groupHover={{ opacity: 1 }}
			{...props}
		>
			{children}
		</VStack>
	)
}

export default Paragraphs
