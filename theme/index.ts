import { createMuiTheme } from "@material-ui/core"

declare module "@material-ui/core/styles/createPalette" {
	interface TypeBackground {
		gradient: string
	}
}

const theme = createMuiTheme({
	palette: {
		text: {
			primary: "#f5f5f5",
			secondary: "#f8f8ff",
		},
		background: {
			default: "rgb(18, 20, 21)",
			gradient:
				"radial-gradient(at bottom left, rgb(24, 26, 27), rgb(18, 20, 21), black)",
		},
	},
	typography: {
		fontFamily: [
			'"Inter"',
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		fontSize: 16,
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					scrollBehavior: "smooth",
				},
				body: {
					scrollBehavior: "smooth",
				},
			},
		},
	},
})

export default theme
