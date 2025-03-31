import { FC, ReactNode } from "react";
import clsx from "clsx";

export const ClickAreaWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return (
		<div className={clsx("flex flex-col w-full h-1/2 bg-purple-400 grow")}>
			{children}
		</div>
	);
};
