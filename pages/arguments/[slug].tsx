import { Heading, Text, VStack } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/react"
import { ArgumentContent } from "@components/Argument"
import { ContentSection, PageLayout } from "@components/Layout"
import { ContentfulArgumentItem } from "constants/types"
import { createClient } from "contentful"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { getPlaiceholder } from "plaiceholder"
import Masonry from "react-masonry-css"

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID as string,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
})

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await client.getEntries({ content_type: "argument" })

	const paths = (res.items as ContentfulArgumentItem[]).map((item) => {
		return {
			params: {
				slug: item.fields.slug,
			},
		}
	})

	return {
		paths,
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const res = await client.getEntries({
		content_type: "argument",
		"fields.slug": params?.slug,
	})

	if (!res.items.length) {
		return {
			notFound: true,
		}
	}

	const argument: ContentfulArgumentItem = res
		.items[0] as ContentfulArgumentItem

	const imageBase64s = []
	if (argument.fields.images) {
		for (let image of argument.fields.images) {
			const base64 = await getPlaiceholder(`https:${image.fields.file.url}`)
			imageBase64s.push(base64)
		}
	}
	// (
	// 	res.items[0] as ContentfulArgumentItem
	// ).fields.images?.map(
	// 	async (image) => await getPlaiceholder(image.fields.file.url)
	// )

	return {
		props: {
			argument,
			imageBase64s,
		},
		revalidate: 100,
	}
}

type ArgumentPageProps = {
	argument: ContentfulArgumentItem
	imageBase64s: string[]
}

const ArgumentPage: NextPage<ArgumentPageProps> = ({
	argument,
	imageBase64s,
}) => {
	if (!argument) return <div>loading</div>

	const { title, assertions, facts, imageSourceNums, images, sources } =
		argument.fields

	return (
		<PageLayout title={title}>
			<VStack
				spacing={12}
				w="full"
				justify="flex-start"
				align="flex-start"
				sx={{
					".argument-evidence-grid": {
						display: "flex",
						ml: -5,
						w: "auto",
					},
					".argument-evidence-grid-col": {
						pl: 5,
						bgClip: "padding-box",
					},
				}}
			>
				<Box w="full">
					<Heading fontWeight={700} mb={6} fontSize="3xl">
						{title}
					</Heading>
					<Box
						as="hr"
						borderColor="white"
						border="2px solid"
						w="8%"
						minW="25px"
						m={0}
					/>
				</Box>
				{(facts || images) && (
					<ContentSection
						title="Facts & Statistics"
						position="relative"
						mb="-1.25rem !important"
					>
						<Box position="absolute" top="-3.75rem" id="facts" h={1} w={1} />
						<Masonry
							className="argument-evidence-grid"
							columnClassName="argument-evidence-grid-col"
							breakpointCols={{ default: 2, 640: 1 }}
						>
							{facts?.map((fact) => (
								<ArgumentContent
									text={fact.text}
									sourceNum={fact.sourceNum}
									sourceInfo={fact.sourceInfo}
									key={`${fact.text}-fact`}
								/>
							))}
							{images?.map((image, index) =>
								imageSourceNums ? (
									<ArgumentContent
										image={image}
										sourceNum={imageSourceNums[index]}
										blurDataURL={imageBase64s[index]}
										key={`${image.fields.file.url}-image`}
									/>
								) : (
									<></>
								)
							)}
						</Masonry>
					</ContentSection>
				)}
				{assertions && (
					<ContentSection
						title="Authoritative Assertions"
						position="relative"
						mb="-1.25rem !important"
					>
						<Box
							position="absolute"
							top="-3.75rem"
							id="assertions"
							h={1}
							w={1}
						/>
						<Masonry
							className="argument-evidence-grid"
							columnClassName="argument-evidence-grid-col"
							breakpointCols={{ default: 2, 640: 1 }}
						>
							{assertions?.map((assertion) => (
								<ArgumentContent
									text={assertion.text}
									sourceNum={assertion.sourceNum}
									sourceInfo={assertion.sourceInfo}
									key={`${assertion.text}-assertion`}
								/>
							))}
						</Masonry>
					</ContentSection>
				)}
				{sources && (
					<ContentSection title="Sources" h="2000px" position="relative">
						<Box position="absolute" top="-3.75rem" id="sources" h={1} w={1} />
						<Text>Source</Text>
					</ContentSection>
				)}
			</VStack>
		</PageLayout>
	)
}

export default ArgumentPage
