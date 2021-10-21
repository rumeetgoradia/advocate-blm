import "./styles/ScrollToTop.scss"

import React, { useEffect, useState } from "react"

import { ReactComponent as Fist } from "../images/Fist.svg"
import { animateScroll as scroll } from "react-scroll"

export default function ScrollToTop() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	})

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 110 || window.scrollY > 110)
	}

	return (
		<div
			className={`scroll-to-top ${scrolled ? "show" : ""}`}
			onClick={() => scroll.scrollToTop()}
			title={"Scroll to Top"}
		>
			<Fist />
		</div>
	)
}
