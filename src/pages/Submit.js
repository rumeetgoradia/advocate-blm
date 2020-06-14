import "./styles/Submit.scss"

import * as yup from "yup"

import { Col, Container, Row } from "react-bootstrap"
import { Field, Form, Formik, useField } from "formik"
import React, { useEffect } from "react"
import {
	RequiredTextInput,
	StyledLabeledCheckbox,
	StyledTextArea,
} from "../components/Inputs"

import Head from "../components/Head"
import Header from "../components/Header"
import InfoSection from "../components/styles/InfoSection"

export default function Submit() {
	useEffect(() => {
		window.scrollTo(0, 0)
	})

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&")
	}

	const RequiredInputField = (props) => {
		const [field, meta] = useField(props)
		const errorText = meta.error && meta.touched ? meta.error : ""
		return <RequiredTextInput {...field} helperText={errorText} />
	}

	const CheckBoxField = ({ label, ...props }) => {
		const [field] = useField(props)
		return <StyledLabeledCheckbox {...field} label={label} />
	}

	const validationSchema = yup.object({
		name: yup.string().required("Please enter your name."),
		email: yup
			.string()
			.email("Please enter a valid email address.")
			.required("Please enter your email address."),
		argument: yup.string().required("Please enter an argument."),
	})

	return (
		<>
			<Head subtitle="Request / Submit Argument" />
			<Container fluid className="section" id="submit">
				<Container>
					<Header />
					<InfoSection className="animate__animated animate__fadeIn">
						<h2>Request / Submit Argument</h2>
						<p>
							Use the form below if you would like to submit information
							regarding a new or existing argument or if you would like to
							request facts, statistics, and/or assertions (expert opinions)
							about a new argument. The form requires your name and email
							address in case I need to contact you regarding your submission,
							and you will be attributed on the page for the argument unless
							otherwise requested.
						</p>
						<p>
							If only requesting an argument, simply fill out the "Argument"
							section of the form and submit. Otherwise, please enter any facts,
							statistics, and/or assertions, along with their sources, in the
							fields below.
						</p>
						<Formik
							initialValues={{
								"bot-field": "",
								"form-name": "argument-submission",
								name: "",
								email: "",
								noAttribution: false,
								argument: "",
								facts: "",
								assertions: "",
							}}
							onSubmit={(data, { setSubmitting, resetForm }) => {
								setSubmitting(true)
								fetch("/", {
									method: "POST",
									headers: {
										"Content-Type": "application/x-www-form-urlencoded",
									},
									body: encode({ ...data }),
								})
									.then(() => {
										setSubmitting(false)
										resetForm()
									})
									.catch((error) =>
										alert(
											"There was an issue when submitting your form. Please try again later!"
										)
									)
							}}
							validationSchema={validationSchema}
						>
							{({
								values,
								isSubmitting,
								handleChange,
								handleBlur,
								handleSubmit,
							}) => {
								return (
									<Form
										data-netlify="true"
										data-netlify-honeypot="bot-field"
										id="argument-form"
									>
										<Field type="hidden" name="bot-field" />
										<Field type="hidden" name="form-name" />
										<Row md={3} xs={1}>
											<Col>
												<label htmlFor="name">
													<h3>Name</h3>
												</label>
												<RequiredInputField name="name" type="input" />
											</Col>
											<Col>
												<label htmlFor="email">
													<h3>Email</h3>
												</label>
												<RequiredInputField name="email" type="input" />
											</Col>
											{/* <Col>
												<CheckBoxField
													name="noAttribution"
													type="checkbox"
													label="I would not like to be attributed for my contribution."
												/>
											</Col> */}
											<Col
												className="d-flex align-items-center"
												id="checkbox-container"
											>
												<Row className="d-flex align-items center justify-content-center">
													<Col
														xs={1}
														className="d-flex align-items-center justify-content-center"
													>
														<CheckBoxField
															name="noAttribution"
															type="checkbox"
														/>
													</Col>
													<Col xs={9} className="d-flex align-items-end m-0">
														<label
															htmlFor="noAttribution"
															style={{ margin: 0 }}
														>
															<h4>
																I would not like to be attributed for my
																contribution.
															</h4>
														</label>
													</Col>
												</Row>
											</Col>
										</Row>
										<Row>
											<Col>
												<label htmlFor="argument">
													<h3>Argument</h3>
													<h5>
														Please enter an argument that you would like to see
														countered on this website.
													</h5>
												</label>
												<RequiredInputField name="argument" type="input" />
											</Col>
										</Row>
										<Row>
											<Col>
												<label htmlFor="argument">
													<h3>Facts</h3>
													<h5>
														Do you have any facts or statistics that would
														counter the above argument? If so, please enter each
														fact or statistic as a direct quote on a new line,
														followed by the URL of its source in parentheses.
													</h5>
												</label>
												<Field name="facts" type="text" as={StyledTextArea} />
											</Col>
										</Row>
										<Row>
											<Col>
												<label htmlFor="argument">
													<h3>Assertions</h3>
													<h5>
														Do you have any assertions (expert opinions) that
														would counter the above argument? If so, please
														enter each assertion as a direct quote on a new
														line, followed by the URL of its source in
														parentheses.
													</h5>
												</label>
												<Field
													name="assertions"
													type="text"
													as={StyledTextArea}
												/>
											</Col>
										</Row>
										<button
											type="submit"
											disabled={isSubmitting}
											id="submit-button"
										>
											Submit
										</button>
										{/* <pre style={{ color: "white", marginTop: 50 }}>
											{JSON.stringify(values, null, 2)}
										</pre> */}
									</Form>
								)
							}}
						</Formik>
					</InfoSection>
				</Container>
			</Container>
		</>
	)
}
