import { SharedAttachmentDTO } from "../Attachment/SharedAttachmentDTO";
import { GovernmentDTO } from "../Government/GovernmentDTO";
import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";

export class AreaDTO extends SharedBaseObjectDTO {
  englishName: string;
  arabicName: string | null;
  englishDescription: string | null;
  arabicDescription: string | null;
  longtude: number | null;
  latitude: number | null;
  imageChanged: boolean = false;
  government: GovernmentDTO | null;
  governmentId: string;
  status: boolean;
  sharedAttachments: SharedAttachmentDTO[] = [];
  statusName: string;
}
