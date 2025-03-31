import {
	getNoteByFrequency,
	getNotesMapFromRaw,
	getOctaveFrequency,
} from "@services/notes-сalculator/notesCalculatorConsts";
import allNotesData from "@services/notes-сalculator/data/all-notes.json";
import { INotesCalculator } from "@services/notes-сalculator/notesCalculatorInterfaces";

export const useNotesCalculator = (): INotesCalculator => {
	return {
		getNoteByFrequency: (frequency: number) =>
			getNoteByFrequency(getNotesMapFromRaw(allNotesData), frequency),
		getOctaveFrequency,
	};
};
