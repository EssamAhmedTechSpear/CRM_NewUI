import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";
import { SharedAttachmentDTO } from "./SharedAttachmentDTO";

export class SharedAttachmentTypeDTO extends SharedBaseObjectDTO {
  name: string;
  sharedAttachments: SharedAttachmentDTO[];
}
