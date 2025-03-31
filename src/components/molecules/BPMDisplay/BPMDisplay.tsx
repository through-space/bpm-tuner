import { FC } from "react";
import { getBPMFromFrequency, getDisplayedBPM } from "./BPMDisplayConsts";
import { BPMDisplayWrapper } from "./BPMDisplayStyledComponents";
import { useBpmTuner } from "@hooks/useBpmTuner";

export const BPMDisplay: FC = () => {
	const { frequency } = useBpmTuner();
	const bpm = getBPMFromFrequency(frequency);

	//TODO: add precision to component props
	const bpmDisplayed = getDisplayedBPM(bpm, 4);

	return <BPMDisplayWrapper>{bpmDisplayed}</BPMDisplayWrapper>;
};
