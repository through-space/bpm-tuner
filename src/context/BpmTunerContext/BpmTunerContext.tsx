import { ReactNode, useReducer } from "react";
import { BpmTunerContext } from "./BpmTunerContextConsts";
import { IBpmTunerContext } from "./BpmTunerContextInterfaces";
import { initialTunerState } from "../../state/tunerStateConsts";
import { tunerReducer } from "../../state/tunerReducer";
import { ETunerActionType } from "../../state/tunerStateInterfaces";

export const BpmTunerContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [tunerState, tunerDispatch] = useReducer(
		tunerReducer,
		initialTunerState,
	);

	const state: IBpmTunerContext = {
		logTimestamp: (timestamp: number) => {
			tunerDispatch({ type: ETunerActionType.LOG_TIMESTAMP, timestamp });
		},
		frequency: tunerState.averageFrequency,
	};

	console.log(tunerState);

	return (
		<BpmTunerContext.Provider value={state}>
			{children}
		</BpmTunerContext.Provider>
	);
};
