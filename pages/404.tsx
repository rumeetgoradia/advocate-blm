import { Heading } from "@chakra-ui/layout"
import { PageLayout } from "@components/Layout"
import type { NextPage } from "next"

const _404Page: NextPage = () => {
	return (
		<PageLayout isMainPage title="Not Found">
			<Heading
				as="h3"
				textAlign="center"
				fontWeight={300}
				fontSize="8xl"
				mt={20}
			>
				404
			</Heading>
			<Heading as="h4" textAlign="center" fontWeight={400}>
				There&apos;s nothing here.
			</Heading>
		</PageLayout>
	)
}

export default _404Page
