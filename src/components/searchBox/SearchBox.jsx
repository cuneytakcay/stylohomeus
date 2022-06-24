import { useState, useRef } from 'react'
import { SearchOutlined, CloseOutlined } from '@material-ui/icons'
import Fuse from 'fuse.js'

import searchList from '../../data/searchList.json'

import './searchBox.scss'

const SearchBox = () => {
	const [sbOpen, setSbOpen] = useState(false)
	const input = useRef()

	const openSearchBox = () => {
		setSbOpen(!sbOpen)
		input.current.focus()
	}

	const fuse = new Fuse(searchList, {
		keys: ['title'],
		includeScore: true,
	})

	// const results = fuse.search('Roller')

	const searchSite = e => {
		// const filteredResults = results.filter(result => result.score < 0.3)
		// console.log(filteredResults)
	}

	return (
		<div className={sbOpen ? 'searchbox sb-open' : 'searchbox'}>
			<button
				className="item search"
				onClick={openSearchBox}
				aria-label="Search the Site"
			>
				{!sbOpen ? <SearchOutlined /> : <CloseOutlined />}
			</button>
			<form
				action="/search/"
				className="inputbox"
				role="search"
				autoComplete="off"
			>
				<input ref={input} type="text" placeholder="Keyword..." />
				<button
					className="search-btn"
					onClick={searchSite}
					aria-label="Start Site Search"
				>
					<SearchOutlined />
				</button>
			</form>
		</div>
	)
}

export default SearchBox
