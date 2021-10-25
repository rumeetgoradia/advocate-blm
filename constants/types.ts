/* Contentful */
export type Argument = {
	title: string
	slug: string
	facts?: Evidence[]
	assertions?: Evidence[]
	images?: ContentfulImage[]
	imageSourceNums?: number[]
	sources?: Source[]
}

export type Evidence = {
	text: string
	sourceNum: number
	sourceInfo?: string
}

export type Source = {
	url: string
	title: string
	year?: number
}

export type ContentfulImage = {
	fields: {
		file: {
			details: {
				image: {
					height: number
					width: number
				}
			}
			url: string
		}
	}
}

export type ContentfulArgumentItem = {
	fields: Argument
	sys: {
		id: string
	}
}

/* Navigation */
export type NavItem = {
	title: string
	path: string
	icon: React.ReactElement
}
