import "./styles/Argument.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect, useRef, useState } from "react"

import ArgumentInfoBox from "../components/ArgumentInfoBox"
import Head from "../components/Head"
import InfoSection from "../components/styles/InfoSection"
import Loader from "../components/Loader"
import Masonry from "react-masonry-css"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"
import { scroller } from "react-scroll"
import { withArgumentConsumer } from "../context"

// import { ArgumentContext } from "../context"

function Argument({ context, match, location }) {
	const [arg, setArg] = useState(context.getArgument(match.params.argNo))
	const [factsAndImgsBoxes, setFactsAndImgsBoxes] = useState(null)

	useEffect(() => {
		window.scrollTo(0, 0)
		setArg(context.getArgument(match.params.argNo))
		return () => {}
	})

	useEffect(() => {
		if (arg) {
			let factsBoxes = []
			if (arg.facts) {
				factsBoxes = arg.facts.map((fact, index) => {
					return (
						<ArgumentInfoBox
							text={fact.text}
							sourceNum={fact.sourceNum}
							sourceInfo={fact.sourceInfo}
							index={index}
							key={`facts-box-${index}`}
						/>
					)
				})
			}
			let imgsBoxes = []
			if (arg.images) {
				imgsBoxes = arg.images.map((image, index) => {
					return (
						<ArgumentInfoBox
							image={image}
							sourceNum={arg.imageSourceNums[index]}
							index={arg.facts ? index + arg.facts.length - 1 : index}
							key={`image-box-${index}`}
						/>
					)
				})
			}
			setFactsAndImgsBoxes(factsBoxes.concat(imgsBoxes))
		}
	}, [arg])

	useEffect(() => {
		const { scrollTo } = location.state
		if (scrollTo && factsAndImgsBoxes) {
			scroller.scrollTo(scrollTo, {
				duration: 1500,
				delay: 750,
				smooth: "easeInOutCubic",
				offset: -60,
			})
		}
		return () => {}
	}, [factsAndImgsBoxes])

	if (!arg) {
		return (
			<Loader className={arg ? "animate__animated animate__fadeOut" : ""} />
		)
	}

	return (
		<>
			<Head subtitle={arg.title} />
			<Container fluid className="section" id="argument-page">
				<Container>
					<Row>
						<Col className="animate__animated animate__fadeIn argument-title">
							<h1>{arg.title}</h1>
						</Col>
					</Row>
					<hr className="animate__animated animate__fadeInLeft animate_fast" />
					{factsAndImgsBoxes && factsAndImgsBoxes.length > 0 ? (
						<InfoSection className="animate__animated animate__fadeIn ">
							<h2 id="facts">Facts & Statistics</h2>
							<Masonry
								className="arg-info-grid facts-grid"
								columnClassName="arg-info-grid-col"
								breakpointCols={{
									default: 2,
									992: 1,
								}}
							>
								{factsAndImgsBoxes.map((argInfoBox) => {
									return argInfoBox
								})}
							</Masonry>
						</InfoSection>
					) : null}
					{arg.assertions ? (
						<InfoSection className="animate__animated animate__fadeIn ">
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
						</InfoSection>
					) : null}
					{arg.sources ? (
						<InfoSection className=" animate__animated animate__fadeIn">
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
												<div className="source-content">
													{source.title}
													{source.year ? " (" + source.year + ")" : ""}
												</div>
												<p className="source-number">{index + 1}</p>
											</a>
										</Col>
									)
								})}
							</Row>
						</InfoSection>
					) : null}
				</Container>
			</Container>
		</>
	)
}
export default withArgumentConsumer(Argument)
