import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { MasterUnitDTO } from "./MasterUnitDTO";
import { PaymentPlanDTO } from "./PaymentPlanDTO";
import { ProjectDTO } from "./ProjectDTO";
import { SellingRequestDTO } from "./SellingRequestDTO";

export class PaymentPlanInstanceDTO extends InventoryBaseObjectDTO {
    paymentPlanId: string;
    projectId: string | null;
    masterUnitId: string | null;
    sellingRequestId: string | null;
    selectedUnitId: string | null;
    masterUnit: MasterUnitDTO;
    project: ProjectDTO;
    paymentPlan: PaymentPlanDTO;
    sellingRequest: SellingRequestDTO | null;
}