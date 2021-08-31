import React, { useEffect, useState, useCallback } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Buttons from "./components/Buttons";

const App = () => {

	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false)
	const [startActive, setStartActive] = useState(false)

	useEffect(() => {
		const stopWatch$ = new Subject();
		interval(10)
			.pipe(takeUntil(stopWatch$))
			.subscribe(() => {
				if (start === true) {
					setTime(value => value + 10);
				}
			});
		return () => {
			stopWatch$.next();
			stopWatch$.complete();
		};
	}, [start]);

	const timeStart = useCallback(() => {
		setStart(true);
		setStartActive(true)
	}, []);

	const timeStop = useCallback(() => {
		setStart(false);
		setStartActive(false)
		setTime(0);
	}, []);

	const timeReset = useCallback(() => {
		setTime(0);
	}, []);

	const timeWait = useCallback(() => {
		setStart(false);
		setStartActive(false)
	}, []);

	return (
		<div className="stopWatch _container">
			<h1 className="stopWatch__title">
				<span className="stopWatch__value">{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}</span>
				<span className="stopWatch__value">{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
				<span className="stopWatch__value">{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
			</h1>
			<Buttons timeStart={timeStart} timeStop={timeStop} timeReset={timeReset} timeWait={timeWait} startActive={startActive} />
		</div>
	);
}

export default App;
