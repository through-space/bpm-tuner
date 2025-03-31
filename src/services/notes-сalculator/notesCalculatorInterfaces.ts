export enum ENoteName {
	"C" = "C",
	"C_sharp" = "C#",
	"D" = "D",
	"D_sharp" = "D#",
	"E" = "E",
	"F" = "F",
	"F_sharp" = "F#",
	"G" = "G",
	"G_sharp" = "G#",
	"A" = "A",
	"A_sharp" = "A#",
	"B" = "B",
}

export interface INote {
	name: ENoteName;
	octave: number;
	frequency: number;
}

export type TNoteByNumberMap = Map<number, INote>;

export interface IRawNote {
	noteNum: string;
	noteName: string;
	frequency: string;
}

export interface INotesCalculator {
	getNoteByFrequency: (frequency: number) => INote | undefined;
	getOctaveFrequency: (frequency: number, octave: number) => number;
}
