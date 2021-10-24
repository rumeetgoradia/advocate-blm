import { Box, Flex, Heading } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/system"
import { Fist } from "@components/Fist"
const Header: React.FC = () => {
	const theme = useTheme()

	return (
		<Flex justify="space-between" mb={{ base: 3, sm: 6, md: 8 }}>
			<Box pr={8}>
				<Heading
					fontWeight={700}
					fontSize={{ base: "4xl", sm: "6xl", md: "7xl" }}
					letterSpacing="-2px"
				>
					Advocate{" "}
					<Box
						as="span"
						fontWeight={900}
						sx={{
							"-webkit-text-fill-color": theme.colors.black,
							"-webkit-text-stroke-width": "1px",
							"-webkit-text-stroke-color": theme.colors.white,
						}}
					>
						BLM
					</Box>
				</Heading>
				<Heading
					as="h2"
					fontSize={{ base: "md", sm: "lg", md: "xl" }}
					fontWeight={{ base: 300 }}
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
