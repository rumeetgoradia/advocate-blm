import "./App.scss"

import { Route, Switch } from "react-router-dom"

import About from "./pages/About"
import Argument from "./pages/Argument"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import React from "react"
import ScrollToTop from "./components/ScrollToTop"
import Submit from "./pages/Submit"

function App() {
	return (
		<div id="body">
			<div className="background-container"></div>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/arguments/:argNo" component={Argument} />
				<Route exact path="/about" component={About} />
				<Route exact path="/submit" component={Submit} />
				<Route component={Error} />
			</Switch>
			<ScrollToTop />
		</div>
	)
}

export default App
