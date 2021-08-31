import React from 'react'

const Buttons = ({ timeStart, timeStop, timeReset, timeWait, startActive }) => {
	return (
		<div className="stopWatch__buttons">
			<button className="stopWatch__button" disabled={startActive} onClick={timeStart}>Start</button>
			<button className="stopWatch__button" disabled={!startActive} onClick={timeStop}>Stop</button>
			<button className="stopWatch__button" disabled={!startActive} onClick={timeWait}>Wait</button>
			<button className="stopWatch__button" disabled={!startActive} onClick={timeReset}>Reset</button>
		</div>
	)
}

export default Buttons