import useBaseStyles from "./Base.styles"

const Base: React.FC = ({ children }) => {
	const classes = useBaseStyles()

	return (
		<>
			<div className={classes.root} />
			<div className={classes.container}>{children}</div>
		</>
	)
}

export default Base
