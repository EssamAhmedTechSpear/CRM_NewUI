import { AdsAttachmentDTO } from "./AdsAttachmentDTO";
import { AdsBaseObjectDTO } from "./AdsBaseObjectDTO";

export class AdsAttachmentTypeDTO extends AdsBaseObjectDTO {
    name: string;
    adsAttachments: AdsAttachmentDTO[];
}