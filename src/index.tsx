import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import DevTools from 'mobx-react-devtools';
import {
	TimerStore,
	AppStore
} from './store';
import { Provider } from 'mobx-react';

const rootStore = {
	app: new AppStore(),
	timer: new TimerStore()
}

ReactDOM.render(
	<Provider {...rootStore}>
		<div>
			<App/>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root') as HTMLElement
);
