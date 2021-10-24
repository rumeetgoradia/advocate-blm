import { Box } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import { SITE_NAME } from "@constants"
import { NextSeo } from "next-seo"

type LayoutProps =
	| {
			isHomePage: true
			title?: never
	  }
	| {
			isHomePage?: false
			title: string
	  }

const Layout: React.FC<LayoutProps> = ({ children, isHomePage, title }) => {
	return (
		<>
			<NextSeo
				title={isHomePage ? SITE_NAME : title}
				titleTemplate={isHomePage ? "%s" : `%s — ${SITE_NAME}`}
			/>
			<Box px={4}>
				<Container maxW="container.md" pt={20} pb={8}>
					{children}
				</Container>
			</Box>
		</>
	)
}

export default Layout
