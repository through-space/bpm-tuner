export interface ITunerState {
	averageFrequency: number;
	lastTimestamp: number;
	intervals: number[];
	timeout: number;
}

export enum ETunerActionType {
	"LOG_TIMESTAMP",
	"RESET",
}

export interface ILogTimestampTunerAction {
	type: ETunerActionType.LOG_TIMESTAMP;
	timestamp: number;
}

export interface IResetTunerAction {
	type: ETunerActionType.RESET;
}

export type TTunerAction = ILogTimestampTunerAction | IResetTunerAction;
