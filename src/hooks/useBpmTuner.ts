import { useContext } from "react";
import { BpmTunerContext } from "../context/BpmTunerContext/BpmTunerContextConsts";

export const useBpmTuner = () => {
	const context = useContext(BpmTunerContext);
	if (!context)
		throw new Error(
			"BpmTuner must be used within an BpmTunerContextProvider",
		);

	console.log("Getting From Context", context);
	return context;
};
