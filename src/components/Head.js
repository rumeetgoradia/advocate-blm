import { Helmet } from "react-helmet"
import React from "react"

export default function Head({ subtitle }) {
	return (
		<Helmet>
			<title>Advocate BLM{subtitle ? " — " + subtitle : ""}</title>
		</Helmet>
	)
}
