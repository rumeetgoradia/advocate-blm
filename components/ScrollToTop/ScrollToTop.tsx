import { Circle } from "@chakra-ui/react"
import { createTransition } from "@utils"
import { useEffect, useState } from "react"
import { BsChevronUp } from "react-icons/bs"
const ScrollToTop: React.FC = () => {
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<Circle
			onClick={scrollToTop}
			cursor="pointer"
			position="fixed"
			zIndex={9999}
			bottom={isScrolled ? 6 : 0}
			right={4}
			bg="white"
			opacity={isScrolled ? 0.75 : 0}
			pointerEvents={isScrolled ? "auto" : "none"}
			padding={2}
			color="black"
			fontSize="xl"
			transition={createTransition(["opacity", "bottom", "transform"])}
			_hover={{
				opacity: 1,
			}}
			_active={{
				transform: "scale(0.95)",
			}}
		>
			<BsChevronUp />
		</Circle>
	)
}

export default ScrollToTop
