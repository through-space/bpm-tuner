import { FC } from "react";
import {
	NoteDisplayProperty,
	NoteDisplayPropertyValue,
	NoteDisplayStyledWrapper,
} from "./NoteDisplayStyledComponents";
import { INoteDisplayProps } from "./NoteDisplayInterfaces";

export const NoteDisplay: FC<INoteDisplayProps> = ({ note }) => {
	if (note === undefined) {
		return <NoteDisplayStyledWrapper>N/A</NoteDisplayStyledWrapper>;
	}

	return (
		<NoteDisplayStyledWrapper>
			<NoteDisplayProperty>
				<NoteDisplayPropertyValue>{note.name}</NoteDisplayPropertyValue>
			</NoteDisplayProperty>
			<NoteDisplayProperty>
				<NoteDisplayPropertyValue>
					{note.octave}
				</NoteDisplayPropertyValue>
			</NoteDisplayProperty>
			<div>{note.octave}</div>
		</NoteDisplayStyledWrapper>
	);
};
