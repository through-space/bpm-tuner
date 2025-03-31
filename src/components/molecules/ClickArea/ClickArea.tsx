import { FC } from "react";
import { IClickAreaProps } from "./ClickAreaInterfaces";
import { ClickAreaWrapper } from "./ClickAreaStyledComponents";
import { useBpmTuner } from "@hooks/useBpmTuner";

export const ClickArea: FC<IClickAreaProps> = () => {
	const { logTimestamp } = useBpmTuner();
	return (
		<ClickAreaWrapper>
			<div
				className={"grow"}
				onClick={() => {
					logTimestamp(Date.now());
				}}
			></div>
		</ClickAreaWrapper>
	);
};
