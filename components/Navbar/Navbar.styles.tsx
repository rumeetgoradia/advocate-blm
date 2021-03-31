import { fade, makeStyles } from "@material-ui/core/styles"

interface NavbarStylesProps {
	scrolled: boolean
}

const useNavbarStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		top: 0,
		width: "100%",
		height: (props: NavbarStylesProps) =>
			props.scrolled ? theme.spacing(5.5) : theme.spacing(7),
		backgroundColor: (props: NavbarStylesProps) =>
			props.scrolled ? theme.palette.background.default : "transparent",
		borderBottom: `1px solid ${fade(theme.palette.text.primary, 0.75)}`,
		backdropFilter: "blur(20px) saturate(180%)",
		transition: theme.transitions.create(["height", "background-color"]),
	},
	navLinkContainer: {
		cursor: "pointer",
		color: theme.palette.text.primary,
		fontSize: (props: NavbarStylesProps) =>
			props.scrolled
				? theme.typography.fontSize * 1.25
				: theme.typography.fontSize * 1.75,
		opacity: 0.65,
		margin: (props: NavbarStylesProps) =>
			props.scrolled ? `0 ${theme.spacing(1.5)}px` : `0 ${theme.spacing(2)}px`,
		padding: theme.spacing(1),
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		transition: theme.transitions.create(["opacity", "font-size", "margin"]),
		"&::after": {
			content: '""',
			width: 0,
			height: 4,
			position: "absolute",
			bottom: "-2px",
			left: "50%",
			backgroundColor: theme.palette.text.primary,
			transform: "translateX(-50%)",
			transition: theme.transitions.create(["width"]),
		},
		"&:hover, &:focus": {
			opacity: 0.85,
			"&::after": {
				width: "100%",
			},
		},
	},
	navLinkContainerActive: {
		opacity: 1,
		"&::after": {
			width: "115%",
		},
		"&:hover, &:focus": {
			opacity: 1,
			"&::after": {
				width: "115%",
			},
		},
	},
}))

export default useNavbarStyles
