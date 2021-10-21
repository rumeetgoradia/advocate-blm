import { Box } from "@chakra-ui/layout"
import { createClient } from "contentful"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID as string,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
})

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await client.getEntries({ content_type: "argument" })

	const paths = res.items.map((item) => {
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
	const { items } = await client.getEntries({
		content_type: "argument",
		"fields.slug": params?.slug,
	})

	if (!items.length) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			argument: items[0],
		},
		revalidate: 100,
	}
}

const Argument: NextPage = ({ argument }) => {
	console.log(argument)

	if (!argument) return <div>loading</div>

	return (
		<>
			<Box h="20000px" />
		</>
	)
}

export default Argument
