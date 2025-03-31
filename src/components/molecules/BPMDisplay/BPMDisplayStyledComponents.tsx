import { FC, ReactNode } from "react";
import clsx from "clsx";

export const BPMDisplayWrapper: FC<{ children?: ReactNode }> = ({
	children,
}) => {
	return <div className={clsx("border-2 border-amber-500")}>{children}</div>;
};
