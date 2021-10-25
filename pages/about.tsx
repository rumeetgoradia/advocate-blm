import { Text, VStack } from "@chakra-ui/layout"
import { Hyperlink } from "@components/Hyperlink"
import { ContentSection, PageLayout, Paragraphs } from "@components/Layout"
import type { NextPage } from "next"

const AboutPage: NextPage = () => {
	return (
		<PageLayout title="About" isMainPage>
			<VStack spacing={12} mt={{ base: 8, sm: 0 }}>
				<ContentSection title="Purpose">
					<Paragraphs>
						<Text>
							<em>Advocate BLM</em> was built with the intention of providing
							objective evidence for use in the support of the Black Lives
							Matter movement. The legitimacy of BLM is still somehow a point of
							contention for many, and those who argue against it often state
							that the opposing side relies too heavily on emotion and not
							enough on facts. This website’s primary purpose is to address that
							claim and act as a comprehensive guide to help engage in
							fact-based advocacy. It aims to educate readers about the
							undeniable validity of Black Lives Matter, as well as the
							movement&apos;s foundation and motivation.
						</Text>
					</Paragraphs>
				</ContentSection>
				<ContentSection title="Content">
					<Paragraphs>
						<Text>
							The landing page of this website contains a list of arguments that
							are often used by those that downplay the Black Lives Matter
							movement. Clicking on any of these arguments will bring you to a
							separate page filled with information that can be used to counter
							the specific argument. You can also instead click on one of the
							inner boxes of the landing page arguments to automatically skip
							directly to the respective section of the counter-argument page
							when it loads.
						</Text>
						<Text>
							Each counter-argument page contains an combination of facts,
							statistics, and assertions by authority, as well as their
							respective sources. This data comes directly from various
							reputable sources and well-studied professionals;{" "}
							<strong>
								<em>
									all facts, statistics, and assertions are taken as direct
									quotes and include none of my personal opinion
								</em>
							</strong>
							. Each piece of information includes a source number that
							indicates from which of the sources at the bottom of the page the
							information was pulled. Each of the sources links directly to the
							webpage that contains the quoted material.
						</Text>
						<Text>
							New arguments are being added and old arguments are being updated
							on a regular basis through my own research. If you would like to
							submit information regarding a specific argument or request an
							argument to be countered, please review the{" "}
							<em>Submit Argument</em> section below.
						</Text>
					</Paragraphs>
				</ContentSection>
				<ContentSection title="Submit Argument">
					<Paragraphs>
						<Text>
							If you would like to contribute to the information presented on{" "}
							<em>Advocate BLM</em>, you can visit the{" "}
							<Hyperlink href="/submit" title="Submit Argument">
								Submit Argument page
							</Hyperlink>{" "}
							to submit data about a specific argument against the movement. If
							you would like to request an argument, please enter just the
							argument and submit the form; else, please fill out all relevant
							information according to the form, along with credible sources to
							match any facts, statistics, and assertions that you submit. You
							will be attributed for your contribution unless otherwise
							specified!
						</Text>
					</Paragraphs>
				</ContentSection>
				<ContentSection title="Additional Info">
					<Paragraphs>
						<Text>
							This website began as a personal project as I began educating
							myself on the Black Lives Matter movement in the middle of 2020. I
							figured <em>Advocate BLM</em> could be a useful resource to
							others, so I decided to publish it.
						</Text>
						<Text>
							This project was developed using NextJS, and its content is
							managed through Contentful. If you&apos;re curious about the
							details of the website&apos;s development, you can check out the{" "}
							<Hyperlink
								href="https://github.com/rumeetgoradia/advocate-blm"
								title="GitHub Repository [external]"
								isExternal
							>
								GitHub repository
							</Hyperlink>
							.
						</Text>
						<Text>Thanks for visiting, and I hope this was useful to you!</Text>
					</Paragraphs>
				</ContentSection>
			</VStack>
		</PageLayout>
	)
}

export default AboutPage
