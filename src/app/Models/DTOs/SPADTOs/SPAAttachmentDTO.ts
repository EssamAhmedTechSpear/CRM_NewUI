import { SPAAttachmentTypeDTO } from "./SPAAttachmentTypeDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class SPAAttachmentDTO extends SPABaseObjectDTO {
    fileName: string | null;
    fileExtension: string | null;
    SPAAttachmentTypeId: string | null;
    interestId: string | null;
    orderId: string | null;
    url: string | null;
    file: string;
    modelName: string | null;
    folderName: string | null;
    sPAAttachmentType: SPAAttachmentTypeDTO | null;
}