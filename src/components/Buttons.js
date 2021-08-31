import React from 'react'

const Buttons = ({ timeStart, timeStop, timeReset, timeWait }) => {
	return (
		<div>
			<button onClick={timeStart}>Start</button>
			<button onClick={timeStop}>Stop</button>
			<button onClick={timeWait}>Wait</button>
			<button onClick={timeReset}>Reset</button>
		</div>
	)
}

export default Buttons