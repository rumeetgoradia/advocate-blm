import "spinkit/spinkit.min.css"

import React from "react"

export default function Loader({ className }) {
	return (
		<div
			className={`section d-flex justify-content-center align-content-center ${className}`}
			style={{ height: "100vh", position: "absolute", width: "100vw" }}
		>
			<div
				className="sk-wave"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="sk-wave-rect"></div>
				<div className="sk-wave-rect"></div>
				<div className="sk-wave-rect"></div>
				<div className="sk-wave-rect"></div>
				<div className="sk-wave-rect"></div>
			</div>
		</div>
	)
}
