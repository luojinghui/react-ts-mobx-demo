import { 
  AppStore,
  TimerStore
 } from '../store';

export interface ITimer {
  timer: TimerStore
}

export interface IApp {
  app: AppStore
}