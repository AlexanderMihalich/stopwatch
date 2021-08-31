import React, { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Buttons from "./components/Buttons";

const App = () => {

	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false)

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


	return (
		<center>
			<h1>
				<span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)} </span>
				<span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
				<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
			</h1>
			<Buttons />
		</center>
	);
}

export default App;
