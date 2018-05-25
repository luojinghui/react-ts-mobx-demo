import * as React from 'react';
import { observer, inject } from "mobx-react";
import { ITimer } from '../interfaces';

interface State {}

@inject('timer')
@observer
export default class Timer extends React.Component<ITimer, State> {
  constructor(props: any) {
    super(props);
    this.state = {};

    this.onClickBtn = this.onClickBtn.bind(this)
  }

  public onClickBtn():void {
    const tStore = this.props.timer;
    console.log(tStore);   // undefined
  }

  public render() {
    const tStore = this.props.timer;
    console.log(tStore); // undefined

    return (
      <div onClick={this.onClickBtn}>Seconds passed: {tStore.timer}</div>
    )
  }
}