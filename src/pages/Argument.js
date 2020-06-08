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
					offset: 0,
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
						<Col className="animate__animated animate__fadeInUp animate__fast argument-title">
							<h1>{arg.title}</h1>
						</Col>
					</Row>
					<hr className="animate__animated animate__fadeInLeft animate__faster" />
					{arg.facts ? (
						// <Row>
						// 	<Col className="animate__animated animate__fadeInUp animate__fast argument-info">
						// 		<h2 id="facts" name="facts">
						// 			Facts & Statistics
						// 		</h2>
						// 		<div ref={factsContainer}></div>
						// 	</Col>
						// </Row>
						<>
							<h2 id="facts">Facts & Statistics</h2>
							<Masonry
								className="arg-info-grid facts-grid"
								columnClassName="arg-col-info-grid"
								breakpoints={{ default: 2, 991: 1 }}
							>
								{arg.facts.map((fact, index) => {
									return (
										<ArgumentInfoBox data={fact} key={`facts-box-${index}`} />
									)
								})}
								{arg.images.map((image, index) => {
									return (
										<ArgumentInfoImageBox
											image={image}
											sourceNum={arg.imageSourceNums[index]}
											key={`image-box-${index}`}
										/>
									)
								})}
							</Masonry>
						</>
					) : null}
					{arg.assertions ? (
						<>
							<h2 id="facts">Assertions</h2>
							<Masonry
								className="arg-info-grid facts-grid"
								columnClassName="arg-col-info-grid"
								breakpoints={{ default: 2, 991: 1 }}
							>
								{arg.assertions.map((fact, index) => {
									return (
										<ArgumentInfoBox data={fact} key={`facts-box-${index}`} />
									)
								})}
							</Masonry>
						</>
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
