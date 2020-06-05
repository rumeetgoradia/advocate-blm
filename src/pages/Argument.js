import "./styles/Argument.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect, useRef, useState } from "react"

import Loader from "../components/Loader"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { withArgumentConsumer } from "../context"

// import { ArgumentContext } from "../context"

function Argument({ context, match }) {
	let options = {
		renderNode: {
			"embedded-asset-block": (node) =>
				`<div class='img-container'><img class='img-fluid' src="${node.data.target.fields.file.url}"/></div>`,
		},
	}

	const [arg, setArg] = useState(context.getArgument(match.params.argNo))
	const factsContainer = useRef(null)
	const assertionContainer = useRef(null)

	useEffect(() => {
		setArg(context.getArgument(match.params.argNo))
		console.log(match)
		return () => {}
	})

	useEffect(() => {
		if (arg) {
			if (factsContainer && factsContainer.current) {
				factsContainer.current.innerHTML = documentToHtmlString(
					arg.facts,
					options
				)
			}
			if (assertionContainer && assertionContainer.current) {
				assertionContainer.current.innerHTML = documentToHtmlString(
					arg.assertion,
					options
				)
			}
			context.updateFrequency(arg.id)
		}
	}, [arg])

	if (!arg) {
		return (
			<Loader className={arg ? "animate__animated animate__fadeOut" : ""} />
		)
	}

	return (
		<>
			<Container fluid className="section" id="argument-page">
				<Container>
					<Row>
						<Col className="animate__animated animate__fadeInUp animate__fast argument-title">
							<h1>{arg.title}</h1>
						</Col>
					</Row>
					<hr className="animate__animated animate__fadeInLeft animate__faster" />
					{arg.facts ? (
						<Row>
							<Col className="animate__animated animate__fadeInUp animate__fast argument-info">
								<h2>Facts & Statistics</h2>
								<div ref={factsContainer}></div>
							</Col>
						</Row>
					) : null}
					{arg.assertion ? (
						<Row>
							<Col className="animate__animated animate__fadeInUp animate__fast argument-info">
								<h2>Assertion</h2>
								<div ref={assertionContainer}></div>
							</Col>
						</Row>
					) : null}
					{arg.sources ? (
						<Row>
							<Col className="animate__animated animate__fadeInUp animate__fast argument-info">
								<h2>Sources</h2>
								<Row id="sources" xs={1} sm={2} md={3} lg={4}>
									{arg.sources.map((source, index) => {
										return (
											<Col
												key={`source-${index}`}
												className="source-container text-center"
											>
												<a
													href={`${source.url}`}
													title={source.title}
													className="source"
												>
													{source.title}
													{source.year ? " (" + source.year + ")" : ""}
													<p className="source-number">{index + 1}</p>
												</a>
											</Col>
										)
									})}
								</Row>
							</Col>
						</Row>
					) : null}
				</Container>
			</Container>
		</>
	)
}
export default withArgumentConsumer(Argument)
