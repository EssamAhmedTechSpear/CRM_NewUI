import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";

export class MasterUnitBulkUploadDTO {
    file: string;
    defaultPaymentPlanId: string;
    status: string;
    unitCategoryId: string;
    subUnitCategoryId: string;
    // locationTree: LocationTreeDTO;
    projectId: string | null;
    areaId: string | null;
    contactId: string | null;
    sellingRequestId: string | null;
    attachments: InventoryAttachmentDTO[];
}