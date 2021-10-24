import { Chakra } from "@components/Chakra"
import { Navbar } from "@components/Navbar"
import "@fontsource/roboto/latin-300.css"
import "@fontsource/roboto/latin-400-italic.css"
import "@fontsource/roboto/latin-400.css"
import "@fontsource/roboto/latin-500.css"
import "@fontsource/roboto/latin-700.css"
import "@fontsource/roboto/latin-900.css"
import theme from "@theme"
import { DefaultSeo } from "next-seo"
import SeoProps from "next-seo.config"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SeoProps} />
			<Chakra cookies={pageProps.cookies} theme={theme}>
				<Navbar />
				<Component {...pageProps} />
			</Chakra>
		</>
	)
}

export { getServerSideProps } from "@components/Chakra"
