import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect } from "react"

import Header from "../components/Header"
import InfoSection from "../components/styles/InfoSection"

export default function Info() {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<Container fluid className="section" id="info">
			<Container>
				<Header />
				<InfoSection className="animate__animated animate__fadeIn">
					<h2>Purpose</h2>
					<p>
						<em>Advocate Black Lives Matter</em> was built with the intention of
						facilitating conversations regarding the Black Lives Matter
						movement. Astoundingly, the movement is still somehow a point of
						contention, and those who argue against its legitimacy often declare
						that the opposing side relies too heavily on emotion and not enough
						on data. This website's primary purpose is to act as a succinct
						source of fact-based information that can be utilized in the
						advocacy of Black Lives Matter. However, it also serves to educate
						readers about the undeniable validity of Black Lives Matter, as well
						as the movement's foundation and motivation.
					</p>
				</InfoSection>
				<InfoSection className="animate__animated animate__fadeIn">
					<h2>Content</h2>
					<p>
						The landing page of this website contains a list of arguments often
						used by those against the Black Lives Matter movement. Clicking on
						any of these arguments will bring you to a separate page with facts,
						statistics, and/or expert opinions, as well as their respective
						sources. You can also instead click on one of the inner boxes of the
						landing page arguments to automatically skip directly to the
						respective section of the argument page when it loads. This data
						comes directly from various reputable sources and well-studied
						professionals;{" "}
						<strong>
							<em>
								it is necessary to underscore that all facts, statistics, and
								assertations are taken as direct quotes and include none of my
								personal opinion.
							</em>
						</strong>{" "}
						Each fact, statistic, and assertation includes a source number that
						indicates from which of the sources at the bottom of the page the
						information was pulled. Each of the sources links directly to the
						webpage that contains the quoted material.
					</p>
					<p>
						New arguments are being added and old arguments are being updated on
						a daily basis through my own research. If you would like to request
						information regarding a specific argument or submit your own, please
						review the "Request / Submit Argument" below.
					</p>
				</InfoSection>
				<InfoSection className="animate__animated animate__fadeIn">
					<h2>Request / Submit Argument</h2>
				</InfoSection>
			</Container>
		</Container>
	)
}
