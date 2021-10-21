import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"
import { ArgumentProvider } from "./context"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

require("typeface-roboto")
require("animate.css")

ReactDOM.render(
	<ArgumentProvider>
		<Router>
			<App />
		</Router>
	</ArgumentProvider>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
