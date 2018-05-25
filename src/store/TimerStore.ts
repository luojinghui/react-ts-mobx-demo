import { observable, action, computed } from "mobx";

export class TimerStore {
  @observable public timer = 1;

  constructor() {
    this.timer = 1;
  }

  @action.bound
  public add() {
    this.timer += this.timer;
  }

  @action.bound
  public reset() {
    this.timer = 0;
  }

  @computed get getTimer() {
    return this.timer;
  }
}

export default TimerStore;