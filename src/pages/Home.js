import "./styles/Home.scss"

import { Col, Container, Row } from "react-bootstrap"
import { FaSearch, FaTimes } from "react-icons/fa"
import React, { useEffect, useState } from "react"

import ArgumentBox from "../components/ArgumentBox"
import Header from "../components/Header"
import Loader from "../components/Loader"
import Masonry from "react-masonry-css"
import { withArgumentConsumer } from "../context"

function Home({ context }) {
	const { loading, sortedArguments } = context
	const [delay, setDelay] = useState(true)

	useEffect(() => {
		window.scrollTo(0, 0)

		return () => {}
	}, [])

	useEffect(() => {
		if (!loading) {
			const timeout = setTimeout(() => {
				setDelay(false)
			}, sortedArguments.length * 150 + 300 + 1000)
			return () => {
				clearTimeout(timeout)
			}
		}
	}, [loading])

	if (loading) {
		return (
			<Loader
				className={!loading ? "animate__animated animate__fadeOut" : ""}
			/>
		)
	}

	return (
		<Container fluid className="section" id="home">
			{/* <Row
				id="header-section"
				className="animate__animated animate__fadeIn"
				xs={1}
			>
				<Col>
					<h1 className={`${showSearch ? "show-search" : ""}`}>
						Advocate <span>Black Lives Matter</span>
					</h1>
				</Col>
				<Col id="search-container">
					<input
						type="text"
						value={searchTerm}
						onChange={handleChange}
						className={`search-input ${showSearch ? "show-search" : ""}`}
						placeholder="Search an argument..."
					/>
					<button
						onClick={() => setShowSearch(!showSearch)}
						className={`search-btn ${showSearch ? "show-search" : ""}`}
					>
						<FaSearch
							className={`search-icon ${showSearch ? "show-search" : ""}`}
						/>
						<FaTimes
							className={`cancel search-icon ${
								showSearch ? "show-search" : ""
							}`}
						/>
					</button>
				</Col>
			</Row> */}
			<Header displaySearch={true} />
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
					<ArgumentBox
						argument={arg}
						key={`argument-${index}`}
						index={index}
						delay={delay}
					/>
				))}
			</Masonry>
		</Container>
	)
}

export default withArgumentConsumer(Home)
