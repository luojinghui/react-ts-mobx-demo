import * as React from 'react';

interface IProps {
  timer: number
}

export const TimerLess = (props: IProps) => {
  return (
    <h1>
      timer: {props.timer}
    </h1>
  )
}