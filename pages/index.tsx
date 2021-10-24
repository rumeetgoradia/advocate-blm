import { Box } from "@chakra-ui/layout"
import { Header } from "@components/Home"
import { Layout } from "@components/Layout"
import { ContentfulArgumentItem } from "constants/types"
import { createClient } from "contentful"
import type { GetStaticProps, NextPage } from "next"

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
		<Layout isHomePage>
			<Header />
			<Box h="20000px">
				{/* {argumentz.map((argument) => (
							<>
								{argument.fields.title}
								<br />
							</>
						))} */}
			</Box>
		</Layout>
	)
}

export default HomePage
