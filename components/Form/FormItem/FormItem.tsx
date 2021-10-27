import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control"
import type { FieldError } from "react-hook-form"

type FormItemProps = {
	label: string
	error?: FieldError
	isRequired?: boolean
}

const FormItem: React.FC<FormItemProps> = ({
	label,
	children,
	error,
	isRequired,
}) => {
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel
				htmlFor={label}
				letterSpacing="1px"
				textTransform="uppercase"
				fontWeight={400}
				fontSize="lg"
			>
				{`${label}${isRequired ? " *" : ""}`}
			</FormLabel>
			{children}
			<FormErrorMessage mt={1}>{error?.message}</FormErrorMessage>
		</FormControl>
	)
}

export default FormItem
