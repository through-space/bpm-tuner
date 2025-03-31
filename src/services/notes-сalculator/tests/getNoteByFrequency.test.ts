import { expect, test } from "vitest";
import {
	getNoteByFrequency,
	getNotesMapFromRaw,
} from "../notesCalculatorConsts";
import allRawNotes from "../data/all-notes.json";
import { ENoteName, INote } from "../notesCalculatorInterfaces";

console.log("Testing Frequency to Note conversion");

const allNotes = getNotesMapFromRaw(allRawNotes);

const getRandomFrequency = (): number => {
	return Math.random() * Math.pow(10, Math.floor(Math.random() * 5) + 1);
};

test("Test Zero Frequency", () => {
	expect(getNoteByFrequency(allNotes, 0)).toBe(undefined);
});

test("Test Below Zero Frequency", () => {
	expect(getNoteByFrequency(allNotes, -getRandomFrequency())).toBe(undefined);
});

test("Test Above Maximum Frequency", () => {
	const largeNumber = Date.now();

	expect(getNoteByFrequency(allNotes, largeNumber)).toBe(undefined);
});

//TODO: Add "not found" test

test("Test A note", () => {
	const A: INote = {
		name: ENoteName.A,
		octave: 4,
		frequency: 440,
	};
	expect(getNoteByFrequency(allNotes, 440)).toStrictEqual(A);
});

test("Test a Known Note with number < 0 ", () => {
	const F0: INote = {
		name: ENoteName.F,
		octave: 0,
		frequency: 21.82676,
	};

	expect(getNoteByFrequency(allNotes, 21.82676)).toStrictEqual(F0);
});

test("Test Note Exact Frequency", () => {
	const G2sharp: INote = {
		name: ENoteName.G_sharp,
		octave: 2,
		frequency: 103.8262,
	};

	expect(getNoteByFrequency(allNotes, 101)).toStrictEqual(G2sharp);
});
//
// test("Testing notes json parsing single note", () => {
// 	const rawData: IRawNote[] = [
// 		{
// 			noteNum: "-2",
// 			noteName: "F#0/G♭0",
// 			frequency: "23.12465",
// 		},
// 	];
//
// 	const expectedNoteObj: INote = {
// 		note: ENoteName.F,
// 		octave: 0,
// 		frequency: 23.12465,
// 		isSharp: true,
// 	};
//
// 	expect(getNotesMapFromRaw(rawData).get(-2)).toStrictEqual(expectedNoteObj);
// });
//
// test("Testing all notes json conversion length", () => {
// 	const expectedNotesMapLength = 108;
// 	expect(getNotesMapFromRaw(rawNotesData).size).toBe(
// 		expectedNotesMapLength,
// 	);
// });
