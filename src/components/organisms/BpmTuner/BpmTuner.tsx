import { FC } from "react";
import { BpmTunerContextProvider } from "../../../context/BpmTunerContext/BpmTunerContext";
import { ClickArea } from "../../molecules/ClickArea/ClickArea";
import { BPMDisplay } from "../../molecules/BPMDisplay/BPMDisplay";
import { NoSelectionWrapper } from "@ui-components/atoms/NoSelectionWrapper/NoSelectionWrapper";
import { NotesList } from "../../molecules/NotesList/NotesList";

export const BpmTuner: FC = () => {
	return (
		<BpmTunerContextProvider>
			<h1>BPM Tuner</h1>
			<BPMDisplay />
			<NotesList />
			<NoSelectionWrapper>
				<ClickArea />
			</NoSelectionWrapper>
		</BpmTunerContextProvider>
	);
};
