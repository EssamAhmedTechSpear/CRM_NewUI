import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class InventoryAttachmentTypeDTO extends InventoryBaseObjectDTO {
    name: string;
    inventoryAttachments: InventoryAttachmentDTO[] = [];
}