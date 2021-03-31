import { AppBar, Box } from "@material-ui/core"
import clsx from "clsx"
import { NAV_LINKS } from "constants/navigation"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import { useEffect, useState } from "react"
import useNavbarStyles from "./Navbar.styles"

const Navbar: React.FC = () => {
	const [scrolled, setScrolled] = useState<boolean>(false)
	const router = useRouter()

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 60 || window.scrollY > 60)
	}

	const classes = useNavbarStyles({ scrolled })

	return (
		<AppBar className={classes.root}>
			<Box
				width="100%"
				height="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				{NAV_LINKS.map((navLink) => (
					<Link href={navLink.path} passHref key={navLink.title}>
						<div
							title={navLink.title}
							className={clsx(
								classes.navLinkContainer,
								router.pathname === navLink.path &&
									classes.navLinkContainerActive
							)}
						>
							{navLink.icon}
						</div>
					</Link>
				))}
			</Box>
		</AppBar>
	)
}

export default Navbar
