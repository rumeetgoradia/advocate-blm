import { FaDollarSign, FaHome, FaInfoCircle, FaPencilAlt } from "react-icons/fa"
import type { NavItem } from "./types"

export const NAV_ITEMS: NavItem[] = [
	{
		title: "Home",
		path: "/",
		icon: <FaHome />,
	},
	{
		title: "About",
		path: "/about",
		icon: <FaInfoCircle />,
	},
	{
		title: "Submit Argument",
		path: "/submit",
		icon: <FaPencilAlt />,
	},
	{
		title: "Donate [external]",
		path: "https://blacklivesmatters.carrd.co/#donate",
		icon: <FaDollarSign />,
	},
]
