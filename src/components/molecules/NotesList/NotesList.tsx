import { FC } from "react";
import { INotesListProps } from "./NotesListInterfaces";
import { useBpmTuner } from "@hooks/useBpmTuner";
import { NoteListWrapper } from "./NotesListStyledComponents";
import { INITIAL_OCTAVE, MAXIMUM_OCTAVE } from "./NotesListConsts";
import { useNotesCalculator } from "@hooks/useNotesCalculator";
import { NoteDisplay } from "../../atoms/NoteDisplay/NoteDisplay";

export const NotesList: FC<INotesListProps> = () => {
	const { frequency } = useBpmTuner();
	const { getOctaveFrequency, getNoteByFrequency } = useNotesCalculator();

	const notes = [];

	for (let octave = INITIAL_OCTAVE; octave < MAXIMUM_OCTAVE + 1; octave++) {
		const noteFrequency = getOctaveFrequency(frequency, octave);
		console.log(noteFrequency);
		const note = getNoteByFrequency(noteFrequency);

		notes.push(<NoteDisplay key={octave} note={note} />);
	}

	return <NoteListWrapper>{notes}</NoteListWrapper>;
};
