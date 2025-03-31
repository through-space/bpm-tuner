import {
	ENoteName,
	INote,
	IRawNote,
	TNoteByNumberMap,
} from "./notesCalculatorInterfaces";

const baseNoteNumber = 49;
const baseNoteFrequency = 440;
// const notesRatio = Math.pow(2, 1 / 12);

export const getNotesMapFromRaw = (jsonArray: IRawNote[]): TNoteByNumberMap => {
	console.log("Parsing ..... Slow");
	const allNoteNames = Object.keys(ENoteName);
	return new Map(
		jsonArray
			.map((rawNote): [number, INote] | null => {
				const noteIndex = parseInt(rawNote.noteNum);
				const noteName = rawNote.noteName[0];

				if (!allNoteNames.includes(noteName)) {
					return null;
				}

				const isSharp = rawNote.noteName[1] === "#";

				// console.log(noteName + isSharp && "_sharp");
				return [
					noteIndex,
					{
						name: ENoteName[noteName + (isSharp ? "_sharp" : "")],
						octave: parseInt(
							isSharp ? rawNote.noteName[2] : rawNote.noteName[1],
						),
						frequency: parseFloat(rawNote.frequency),
					},
				];
			})
			.filter((note) => note !== null),
	);
};

const getNoteNumberByFrequency = (frequency: number): number | undefined => {
	if (frequency <= 0) {
		return undefined;
	}

	return Math.round(
		12 * Math.log2(frequency / baseNoteFrequency) + baseNoteNumber,
	);
};

export const getNoteByFrequency = (
	noteByNumberMap: TNoteByNumberMap,
	frequency: number,
): INote | undefined => {
	console.log(frequency);
	const noteNumber = getNoteNumberByFrequency(frequency);
	console.log(noteNumber);

	if (noteNumber === undefined) {
		return undefined;
	}

	return noteByNumberMap.get(noteNumber);
};

export const getOctaveFrequency = (
	frequency: number,
	octave: number,
): number => {
	return frequency * Math.pow(2, octave);
};
