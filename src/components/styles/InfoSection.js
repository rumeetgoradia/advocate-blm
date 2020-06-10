import styled from "styled-components"

const InfoSection = styled.div`
	margin-top: 3rem;
	&:last-child {
		margin-bottom: 0;
	}
	h2 {
		display: inline-block;
		line-height: 1;
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 2px;
		padding: 0.5rem 0;
		border-radius: 0.25rem;
		transition: all 0.3s linear;
	}
	p {
		opacity: 0.85;
		transition: all 0.3s linear;
		font-size: 1rem;
		margin-bottom: 1rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
	&:hover {
		h2 {
			letter-spacing: 3px;
			padding: 0.5rem 1rem;
			background: whitesmoke;
			color: black;
		}
		p {
			opacity: 1;
		}
	}
`

export default InfoSection
