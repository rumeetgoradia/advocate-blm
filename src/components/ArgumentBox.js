import "./styles/ArgumentBox.scss"

import { Link } from "react-router-dom"
import React from "react"

export default function ArgumentBox({ argument, index }) {
	const inProgress = !argument.facts && !argument.assertion
	return (
		<div
			className="argument-box animate__animated animate__fadeIn"
			style={{ animationDelay: `${150 * index + 300}ms` }}
		>
			<h1>{argument.title}</h1>
			<div className="tags-container">
				{argument.facts ? (
					<h2 style={{ marginRight: ".75rem" }}>Facts</h2>
				) : null}
				{inProgress ? (
					<h2 className="in-progress">In Progress</h2>
				) : argument.sources ? (
					<h2>Sources</h2>
				) : null}
			</div>
			{inProgress ? null : (
				<Link
					to={`/arguments/${argument.slug}`}
					className="argument-link"
				></Link>
			)}
		</div>
	)
}
