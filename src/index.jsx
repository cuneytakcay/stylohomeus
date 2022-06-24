import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './App'
import './index.scss'

const rootElement = document.getElementById('root')

render(<App />, rootElement)

/*
if (rootElement.hasChildNodes()) {
	hydrate(<App />, rootElement)
} else {
	render(<App />, rootElement)
}
*/
