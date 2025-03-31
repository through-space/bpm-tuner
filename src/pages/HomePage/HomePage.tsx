import { FC, useState } from "react";
import { EPackageID } from "../../features/packages/types";
import { PackageList } from "../../features/packages/components/PackageList/PackageList";
import { SimpleComponent } from "@ui-components/atoms/SimpleComponent/SimpleComponent";
import { FeaturesListLayout } from "@ui-components/layouts/FeaturesListLayout/FeaturesListLayout";
import { BpmTuner } from "../../components/organisms/BpmTuner/BpmTuner";

export const HomePage: FC = () => {
	return (
		<FeaturesListLayout>
			<BpmTuner />
		</FeaturesListLayout>
	);
};
