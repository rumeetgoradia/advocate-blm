import "./styles/ArgumentBox.scss"

import { Link, Redirect } from "react-router-dom"
import React, { useState } from "react"

export default function ArgumentBox({ argument, index }) {
	const [scrollTo, setScrollTo] = useState(null)
	const [redirect, setRedirect] = useState(false)

	// const initRedirect = (scrollID) => {
	// 	setScrollTo(scrollID)
	// 	console.log(scrollID)
	// 	setRedirect(true)
	// }

	const resetScrollTo = () => {
		setScrollTo(null)
	}

	return (
		<>
			{redirect ? (
				<Redirect
					push
					to={{ pathname: `/arguments/${argument.slug}`, state: { scrollTo } }}
				/>
			) : (
				<div
					onClick={() => setRedirect(true)}
					className="argument-box animate__animated animate__fadeIn"
					style={{ animationDelay: `${150 * index + 300}ms` }}
				>
					<h1>{argument.title}</h1>
					<div className="tags-container">
						{argument.facts ? (
							<h2
								onMouseEnter={() => setScrollTo("facts")}
								onMouseLeave={resetScrollTo}
							>
								Facts
							</h2>
						) : null}
						{argument.assertion ? (
							<h2
								onMouseEnter={() => setScrollTo("assertions")}
								onMouseLeave={resetScrollTo}
							>
								Assertions
							</h2>
						) : null}
						{argument.sources ? (
							<h2
								onMouseEnter={() => setScrollTo("sources")}
								onMouseLeave={resetScrollTo}
							>
								Sources
							</h2>
						) : null}
						{/* {inProgress ? <h2 className="in-progress">In Progress</h2> : null} */}
					</div>
				</div>
			)}
		</>
	)
}
