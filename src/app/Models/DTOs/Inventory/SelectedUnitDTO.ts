import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { MasterUnitDTO } from "./MasterUnitDTO";
import { PaymentPlanInstanceDTO } from "./PaymentPlanInstanceDTO";
import { UnitDTO } from "./UnitDTO";

export class SelectedUnitDTO extends InventoryBaseObjectDTO {
    unitIdentifier: string;
    developerCode: string;
    orderId: string= "00000000-0000-0000-0000-000000000000";
    unitId: string;
    masterUnitId: string;
    attachmentId: string;
    reservationValue: number;
    cashCurrencyId: string;
    cashPrice: number;
    floorNumber: number;
    unitAreaSQM: number;
    englishDescription: string | null;
    arabicDescription: string | null;
    unit: UnitDTO;
    masterUnit: MasterUnitDTO;
    inventoryAttachments: InventoryAttachmentDTO[]=[];
    paymentPlanInstances: PaymentPlanInstanceDTO[]=[];
    isAttachmentChanged:boolean=false;
    masterUnitName:string;
}