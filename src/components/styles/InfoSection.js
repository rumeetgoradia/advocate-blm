import styled from "styled-components"

const InfoSection = styled.div`
	margin-top: 3rem;
	position: relative;
	&:last-child {
		margin-bottom: 0;
	}
	h2 {
		display: inline-block;
		/* line-height: 1; */
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
		font-weight: 300;
		opacity: 0.85;
		transition: all 0.3s linear;
		font-size: 1rem;
		margin-bottom: 1rem;
		&:last-child {
			margin-bottom: 0;
		}
		.inline-link {
			color: #626262;
			position: relative;
			transition: all 0.3s linear;
			&:after {
				content: "";
				position: absolute;
				width: 0;
				height: 1px;
				bottom: -2px;
				left: 50%;
				background-color: whitesmoke;
				transform: translateX(-50%);
				transition: width 0.3s linear;
			}
			&:hover {
				color: whitesmoke;
				text-decoration: none;
				&:after {
					width: 100%;
				}
			}
		}
	}
	&:hover {
		h2 {
			letter-spacing: 3px;
			padding: 0.5rem calc(1rem - 3px) 0.5rem 1rem;
			background: whitesmoke;
			color: black;
		}
		p {
			opacity: 1;
		}
	}
	@media screen and (max-width: 575px) {
		h2 {
			letter-spacing: 2px;
			padding: 0.5rem calc(1rem - 2px) 0.5rem 1rem;
			background: whitesmoke;
			color: black;
			font-size: 1.25rem;
		}
		&:hover {
			h2 {
				letter-spacing: 2px;
				padding: 0.5rem calc(1rem - 2px) 0.5rem 1rem;
			}
		}
	}
`

export default InfoSection
