export interface IBpmTunerContext {
	// intervals: number[];
	// bpm: number;
	// addInterval: () => void;
	// resentIntervals: () => void;
	// tunerState: Pick<ITunerState, "averageFrequency" | "timeout">;
	// tunerDispatch: Dispatch<TTunerAction>;
	//TODO: do I need to export Reset Action?
	logTimestamp: (timestamp: number) => void;
	frequency: number;
}
