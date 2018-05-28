import * as React from 'react';
import { observer } from 'mobx-react';

export const TimerLess = observer(({ timer }) => {
  return (
    <h1>
      timer: {timer.getTimer}
    </h1>
  )
})