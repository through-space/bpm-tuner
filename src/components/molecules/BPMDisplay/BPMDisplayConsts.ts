export const getBPMFromFrequency = (frequency: number): number => {
	return frequency * 60;
};

export const getDisplayedBPM = (bpm: number, precision: number): number => {
	const precisionMultiplier = Math.pow(10, precision);

	return Math.round(bpm * precisionMultiplier) / precisionMultiplier;
};
