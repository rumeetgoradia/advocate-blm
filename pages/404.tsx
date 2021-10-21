import { Box } from "@chakra-ui/layout"
import type { NextPage } from "next"

const NotFound: NextPage = ({ argumentz }) => {
	console.log(argumentz)
	return (
		<>
			<Box h="20000px">404 my guy</Box>
		</>
	)
}

export default NotFound
