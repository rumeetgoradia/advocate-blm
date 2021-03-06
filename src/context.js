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
				order: "fields.title",
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
		const arg = tempArgs.find((tempArg) => tempArg.slug === slug)
		return arg
	}

	clearSearchTerm = () => {
		this.handleChange({
			target: {
				value: "",
			},
		})
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
			arg.title.toLowerCase().startsWith(searchTerm.toLowerCase().trim())
		)
		argsIncludes = argsIncludes.filter(
			(arg) =>
				arg.title.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
				!argsStartsWith.includes(arg)
		)
		argsStartsWith = argsStartsWith.concat(argsIncludes)
		this.setState({
			sortedArguments: argsStartsWith,
		})
	}

	updateFrequency = (id) => {
		Client.getEntry(id)
			.then((entry) => {
				const freq = entry.fields.frequency + 1
				entry.fields.frequency = freq
				// console.log(entry)
				// entry.update()
				// return entry.update()
			})
			.catch((err) => console.log(err))
	}

	render() {
		return (
			<ArgumentContext.Provider
				value={{
					...this.state,
					getArgument: this.getArgument,
					clearSearchTerm: this.clearSearchTerm,
					handleChange: this.handleChange,
					updateFrequency: this.updateFrequency,
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
