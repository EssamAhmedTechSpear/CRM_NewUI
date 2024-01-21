import {InventoryAttachmentDTO} from './InventoryAttachmentDTO';

export class UnitBulkUploadDTO {
    file: string;
    statusId:string;
    UploadedPhotos: InventoryAttachmentDTO[] = [];
}