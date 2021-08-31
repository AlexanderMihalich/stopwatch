import React from 'react'

const Buttons = ({ timeStart, timeStop, timeReset, timeWait, startActive }) => {

	// ================ detailed timer for the wait button =================
	// let wasClicked = false;
	// let timeout;
	// const doubleClick = () => {
	// 	if (wasClicked) {
	// 		wasClicked = false;
	// 		clearTimeout(timeout);
	// 		return;
	// 	}
	// 	wasClicked = true;
	// 	timeout = setTimeout(() => {
	// 		timeWait()
	// 		wasClicked = false;
	// 	}, 300);
	// }
	// ================ detailed timer for the wait button =================

	return (
		<div className="stopWatch__buttons">
			<button className="stopWatch__button" disabled={startActive} onClick={timeStart}>Start</button>
			<button className="stopWatch__button" disabled={!startActive} onClick={timeStop}>Stop</button>
			{/* <button className="stopWatch__button" disabled={!startActive} onClick={doubleClick}>Wait</button> */}
			<button className="stopWatch__button" disabled={!startActive} onClick={() => setTimeout(timeWait, 300)}>Wait</button>
			<button className="stopWatch__button" disabled={!startActive} onClick={timeReset}>Reset</button>
		</div>
	)
}

export default Buttons