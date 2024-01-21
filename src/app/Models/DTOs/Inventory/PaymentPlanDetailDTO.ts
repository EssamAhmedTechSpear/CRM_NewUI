import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class PaymentPlanDetailDTO extends InventoryBaseObjectDTO {
    type: number;
    fieldName: string;
    value: string;
    paymentPlanId: string = "00000000-0000-0000-0000-000000000000";
}