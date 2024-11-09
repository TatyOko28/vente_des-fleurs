import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'

/*ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // on peut utiliser l'une des deux methodes