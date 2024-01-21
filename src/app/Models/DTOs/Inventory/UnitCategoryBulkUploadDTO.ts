import {InventoryAttachmentDTO} from './InventoryAttachmentDTO';

export class UnitCategoryBulkUploadDTO {
    file: string;
    ParentCategoryId: string;
    logoImages: InventoryAttachmentDTO[] = [];
}