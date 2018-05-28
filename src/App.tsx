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
		const data = this.props.app.content;
		console.log("data: ",data);
		
		return(
			this.props.app.content.map((val, key) => {
				return (
					<li key={key}>{key}</li>
				)
			})
		)
	}

	public render() {
		let info = []
		if(!!this.props.app.content) {
			info = 	this.props.app.content.map((val, key) => {
				return (
					<li key={key}>{key}
					<p>{val.addTime}</p>
					<p>{val.contactEmail}</p>
					<p>{val.contactName}</p>
					<p>{val.contactPhone}</p>
					<p>{val.name}</p>
					</li>
				)
			})
		}
	
		return (

			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<ul className="App-intro">
					{
					info
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
