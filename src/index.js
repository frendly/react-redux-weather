import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.subscribe(() => {
	// console.log('store.getState ', store.getState());
});

// store.dispatch(fetchLocation());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
