import { extendTheme } from "@chakra-ui/react"
import { StyleFunctionProps } from "@chakra-ui/theme-tools"

const theme = extendTheme({
	styles: {
		global: (props: StyleFunctionProps) => ({
			html: {
				scrollBehavior: "smooth",
				bg: "black",
				color: "white",
			},
			body: {
				scrollBehavior: "smooth",
				bg: "black",
				color: "white",
			},
			"::-webkit-scrollbar-track": {
				background: "black",
			},
			"::-webkit-scrollbar-thumb": {
				background: "gray.700",
				border: "4px solid rgba(0, 0, 0, 0)",
				backgroundClip: "padding-box",
				borderRadius: "9999px",
			},
			"::-webkit-scrollbar": {
				width: "14px",
			},
		}),
	},
	colors: {
		gray: {
			"50": "#fafafa",
			"100": "#f5f5f5",
			"200": "#eeeeee",
			"300": "#e0e0e0",
			"400": "#bdbdbd",
			"500": "#9e9e9e",
			"600": "#757575",
			"700": "#616161",
			"800": "#424242",
			"900": "#212121",
		},
		white: "#f5f5f5",
		black: "#212121",
	},
	fonts: {
		heading: "HeeboVariable",
		body: "HeeboVariable",
	},
})

export default theme
