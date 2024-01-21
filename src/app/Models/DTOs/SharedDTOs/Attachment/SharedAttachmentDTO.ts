import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";
import { SharedAttachmentTypeDTO } from "./SharedAttachmentTypeDTO";

export class SharedAttachmentDTO extends SharedBaseObjectDTO {
  fileName: string;
  fileExtension: string;
  sharedAttachmentTypeId: string;
  areaId: string | null;
  url: string | null;
  file: string;
  folderName: string;
  modelName: string;
  sharedAttachmentType: SharedAttachmentTypeDTO;
}
