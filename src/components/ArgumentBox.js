import "./styles/ArgumentBox.scss"

import { Link } from "react-router-dom"
import React from "react"

export default function ArgumentBox({ argument }) {
	return (
		<div className="argument-box">
			<h1>{argument.title}</h1>
			<div className="tags-container">
				{!argument.facts && !argument.assertion ? (
					<h2 className="in-progress">In Progress</h2>
				) : argument.sources ? (
					<h2>Sources</h2>
				) : null}
			</div>
			<Link to={`/arguments/${argument.slug}`} className="argument-link"></Link>
		</div>
	)
}
