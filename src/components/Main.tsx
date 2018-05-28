import * as React from 'react';
import { MainFooter } from './MainFooter';

interface IProps {
	name: string;
}

interface IState {
	a: string;
	b: number;
	name: string;
}

export default class Main extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);

		this.state = {
			a: '1',
			b: 2,
			name: this.props.name
		};
	}

	public componentDidMount() {
		const { a, b } = this.state;

		add(a, b);
	}

	public render() {
		const { name } = this.props;

		return (
			<div>
				<MainFooter name="Job" age={12} sex="woman" city="xi'an" />
				<h4>this.state.name:   {name}</h4>
				<MainText />
			</div>
		);
	}
}

function add(a: string, b: number): string {
	return a + b;
}

export const MainText: React.StatelessComponent<{}> = () => {
	return <div>React.StatelessComponent</div>;
};
