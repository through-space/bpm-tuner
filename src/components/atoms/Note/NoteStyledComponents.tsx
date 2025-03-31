import { FC, ReactNode } from "react";
import clsx from "clsx";

export const NoteWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<div
			className={clsx(
				"flex flex-col items-center",
				"w-full h-1/2",
				"m-2",
				"border-1 round border-teal-400",
				"aspect-square",
			)}
		>
			{children}
		</div>
	);
};

export const NoteProperty: FC<{ children?: ReactNode }> = ({ children }) => {
	return <div className={clsx("flex flex-row")}>{children}</div>;
};

export const NotePropertyValue: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className="grow">{children}</div>;
};
