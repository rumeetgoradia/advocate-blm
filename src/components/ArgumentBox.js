import "./styles/ArgumentBox.scss"

import React, { useState } from "react"

import { Redirect } from "react-router-dom"

export default function ArgumentBox({ argument, index, delay }) {
	const [scrollTo, setScrollTo] = useState(null)
	const [redirect, setRedirect] = useState(false)

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
					className={`argument-box animate__animated animate__fadeIn ${
						delay ? "" : "animate__faster"
					}`}
					style={{ animationDelay: `${delay ? 150 * index + 300 : 0}ms` }}
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
						{argument.assertions ? (
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
