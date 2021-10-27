import { Button } from "@chakra-ui/button"
import { Checkbox } from "@chakra-ui/checkbox"
import { Input } from "@chakra-ui/input"
import { Box, Flex, GridItem, Text, VStack } from "@chakra-ui/layout"
import { Grid, useToast } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/textarea"
import { FormItem, FormLabelNote } from "@components/Form"
import { ContentSection, PageLayout, Paragraphs } from "@components/Layout"
import { EMAIL_REGEX, SubmissionData } from "@constants"
import { createTransition } from "@utils"
import type { NextPage } from "next"
import { useState } from "react"
import { useForm } from "react-hook-form"

const SubmitPage: NextPage = () => {
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<SubmissionData>()

	const toast = useToast()

	const onSubmit = (values: SubmissionData) => {
		setIsSubmitting(true)
		fetch("/api/submit", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		}).then((res) => {
			if (res.status === 200) {
				toast({
					title: "Argument submitted!",
					description:
						"Your submission has been received. Thank you for your contribution!",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "top-right",
					onCloseComplete: reset,
				})
			} else {
				toast({
					title: "Error!",
					description:
						"We ran into a problem processing your submission. Please try again later!",
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top-right",
				})
			}
			setIsSubmitting(false)
		})
	}

	return (
		<PageLayout title="Submit Argument" isMainPage>
			<ContentSection title="Submit Argument" mt={{ base: 8, sm: 0 }}>
				<VStack spacing={5} justify="flex-start" align="flex-start">
					<Paragraphs>
						<Text>
							Use the form below if you would like to submit information
							regarding a new or existing argument or if you would like to
							request facts, statistics, and/or assertions (expert opinions)
							about a new argument. The form requires your name and email
							address in case I need to contact you regarding your submission,
							and you will be attributed on the page for the argument unless
							otherwise requested.
						</Text>
						<Text>
							If you want to only request an argument, simply fill out the
							&quot;Argument&quot; field of the form and submit. Otherwise,
							please enter any facts, statistics, and/or assertions, along with
							their sources, in the fields below.
						</Text>
					</Paragraphs>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input type="hidden" name="url" />
						<Grid templateColumns="repeat(4, 1fr)" gap={5}>
							<GridItem colSpan={{ base: 4, sm: 2 }}>
								<FormItem label="name" isRequired error={errors.name}>
									<Input
										variant="filled"
										id="name"
										{...register("name", {
											required: "Please enter your name.",
										})}
									/>
								</FormItem>
							</GridItem>
							<GridItem colSpan={{ base: 4, sm: 2 }}>
								<FormItem label="email" isRequired error={errors.email}>
									<Input
										variant="filled"
										id="email"
										{...register("email", {
											required: "Please enter your email.",
											pattern: {
												value: EMAIL_REGEX,
												message: "Please enter a valid email address.",
											},
										})}
									/>
								</FormItem>
							</GridItem>
							<GridItem colSpan={4}>
								<FormItem label="argument" isRequired error={errors.argument}>
									<FormLabelNote>
										Please enter an argument that you would like to see
										countered on this website.
									</FormLabelNote>
									<Textarea
										variant="filled"
										id="argument"
										{...register("argument", {
											required: "Please enter an argument.",
										})}
									/>
								</FormItem>
							</GridItem>
							<GridItem colSpan={4}>
								<FormItem label="facts">
									<FormLabelNote>
										Please provide any facts or statistics that counter the
										argument you entered, along with any relevant sources.
									</FormLabelNote>
									<Textarea
										variant="filled"
										id="facts"
										{...register("facts")}
									/>
								</FormItem>
							</GridItem>
							<GridItem colSpan={4}>
								<FormItem label="assertions">
									<FormLabelNote>
										Please provide any assertions by authority that counter the
										argument you entered, along with any relevant sources.
									</FormLabelNote>
									<Textarea
										variant="filled"
										id="assertions"
										{...register("assertions")}
									/>
								</FormItem>
							</GridItem>
							<GridItem colSpan={{ base: 4, md: 3 }}>
								<Flex justify={{ base: "center", md: "flex-start" }}>
									<Checkbox
										defaultChecked
										size="lg"
										{...register("attribution")}
									>
										<Box as="span" fontSize="md">
											I would like to be attributed for my contribution.
										</Box>
									</Checkbox>
								</Flex>
							</GridItem>
							<GridItem colSpan={{ base: 4, md: 1 }}>
								<Button
									isLoading={isSubmitting}
									isDisabled={isSubmitting}
									type="submit"
									w="full"
									bg="gray.800"
									opacity={0.75}
									textTransform="uppercase"
									fontWeight={500}
									letterSpacing="2px"
									border="1px"
									borderColor="transparent"
									transition={createTransition([
										"letter-spacing",
										"opacity",
										"border-color",
									])}
									_hover={{
										opacity: 1,
										letterSpacing: "3px",
									}}
									_focus={{
										opacity: 1,
										letterSpacing: "3px",
										borderColor: "white",
									}}
									_active={{
										letterSpacing: "2px",
									}}
								>
									Submit
								</Button>
							</GridItem>
						</Grid>
					</form>
				</VStack>
			</ContentSection>
		</PageLayout>
	)
}

export default SubmitPage
