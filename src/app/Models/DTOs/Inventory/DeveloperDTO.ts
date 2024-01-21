import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class DeveloperDTO extends InventoryBaseObjectDTO {
  englishName: string;
  arabicName: string;
  phoneNumber: string;
  commissionCollectionPeriod: string;
  commissionValue: string;
  otherPhoneNumber: string | null;
  website: string | null;
  imageChanged: boolean = false;
  logoAttachment: InventoryAttachmentDTO = new InventoryAttachmentDTO();
  InventoryAttachments: InventoryAttachmentDTO[] = [];

  logo:string ;
  commeisionPeriodText:string;
}
