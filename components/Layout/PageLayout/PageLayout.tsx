import { Box } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import { SITE_NAME } from "@constants"
import { NextSeo } from "next-seo"
import { Header } from "./Header"

type PageLayoutProps = (
	| {
			isHomePage: true
			title?: never
	  }
	| {
			isHomePage?: false
			title: string
	  }
) & {
	isMainPage?: boolean
	children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({
	children,
	isHomePage,
	isMainPage,
	title,
}) => {
	return (
		<>
			<NextSeo
				title={isHomePage ? SITE_NAME : title}
				titleTemplate={isHomePage ? "%s" : `%s — ${SITE_NAME}`}
			/>
			<Box px={4} minH="100vh">
				<Container maxW="container.md" pt="4.5rem" pb={8}>
					{(isHomePage || isMainPage) && <Header />}
					{children}
				</Container>
			</Box>
		</>
	)
}

export default PageLayout
