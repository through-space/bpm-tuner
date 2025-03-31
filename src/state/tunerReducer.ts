import {
	ETunerActionType,
	TTunerAction,
	ITunerState,
} from "./tunerStateInterfaces";
import { getResetTunerState, logTimestamp } from "./tunerStateConsts";

export const tunerReducer = (
	state: ITunerState,
	action: TTunerAction,
): ITunerState => {
	switch (action.type) {
		case ETunerActionType.RESET:
			return getResetTunerState(state);
		case ETunerActionType.LOG_TIMESTAMP:
			return logTimestamp(state, action.timestamp);
		default:
			return state;
	}
};
