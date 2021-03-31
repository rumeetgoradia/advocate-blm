import { makeStyles } from "@material-ui/core/styles"

const useBaseStyles = makeStyles((theme) => ({
	root: {
		position: "fixed",
		zIndex: 5,
		height: "100vh",
		width: "100vw",
		backgroundColor: theme.palette.background.default,
		backgroundImage: theme.palette.background.gradient,
	},
	container: {
		position: "relative",
		zIndex: 6,
	},
}))

export default useBaseStyles
