import "./App.scss"

import { Route, Switch } from "react-router-dom"

import Argument from "./pages/Argument"
import Home from "./pages/Home"
import React from "react"

function App() {
	return (
		<div id="body">
			<div className="background-container"></div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/arguments/:argNo" component={Argument} />
			</Switch>
		</div>
	)
}

export default App
