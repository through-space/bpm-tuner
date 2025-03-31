import { FC, ReactNode } from "react";
import clsx from "clsx";

export const NoteDisplayStyledWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return (
		<div className={clsx("flex flex-col w-full h-1/2 border-amber-500")}>
			{children}
		</div>
	);
};

export const NoteDisplayProperty: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className={clsx("flex flex-row")}>{children}</div>;
};

export const NoteDisplayPropertyName: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className="grow">{children}</div>;
};

export const NoteDisplayPropertyValue: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className="grow">{children}</div>;
};
