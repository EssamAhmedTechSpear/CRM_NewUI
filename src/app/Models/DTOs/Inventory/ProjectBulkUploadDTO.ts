import {InventoryAttachmentDTO} from './InventoryAttachmentDTO';

export class ProjectBulkUploadDTO {
    file: string;
    parentProjectId: string | null;
    areaId: string;
    developerId: string;
    statusId:string;
    projectType: number;
    Photos: InventoryAttachmentDTO[] = [];
}