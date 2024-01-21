import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { UnitFeatureDTO } from "./UnitFeatureDTO";

export class UnitFeatureTypeDTO extends InventoryBaseObjectDTO {
    name: string;
    unitFeatures: UnitFeatureDTO[];
}