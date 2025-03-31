import { FC, ReactNode } from "react";

/**
 * NoSelectionWrapper
 * Prevents DoubleClick to avoid selecting unnecessary text when clicked frequently
 */
export const NoSelectionWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className={"select-none flex flex-col grow"}>{children}</div>;
};
