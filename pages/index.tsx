import { Box } from "@chakra-ui/layout"
import { SITE_NAME } from "@constants"
import { ContentfulArgumentItem } from "constants/types"
import { createClient } from "contentful"
import type { GetStaticProps, NextPage } from "next"
import { NextSeo } from "next-seo"

export const getStaticProps: GetStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID as string,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
	})

	const res = await client.getEntries({ content_type: "argument" })

	return {
		props: {
			argumentz: res.items,
		},
		revalidate: 100,
	}
}

type HomePageProps = {
	argumentz: ContentfulArgumentItem[]
}

const HomePage: NextPage<HomePageProps> = ({ argumentz }) => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<Box h="20000px">
				{argumentz.map((argument) => (
					<>
						{argument.fields.title}
						<br />
					</>
				))}
			</Box>
		</>
	)
}

export default HomePage
