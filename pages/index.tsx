import { IconButton } from "@chakra-ui/button"
import { Input, InputRightElement } from "@chakra-ui/input"
import { Box, Text } from "@chakra-ui/layout"
import { InputGroup } from "@chakra-ui/react"
import { useTheme } from "@chakra-ui/system"
import { Header } from "@components/Home"
import { Layout } from "@components/Layout"
import { fade } from "@utils"
import { Argument, ContentfulArgumentItem } from "constants/types"
import { createClient } from "contentful"
import type { GetStaticProps, NextPage } from "next"
import { useEffect, useState } from "react"
import { GoSearch } from "react-icons/go"

export const getStaticProps: GetStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID as string,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY as string,
	})

	const res = await client.getEntries({
		content_type: "argument",
		order: "fields.title",
	})

	return {
		props: {
			contentfulArgumentItems: res.items,
		},
		revalidate: 100,
	}
}

type HomePageProps = {
	contentfulArgumentItems: ContentfulArgumentItem[]
}

const HomePage: NextPage<HomePageProps> = ({ contentfulArgumentItems }) => {
	const argumentz = contentfulArgumentItems.map(
		(argumentItem) => argumentItem.fields
	)

	const [filteredArguments, setFilteredArguments] =
		useState<Argument[]>(argumentz)
	const [filter, setFilter] = useState<string>()

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(event.target.value)
	}

	useEffect(() => {
		if (!filter || filter.trim() === "") {
			setFilteredArguments(argumentz)
			return
		}

		const newFilteredArguments: Argument[] = []
		argumentz
			.filter((argument) =>
				argument.title.toLowerCase().startsWith(filter.toLowerCase().trim())
			)
			.forEach((argument) => newFilteredArguments.push(argument))
		argumentz
			.filter(
				(argument) =>
					argument.title.toLowerCase().includes(filter.toLowerCase().trim()) &&
					!newFilteredArguments.includes(argument)
			)
			.forEach((argument) => newFilteredArguments.push(argument))
		setFilteredArguments(newFilteredArguments)
	}, [filter])

	const theme = useTheme()

	return (
		<Layout isHomePage>
			<Header />
			<InputGroup>
				<Input
					placeholder="Search an argument..."
					size="md"
					variant="flushed"
					focusBorderColor="white"
					borderColor={fade(theme.colors.white, 0.75)}
					value={filter}
					onChange={handleFilterChange}
					_placeholder={{
						fontStyle: "italic",
					}}
				/>
				<InputRightElement>
					<IconButton
						aria-label="Search argument"
						icon={<GoSearch />}
						bg="transparent"
						borderRadius="50%"
						_hover={{
							bg: "transparent",
							transform: "scale(1.05)",
						}}
						_focus={{
							bg: "transparent",
							transform: "scale(1.05)",
						}}
						_active={{
							transform: "scale(0.95)",
						}}
					/>
				</InputRightElement>
			</InputGroup>
			<Box h="20000px">
				{filteredArguments.map((argument) => (
					<Text key={argument.title}>{argument.title}</Text>
				))}
			</Box>
		</Layout>
	)
}

export default HomePage
