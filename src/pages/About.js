import React, { useEffect } from "react"

import { Container } from "react-bootstrap"
import Head from "../components/Head"
import Header from "../components/Header"
import InfoSection from "../components/styles/InfoSection"
import { Link } from "react-router-dom"

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<>
			<Head subtitle="About" />
			<Container fluid className="section" id="about">
				<Container>
					<Header />
					<InfoSection
						className="animate__animated animate__fadeIn"
						style={{ animationDelay: `${150 + 300}ms` }}
					>
						<h2>Purpose</h2>
						<p>
							<em>Advocate Black Lives Matter</em> was built with the intention
							of assisting in conversations regarding the Black Lives Matter
							movement. The legitimacy of the movement is still somehow a point
							of contention for many, and those who argue against it often state
							that the opposing side relies too heavily on emotion and not
							enough on facts. This website’s primary purpose is to address that
							claim and act as a comprehensive guide to help engage in
							fact-based advocacy. It aims to educate readers about the
							undeniable validity of Black Lives Matter, as well as the
							movement's foundation and motivation.
						</p>
					</InfoSection>
					<InfoSection
						className="animate__animated animate__fadeIn"
						style={{ animationDelay: `${150 * 2 + 300}ms` }}
					>
						<h2>Content</h2>
						<p>
							The landing page of this website contains a list of arguments that
							are often used by those that downplay the Black Lives Matter
							movement. Clicking on any of these arguments will bring you to a
							separate page filled with information that can be used to counter
							the specific argument. You can also instead click on one of the
							inner boxes of the landing page arguments to automatically skip
							directly to the respective section of the counter-argument page
							when it loads.
						</p>
						<p>
							Each counter-argument page contains an combination of facts,
							statistics, and assertions (expert opinions), as well as their
							respective sources. This data comes directly from various
							reputable sources and well-studied professionals;{" "}
							<strong>
								<em>
									all facts, statistics, and assertions are taken as direct
									quotes and include none of my personal opinion.
								</em>
							</strong>{" "}
							Each piece of information includes a source number that indicates
							from which of the sources at the bottom of the page the
							information was pulled. Each of the sources links directly to the
							webpage that contains the quoted material.
						</p>
						<p>
							New arguments are being added and old arguments are being updated
							on a daily basis through my own research. If you would like to
							request information regarding a specific argument or submit your
							own, please review the <em>Request / Submit Argument</em> section
							below.
						</p>
					</InfoSection>
					<InfoSection
						className="animate__animated animate__fadeIn"
						style={{ animationDelay: `${150 * 3 + 300}ms` }}
					>
						<h2>Request / Submit Argument</h2>
						<p>
							If you would like to contribute to the information presented on{" "}
							<em>Advocate Black Lives Matter</em>, you can visit the{" "}
							<Link
								className="inline-link"
								to="/submit"
								title="Request / Submit Argument"
							>
								Submissions page
							</Link>{" "}
							to submit or request data about a specific argument against the
							movement. If you would like to request an argument, please enter
							just the argument and submit the form; else, please fill out all
							relevant information according to the form, along with credible
							sources to match any facts, statistics, and expert opinions that
							you submit. You will be attributed for your contribution unless
							specified otherwise!
						</p>
					</InfoSection>
					<InfoSection
						className="animate__animated animate__fadeIn"
						style={{ animationDelay: `${150 * 4 + 300}ms` }}
					>
						<h2>Additional Info</h2>
						<p>
							I began developing this website as a project meant to educate
							myself on the Black Lives Matter movement. I realized quickly that{" "}
							<em>Advocate Black Lives Matter</em> would probably be useful to a
							lot of other people as well, so I decided to publish it.
						</p>
						<p>
							This project was developed using React, and its content is managed
							through Contentful. If you're curious about the details of the
							website's development, you can check out the{" "}
							<a
								href="https://github.com/rumeetgoradia/advocate-blm"
								className="inline-link"
								title="GitHub Repo (external link)"
							>
								GitHub repository
							</a>
							.
						</p>
						<p>
							Thanks for visiting, and I hope this was at least a bit useful to
							you!
						</p>
					</InfoSection>
				</Container>
			</Container>
		</>
	)
}
