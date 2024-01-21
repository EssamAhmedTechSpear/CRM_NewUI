import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";

export class UnitCategoryDTO extends InventoryBaseObjectDTO {
  englishName: string;
  arabicName: string;
  arabicDescription: string;
  englishDescription: string;
  type: boolean;
  parentUnitCategoryId: string | null;
  parentUnitCategory: UnitCategoryDTO;
  childParentCategories: UnitCategoryDTO[];
  parentUnitCategoryName: string;
  imageChanged: boolean = false;
  inventoryAttachments: InventoryAttachmentDTO[] = [];
  logoImageName:string="";

  parentName: string;
}
