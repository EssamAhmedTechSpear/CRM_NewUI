import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";

export class DeveloperBulkUploadDTO {
    file: string;
    statusId: string;
    logoImages: InventoryAttachmentDTO[] = [];
}