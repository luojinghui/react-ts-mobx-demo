import * as React from 'react';
import './App.css';
// import Main from './components/Main';
// import Timer from './components/Timer';
import { TimerLess } from './components/TimerLess';
import {observer, inject} from 'mobx-react';
import { ITimer } from './interfaces';

import logo from './logo.svg';

interface IState {
	timer: number;
}

@inject('timer')
@observer
class App extends React.Component<ITimer, IState> {
	constructor(props: ITimer) {
		super(props);

		const { timer } = props.timer;
		console.log("props:", props);
		
		this.state = {
			timer
		};
  }

	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				{/* <Main name="hello wrold" /> */}
        {/* <Timer {...this.props}/> */}
				<TimerLess timer={this.state.timer} />
			</div>
		);
	}
}

export default App;
