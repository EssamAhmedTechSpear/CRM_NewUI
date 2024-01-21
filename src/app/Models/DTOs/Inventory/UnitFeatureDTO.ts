import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { SellingRequestDTO } from "./SellingRequestDTO";
import { UnitDTO } from "./UnitDTO";
import { UnitFeatureTypeDTO } from "./UnitFeatureTypeDTO";

export class UnitFeatureDTO extends InventoryBaseObjectDTO {
    price: number;
    unitId: string | null;
    sellingRequestId: string | null;
    unitFeatureTypeId: string;
    space: number;
    unit: UnitDTO | null;
    sellingRequest: SellingRequestDTO | null;
    unitFeatureType: UnitFeatureTypeDTO|UnitFeatureTypeDTO[] = new UnitFeatureTypeDTO();
}