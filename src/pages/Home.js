import "./styles/Home.scss"

import { Col, Container, Row } from "react-bootstrap"

import ArgumentBox from "../components/ArgumentBox"
import Masonry from "react-masonry-css"
import React from "react"
import { withArgumentConsumer } from "../context"

function Home({ context }) {
	const { loading, sortedArguments } = context
	return (
		<Container fluid className="section" id="home">
			<Container></Container>
			<Masonry
				breakpointCols={{
					default: 3,
					1200: 2,
					768: 1,
				}}
				className="args-grid"
				columnClassName="args-grid-col"
			>
				{sortedArguments.map((arg, index) => (
					<ArgumentBox argument={arg} key={`argument-${index}`} />
				))}
				{sortedArguments.reverse().map((arg, index) => (
					<ArgumentBox argument={arg} key={`argument-${index}`} />
				))}
				{sortedArguments.map((arg, index) => (
					<ArgumentBox argument={arg} key={`argument-${index}`} />
				))}
				{sortedArguments.map((arg, index) => (
					<ArgumentBox argument={arg} key={`argument-${index}`} />
				))}
			</Masonry>
		</Container>
	)
}

export default withArgumentConsumer(Home)
