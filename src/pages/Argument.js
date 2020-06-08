import "./styles/Argument.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect, useRef, useState } from "react"

import ArgumentInfoBox from "../components/ArgumentInfoBox"
import Loader from "../components/Loader"
import Masonry from "react-masonry-css"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { scroller } from "react-scroll"
import { withArgumentConsumer } from "../context"

// import { ArgumentContext } from "../context"

function Argument({ context, match, location }) {
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
		return () => {}
	})

	useEffect(() => {
		if (arg) {
			const { scrollTo } = location.state
			console.log(scrollTo)
			// if (factsContainer && factsContainer.current) {
			// 	factsContainer.current.innerHTML = documentToHtmlString(
			// 		arg.facts,
			// 		options
			// 	)
			// }
			// if (assertionContainer && assertionContainer.current) {
			// 	assertionContainer.current.innerHTML = documentToHtmlString(
			// 		arg.assertion,
			// 		options
			// 	)
			// }
			// // context.updateFrequency(arg.id)
			if (scrollTo) {
				scroller.scrollTo(scrollTo, {
					duration: 1500,
					delay: 200,
					smooth: true,
					offset: -60,
				})
			}
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
						<Col className="animate__animated animate__fadeIn animate__fast argument-title">
							<h1>{arg.title}</h1>
						</Col>
					</Row>
					<hr className="animate__animated animate__fadeInLeft animate__faster" />
					{arg.facts ? (
						// <Row>
						// 	<Col className="animate__animated animate__fadeIn animate__fast argument-info">
						// 		<h2 id="facts" name="facts">
						// 			Facts & Statistics
						// 		</h2>
						// 		<div ref={factsContainer}></div>
						// 	</Col>
						// </Row>
						<div className="argument-info animate__animated animate__fadeIn animate__fast">
							<h2 id="facts">Facts & Statistics</h2>
							<Masonry
								className="arg-info-grid facts-grid"
								columnClassName="arg-info-grid-col"
								breakpointCols={{
									default: 2,
									992: 1,
								}}
							>
								{arg.facts.map((fact, index) => {
									return (
										<ArgumentInfoBox
											text={fact.text}
											sourceNum={fact.sourceNum}
											sourceInfo={fact.sourceInfo}
											index={index}
											key={`facts-box-${index}`}
										/>
									)
								})}
								{/* {arg.images
									? arg.images.map((image, index) => {
											return (
												<ArgumentInfoBox
													image={image}
													sourceNum={arg.imageSourceNums[index]}
													index={index}
													key={`image-box-${index}`}
												/>
											)
									  })
									: null} */}
							</Masonry>
						</div>
					) : null}
					{arg.assertions ? (
						<div className="argument-info animate__animated animate__fadeIn animate__fast">
							<h2 id="assertions">Assertions</h2>
							<Masonry
								className="arg-info-grid assertions-grid"
								columnClassName="arg-info-grid-col"
								breakpointCols={{
									default: 2,
									992: 1,
								}}
							>
								{arg.assertions.map((assertion, index) => {
									return (
										<ArgumentInfoBox
											text={assertion.text}
											sourceNum={assertion.sourceNum}
											sourceInfo={assertion.sourceInfo}
											index={index}
											key={`assertions-box-${index}`}
										/>
									)
								})}
							</Masonry>
						</div>
					) : null}
					{arg.sources ? (
						<div className="argument-info animate__animated animate__fadeIn animate__fast">
							<h2 id="sources">Sources</h2>
							<Row id="sources-container" xs={1} sm={2} md={3} lg={4}>
								{arg.sources.map((source, index) => {
									return (
										<Col
											key={`source-${index}`}
											id={`source-${index}`}
											className="source-container text-center animate__animated animate__fadeIn"
											style={{ animationDelay: `${150 * index + 300}ms` }}
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
						</div>
					) : null}
				</Container>
			</Container>
		</>
	)
}
export default withArgumentConsumer(Argument)
