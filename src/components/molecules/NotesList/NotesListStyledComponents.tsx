import { FC, ReactNode } from "react";
import clsx from "clsx";

export const NoteListWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	//TODO: deal with repeating "border-2 border-amber-500". make it global

	return (
		<div className={clsx("flex flex-row w-full border-2 border-amber-500")}>
			{children}
		</div>
	);
};
