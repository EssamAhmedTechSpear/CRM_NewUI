import { AmenityDTO } from "./AmenityDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class AmenityTypeDTO extends InventoryBaseObjectDTO {
    name: string;
    amenities: AmenityDTO[] = [];
}