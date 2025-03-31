import { FC } from "react";
import {
	NoteProperty,
	NotePropertyValue,
	NoteWrapper,
} from "./NoteStyledComponents";
import { INoteProps } from "./NoteInterfaces";

export const Note: FC<INoteProps> = ({ note, measuredFrequency }) => {
	if (note === undefined) {
		return <NoteWrapper>N/A</NoteWrapper>;
	}

	const frequencyError = Math.round(measuredFrequency - note.frequency);

	//TODO:  measure score/error based on root12

	return (
		<NoteWrapper>
			<NoteProperty>
				<NotePropertyValue>{note.octave}</NotePropertyValue>
			</NoteProperty>
			<NoteProperty>
				<NotePropertyValue>{note.name}</NotePropertyValue>
			</NoteProperty>
			<NoteProperty>{frequencyError}</NoteProperty>
		</NoteWrapper>
	);
};
