import "./styles/ArgumentInfoBox.scss"

import { Link } from "react-scroll"
import React from "react"

export default function ArgumentInfoBox({
	image,
	text,
	sourceNum,
	sourceInfo,
	index,
}) {
	return (
		<div
			className="argument-info-box animate__animated animate__fadeIn"
			style={{ animationDelay: `${150 * index + 300}ms` }}
		>
			{image ? (
				<img
					src={image.fields.file.url}
					className="img-fluid"
					alt={`Fact/Stat #${index + 1}`}
				/>
			) : (
				<p>"{text}"</p>
			)}
			<div className="source-container">
				<Link
					to={`source-${sourceNum - 1}`}
					delay={200}
					smooth={true}
					offset={0}
					className="source-num"
				>
					{sourceNum}
				</Link>
				{sourceInfo ? <h6>{sourceInfo}</h6> : null}
			</div>
		</div>
	)
}
