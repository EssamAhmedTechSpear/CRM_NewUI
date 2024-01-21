import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class InventoryAttachmentDTO extends InventoryBaseObjectDTO {
  fileName: string;
  fileExtension: string;
  inventoryAttachmentTypeId: string = "00000000-0000-0000-0000-000000000000";
  projectId?: string | null;
  unitId?: string
  developerId?: string
  masterUnitId?: string
  url: string;
  file: string;
  ModelName: string = "";
  FolderName:string = "";
}
