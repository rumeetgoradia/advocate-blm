import { FaDollarSign, FaHome, FaInfoCircle, FaPencilAlt } from "react-icons/fa"
import { NavLink } from "./interfaces"

export const NAV_LINKS: Array<NavLink> = [
	{
		title: "Home",
		path: "/",
		icon: <FaHome />,
	},
	{
		title: "Info",
		path: "/info",
		icon: <FaInfoCircle />,
	},
	{
		title: "Request / Submit Argument",
		path: "/submit",
		icon: <FaPencilAlt />,
	},
	{
		title: "Donate",
		path: "https://blacklivesmatters.carrd.co/#donate",
		icon: <FaDollarSign />,
	},
]
