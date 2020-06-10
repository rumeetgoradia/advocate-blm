import "./styles/Header.scss"

import { Col, Row } from "react-bootstrap"
import { FaSearch, FaTimes } from "react-icons/fa"
import React, { useState } from "react"

import { withArgumentConsumer } from "../context"

function Header({ context, displaySearch }) {
	const { searchTerm, clearSearchTerm, handleChange } = context
	const [showSearch, setShowSearch] = useState(false)
	return (
		<Row
			id="header-section"
			className="animate__animated animate__fadeIn"
			xs={1}
		>
			<Col>
				<h1 className={`${showSearch ? "show-search" : ""}`}>
					Advocate{" "}
					<span className={`blm ${displaySearch ? "wide" : "narrow"}`}>
						B<span className="blm-inner">lack&nbsp;</span>L
						<span className="blm-inner">ives&nbsp;</span>M
						<span className="blm-inner">atter&nbsp;</span>
					</span>
				</h1>
			</Col>
			{displaySearch ? (
				<Col id="search-container">
					<input
						type="text"
						value={searchTerm}
						onChange={handleChange}
						className={`search-input ${showSearch ? "show-search" : ""}`}
						placeholder="Search an argument..."
					/>
					<button
						onClick={() => {
							setShowSearch(!showSearch)
							clearSearchTerm()
						}}
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
			) : null}
		</Row>
	)
}

export default withArgumentConsumer(Header)
