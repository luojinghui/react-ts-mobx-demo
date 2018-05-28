import * as React from 'react';
import { observer, inject } from "mobx-react";

interface State {}

@inject('timer')
@observer
export default class Timer extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {};

    this.onClickBtn = this.onClickBtn.bind(this)
  }

  public onClickBtn():void {
    const tStore = this.props.timer;
  
    tStore.add();
  }

  public render() {
    const tStore = this.props.timer;
    console.log("tStore: ",tStore); // undefined

    return (
      <div onClick={this.onClickBtn}>Seconds passed: {tStore.timer}</div>
    )
  }
}