import * as React from 'react';
import './App.css';
import Main from './components/Main';
// import Timer from './components/Timer';
// import { TimerLess } from './components/TimerLess';
import { observer, inject } from 'mobx-react';

import logo from './logo.svg';

interface IState {
	timer: number;
}

@inject('timer', 'app')
@observer
class App extends React.Component<any, IState> {
	public componentDidMount() {
		this.props.app.fetchTodoAdd();
	}

	public renderContent() {
		const data = this.props.app.content.slice();
		console.log("data: ",data);
		
		return(
			this.props.app.content.slice().map((val, key) => {
				return (
					<li key={key}>{val}</li>
				)
			})
		)
	}

	public render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<ul className="App-intro">
					{
						this.renderContent()
					}
				</ul>
				<Main name="hello wrold" />
				{/* <Timer {...this.props}/> */}
				{/* <TimerLess {...this.props} /> */}
			</div>
		);
	}
}

export default App;
