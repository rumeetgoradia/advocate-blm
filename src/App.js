import "./App.scss"

import { Route, Switch } from "react-router-dom"

import Argument from "./pages/Argument"
import Home from "./pages/Home"
import Info from "./pages/Info"
import Navbar from "./components/Navbar"
import React from "react"
import ScrollToTop from "./components/ScrollToTop"

function App() {
	return (
		<div id="body">
			<div className="background-container"></div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/arguments/:argNo" component={Argument} />
				<Route exact path="/info" component={Info} />
			</Switch>
			<ScrollToTop />
		</div>
	)
}

export default App
