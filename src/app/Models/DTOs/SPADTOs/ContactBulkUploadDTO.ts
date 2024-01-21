import { SPAAttachmentDTO } from "./SPAAttachmentDTO";

export class ContactBulkUploadDTO {
    file: string;
    countryId: string;
    areaId: string;
    governmentId: string;
    ProfilePictures: SPAAttachmentDTO[];
}