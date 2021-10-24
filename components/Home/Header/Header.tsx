import { Box, Flex, Heading } from "@chakra-ui/layout"
import { Fist } from "@components/Fist"
const Header: React.FC = () => {
	return (
		<Flex justify="space-between" mb={8}>
			<Box pr={8}>
				<Heading
					fontWeight={800}
					fontSize={{ base: "4xl", sm: "6xl", md: "7xl" }}
					letterSpacing="-2px"
				>
					Advocate BLM
				</Heading>
				<Heading
					as="h2"
					fontSize={{ base: "lg", md: "xl" }}
					fontWeight={400}
					opacity={0.75}
				>
					Providing objectivity in the fight for Black Lives Matter.
				</Heading>
			</Box>
			<Box>
				<Flex
					h={{ sm: "96px", md: "110px" }}
					w={{ sm: "96px", md: "110px" }}
					borderRadius="50%"
					bg="white"
					align="center"
					justify="center"
				>
					<Fist
						display={{ base: "none", sm: "inherit" }}
						h={{ sm: "80px", md: "90px" }}
						w="auto"
						fill="black"
					/>
				</Flex>
			</Box>
		</Flex>
	)
}

export default Header
