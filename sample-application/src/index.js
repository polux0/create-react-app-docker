import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const App1 = () => {

const buttonText = {text: 'click me!'};
const labelText = 'Enter your name: ';

	return	( 
		<div>
			<label className="label" htmlFor="name">{labelText}</label>
			<input id="name" type="text" />
			<button style={{backgroundColor:'blue', color: 'white'}}> {buttonText.text} </button>
		</div>
		);

}

ReactDOM.render(<App1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
