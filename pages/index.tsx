import { Box } from "@chakra-ui/layout"
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

const Home: NextPage = ({ argumentz }) => {
	console.log(argumentz)
	return (
		<>
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

export default Home
