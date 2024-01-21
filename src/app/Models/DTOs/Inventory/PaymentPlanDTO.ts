import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { PaymentPlanDetailDTO } from "./PaymentPlanDetailDTO";
import { PaymentPlanInstanceDTO } from "./PaymentPlanInstanceDTO";

export class PaymentPlanDTO extends InventoryBaseObjectDTO {
    tiltle: string;
    amount: number;
    overValue: number;
    durationInMonths: number;
    currencyId: string = "00000000-0000-0000-0000-000000000000";
    paymentPlanDetails:PaymentPlanDetailDTO[]=[];
    paymentPlanInstances:PaymentPlanInstanceDTO[]=[];
}