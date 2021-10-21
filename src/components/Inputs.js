import styled, { css } from "styled-components"

import React from "react"

const textInputCSS = css`
	margin-bottom: 0.25rem;
	border-radius: 0.25rem;
	border: none;
	padding: 0.5rem 0.75rem;
	font-size: 1rem;
	width: 100%;
	background-color: whitesmoke;
	&:focus {
		background-color: white;
	}
`

export const StyledTextArea = styled.textarea`
	${textInputCSS}
`

export const StyledTextInput = styled.input`
	${textInputCSS}
`

export const HelperText = styled.div`
	color: #bb0000;
	font-weight: 500;
	font-size: 0.75rem;
	position: absolute;
`

export function RequiredTextInput({ helperText, ...props }) {
	return (
		<div style={{ position: "relative" }}>
			<StyledTextInput type="text" {...props} />
			{helperText ? <HelperText>{helperText}</HelperText> : null}
		</div>
	)
}

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	/* // Hide checkbox visually but remain accessible to screen readers. */
	/* // Source: https://polished.js.org/docs/#hidevisually */
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`

const CheckIcon = styled.svg`
	fill: none;
	stroke: black;
	stroke-width: 2px;
	position: absolute;
	top: 0;
`

const StyledCheckbox = styled.div`
	display: inline-block;
	width: 16px;
	height: 16px;
	background: ${(props) =>
		props.checked ? "whitesmoke" : "rgba(128,128,128,.75)"};
	border-radius: 3px;
	position: relative;
	cursor: pointer;
	transition: all 0.3s linear;
	/* ${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 4px #626262;
	} */
	${CheckIcon} {
		visibility: ${(props) => (props.checked ? "visible" : "hidden")};
	}
`

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`

const Checkbox = ({ className, checked, ...props }) => (
	<CheckboxContainer className={className}>
		<HiddenCheckbox checked={checked} {...props} />
		<StyledCheckbox checked={checked}>
			<CheckIcon viewBox="0 0 24 24">
				<polyline points="20 6 9 17 4 12" />
			</CheckIcon>
		</StyledCheckbox>
	</CheckboxContainer>
)

export function StyledLabeledCheckbox({ label, ...props }) {
	return (
		<div>
			<label style={{ marginBottom: -4 }}>
				<Checkbox {...props} />
			</label>
		</div>
	)
}
