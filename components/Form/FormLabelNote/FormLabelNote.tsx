import { Text } from "@chakra-ui/layout"

type FormLabelNoteProps = {
	children: React.ReactNode
}

const FormLabelNote: React.FC<FormLabelNoteProps> = ({ children }) => {
	return (
		<Text fontSize="sm" opacity={0.75} fontWeight={300} mb={2} mt={-2}>
			{children}
		</Text>
	)
}

export default FormLabelNote
