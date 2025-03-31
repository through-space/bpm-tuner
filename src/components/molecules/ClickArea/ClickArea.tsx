import { FC } from "react";
import { IClickAreaProps } from "./ClickAreaInterfaces";
import { ClickAreaWrapper } from "./ClickAreaStyledComponents";
import { useBpmTuner } from "@hooks/useBpmTuner";
import { NoSelectionWrapper } from "@ui-components/atoms/NoSelectionWrapper/NoSelectionWrapper";

export const ClickArea: FC<IClickAreaProps> = () => {
	const { logTimestamp } = useBpmTuner();
	return (
		<ClickAreaWrapper>
			<NoSelectionWrapper>
				<div
					className={"grow"}
					onClick={() => {
						logTimestamp(Date.now());
					}}
				></div>
			</NoSelectionWrapper>
		</ClickAreaWrapper>
	);
};
