import { expect, test } from "vitest";
import rawNotesData from "../data/all-notes.json";
import { getNotesMapFromRaw } from "../notesCalculatorConsts";
import { ENoteName, INote, IRawNote } from "../notesCalculatorInterfaces";

console.log("Testing Notes Parsing");

test("Testing empty notes json conversion", () => {
	const rawData: IRawNote[] = [];
	expect(getNotesMapFromRaw(rawData).size).toBe(0);
});

test("Testing notes json parsing single note", () => {
	const rawData: IRawNote[] = [
		{
			noteNum: "-2",
			noteName: "F#0/G♭0",
			frequency: "23.12465",
		},
	];

	const expectedNoteObj: INote = {
		name: ENoteName.F_sharp,
		octave: 0,
		frequency: 23.12465,
	};

	expect(getNotesMapFromRaw(rawData).get(-2)).toStrictEqual(expectedNoteObj);
});

test("Testing all notes json conversion length", () => {
	const expectedNotesMapLength = 108;
	expect(getNotesMapFromRaw(rawNotesData).size).toBe(expectedNotesMapLength);
});
