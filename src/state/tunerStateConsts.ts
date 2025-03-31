import { ITunerState } from "./tunerStateInterfaces";

export const initialTunerState: ITunerState = {
	intervals: [],
	lastTimestamp: 0,
	averageFrequency: 0,
	timeout: 3000,
};

export const getResetTunerState = (state: ITunerState): ITunerState => {
	return {
		...state,
		intervals: [],
		lastTimestamp: 0,
		averageFrequency: 0,
	};
};

// TODO: implement count only last X intervals logic to exclude first intervals in large intervals array

const getAverageFrequency = (intervals: number[]) => {
	if (intervals.length === 0) {
		return 0;
	}

	const averageInterval =
		intervals.reduce((sum, interval) => sum + interval, 0) /
		intervals.length;

	return 1000 / averageInterval;
};

export const logTimestamp = (
	state: ITunerState,
	timestamp: number,
): ITunerState => {
	if (state.lastTimestamp === 0) {
		return {
			...state,
			lastTimestamp: timestamp,
		};
	}

	const interval = timestamp - state.lastTimestamp;

	if (interval > state.timeout) {
		return { ...getResetTunerState(state), lastTimestamp: timestamp };
	}

	const intervals = [...state.intervals, interval];

	return {
		...state,
		lastTimestamp: timestamp,
		intervals,
		averageFrequency: getAverageFrequency(intervals),
	};
};
