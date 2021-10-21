import "./styles/Navbar.scss"

import { FaDollarSign, FaHome, FaInfoCircle, FaPencilAlt } from "react-icons/fa"
import React, { useEffect, useState } from "react"

import { NavLink } from "react-router-dom"
import { withArgumentConsumer } from "../context"

function Navbar() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 60 || window.scrollY > 60)
	}
	return (
		<div id="navbar" className={`${scrolled ? "scrolled" : ""}`}>
			<NavLink
				activeClassName="active-nav-link"
				className="nav-link"
				to="/"
				title="Home"
				exact
			>
				<div>
					<FaHome />
				</div>
			</NavLink>
			<NavLink
				activeClassName="active-nav-link"
				className="nav-link"
				to="/about"
				title="About"
				exact
			>
				<div>
					<FaInfoCircle />
				</div>
			</NavLink>
			<NavLink
				activeClassName="active-nav-link"
				className="nav-link"
				to="/submit"
				title="Request / Submit"
				exact
			>
				<div>
					<FaPencilAlt />
				</div>
			</NavLink>
			<a
				className="nav-link"
				href="https://blacklivesmatters.carrd.co/#donate"
				title="Donate (external link)"
			>
				<div>
					<FaDollarSign />
				</div>
			</a>
			{/* also other voices w microphone */}
		</div>
	)
}

export default withArgumentConsumer(Navbar)
