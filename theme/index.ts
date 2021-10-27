import { extendTheme } from "@chakra-ui/react"
import { StyleFunctionProps } from "@chakra-ui/theme-tools"
import { createTransition } from "@utils"

const theme = extendTheme({
	styles: {
		global: (props: StyleFunctionProps) => ({
			html: {
				scrollBehavior: "smooth",
				bg: "black",
				color: "white",
				fontFamily:
					"Roboto,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
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
	components: {
		Input: {
			variants: {
				filled: {
					field: {
						bg: "rgba(66,66,66,0.35)",
						opacity: 0.75,
						px: 3,

						_hover: {
							bg: "rgba(66,66,66,0.675)",
							opacity: 1,
						},
						_focus: {
							bg: "gray.800",
							borderColor: "gray.800",
							outline: "none",
							opacity: 1,
							"&[aria-invalid=true], &[data-invalid]": {
								borderColor: "#E53E3E",
							},
						},
					},
				},
			},
		},
		Textarea: {
			variants: {
				filled: {
					bg: "rgba(66,66,66,0.35)",
					opacity: 0.75,
					px: 3,

					_hover: {
						bg: "rgba(66,66,66,0.675)",
						opacity: 1,
					},
					_focus: {
						bg: "gray.800",
						borderColor: "gray.800",
						outline: "none",
						opacity: 1,
						"&[aria-invalid=true], &[data-invalid]": {
							borderColor: "#E53E3E",
						},
					},
				},
			},
			defaultProps: {
				resize: "vertical",
			},
		},
		Checkbox: {
			baseStyle: {
				control: {
					bg: "rgba(66,66,66,0.375)",
					opacity: 0.75,
					border: "none",
					transition: createTransition(["opacity", "background-color"]),
					_hover: {
						opacity: 1,
						bg: "rgba(66,66,66,0.675)",
					},
					_focus: {
						bg: "gray.800",
						boxShadow: "",
					},
					_checked: {
						bg: "rgba(66,66,66,0.375)",
						_hover: {
							bg: "rgba(66,66,66,0.675)",
						},
					},
				},
				label: {
					ml: 4,
					fontSize: "sm",
				},
			},
		},
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
		heading: "Roboto",
		body: "Roboto",
	},
})

export default theme
