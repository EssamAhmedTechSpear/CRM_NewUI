import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class AmenityDTO extends InventoryBaseObjectDTO {
    spaceSQM: number;
    amenityTypeId: string;
    masterUnitId: string | null;
    sellingRequestId: string | null;
    amenityTypeName: string;
}