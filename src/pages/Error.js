import { Col, Container, Row } from "react-bootstrap"

import Head from "../components/Head"
import Header from "../components/Header"
import React from "react"

export default function Error() {
	return (
		<>
			<Head subtitle="404" />
			<Container fluid className="section" id="about">
				<Container>
					<Header />
					<Row>
						<Col
							className="d-flex justify-content-center mt-4"
							style={{ flexDirection: "column", textAlign: "center" }}
						>
							<h1
								style={{ fontSize: "18vmax", fontWeight: 900 }}
								className="m-0"
							>
								404
							</h1>
							<h2
								style={{ fontSize: "4vmax", fontWeight: 300 }}
								className="my-1"
							>
								There's nothing here.
							</h2>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	)
}
