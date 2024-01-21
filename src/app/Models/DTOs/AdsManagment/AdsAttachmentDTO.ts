import { AdsAttachmentTypeDTO } from "./AdsAttachmentTypeDTO";
import { AdsBaseObjectDTO } from "./AdsBaseObjectDTO";
import { AdsManagmentDTO } from "./AdsManagmentDTO";

export class AdsAttachmentDTO extends AdsBaseObjectDTO {
    fileName: string;
    fileExtension: string;
    file: string;
    folderName: string;
    modelName: string;
    adsAttachmentTypeId: string;
    adsManagmentId: string | null;
    url: string | null;
    adsAttachmentType: AdsAttachmentTypeDTO;
    adsManagment: AdsManagmentDTO;
}