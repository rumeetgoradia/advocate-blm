import React, { Component } from "react"

import Client from "./Contentful"

const ArgumentContext = React.createContext()

class ArgumentProvider extends Component {
	state = {
		_arguments: [],
		sortedArguments: [],
		loading: true,
		searchTerm: "",
	}

	getData = async () => {
		try {
			let response = await Client.getEntries({
				content_type: "argument",
				order: "-fields.frequency,fields.title",
			})
			let _arguments = this.formatData(response.items)
			this.setState({
				_arguments,
				sortedArguments: _arguments,
				loading: false,
			})
		} catch (error) {
			console.log(error)
		}
	}

	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id
			let argument = { ...item.fields, id }
			return argument
		})
		return tempItems
	}

	componentDidMount() {
		this.getData()
	}

	getArgument = (slug) => {
		let tempArgs = [...this.state._arguments]
		const arg = tempArgs.find((arg) => arg.slug === slug)
		return arg
	}

	handleChange = (event) => {
		this.setState(
			{
				searchTerm: event.target.value,
			},
			this.filterArguments
		)
	}

	filterArguments = () => {
		let { _arguments, searchTerm } = this.state
		let argsStartsWith = [..._arguments]
		let argsIncludes = [..._arguments]
		argsStartsWith = argsStartsWith.filter((arg) =>
			arg.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
		)
		argsIncludes = argsIncludes.filter((arg) =>
			arg.toLowerCase().includes(searchTerm.toLowerCase().trim())
		)
		argsStartsWith.concat(argsIncludes)
		this.setState({
			sortedArguments: argsStartsWith,
		})
	}

	render() {
		return (
			<ArgumentContext.Provider
				value={{
					...this.state,
					getArgument: this.getArgument,
					handleChange: this.handleChange,
				}}
			>
				{this.props.children}
			</ArgumentContext.Provider>
		)
	}
}

const ArgumentConsumer = ArgumentContext.Consumer

export function withArgumentConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
			<ArgumentConsumer>
				{(value) => <Component {...props} context={value} />}
			</ArgumentConsumer>
		)
	}
}

export { ArgumentProvider, ArgumentConsumer, ArgumentContext }
