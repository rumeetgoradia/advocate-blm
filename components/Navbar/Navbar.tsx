import { Box, Container, HStack, Link } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/system"
import { createTransition, fade } from "@utils"
import { NAV_ITEMS } from "constants/navigation"
import { useRouter } from "next/dist/client/router"
import NextLink from "next/link"
import { useEffect, useState } from "react"

const Navbar: React.FC = () => {
	const [isScrolled, setScrolled] = useState<boolean>()

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 60)
	}

	useEffect(() => {
		handleScroll()
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const router = useRouter()

	const theme = useTheme()

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			zIndex={9999}
			w="full"
			px={8}
			pt={1}
			bg={fade(theme.colors["black"], 0.9)} //background
			backdropFilter="saturate(180%) blur(5px)"
			transition={createTransition("padding")}
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
					bg: "white",
				},
			}}
		>
			<Container as="header" maxW="container.sm">
				<HStack
					as="nav"
					justifyContent="center"
					align="center"
					spacing={isScrolled ? 6 : 8}
				>
					{NAV_ITEMS.map((navItem) => (
						<NextLink
							href={navItem.path}
							passHref
							key={`${navItem.title}-nav-item`}
						>
							<Link
								title={navItem.title}
								textDecoration="none"
								position="relative"
								px={2.5}
								py={2.5}
								opacity={
									router.pathname === navItem.path ? "1 !important" : 0.75
								}
								fontSize={isScrolled ? "2xl" : "3xl"}
								transition={createTransition([
									"font-size",
									"margin",
									"transform",
									"opacity",
								])}
								_after={{
									content: '""',
									w: router.pathname === navItem.path ? "100% !important" : 0,
									h: "2px",
									position: "absolute",
									bottom: "0px",
									left: "50%",
									zIndex: 10000,
									bg: "white",
									transform: "translateX(-50%)",
									transition: createTransition("width"),
								}}
								_hover={{
									opacity: 0.85,
									_after: {
										w: "75%",
									},
								}}
								_focus={{
									opacity: 0.85,
									_after: {
										w: "75%",
									},
								}}
								_active={{
									transform: "scale(0.9)",
								}}
							>
								{navItem.icon}
							</Link>
						</NextLink>
					))}
				</HStack>
			</Container>
		</Box>
	)
}

export default Navbar
