
import { BudgetDTO } from "./BudgetDTO";
import { SPAAttachmentDTO } from "./SPAAttachmentDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { LeadDTO } from "./LeadDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { OrderDTO } from "./OrderDTO";
import { PaymentPlanDTO } from "../Inventory/PaymentPlanDTO";
import { UnitDTO } from "../Inventory/UnitDTO";
import { MasterUnitDTO } from "../Inventory/MasterUnitDTO";

export class InterestDTO extends SPABaseObjectDTO {
    communityId: number | null;
    areaId: string | null;
    countryId : string | null;
    governmentId : string | null;
    budgetId: string | null;
    developerId: string | null;
    projectId: string | null;
    projectName: string | null;
    masterUnitId: string | null;
    unitCategoryId: string | null;
    unitSubCategoryId: string | null;
    unitAreaSQM: number;
    objective: string | null;
    leadId: string | null;
    paymentPlanId: string | null;
    disqualifiedLeadId : string | null;
    qualifiedLeadId : string | null;
    opportunityId: string | null;
    unitId: string | null;
    budget: BudgetDTO | null;
    attachments: SPAAttachmentDTO[];
    lead: LeadDTO | null;
    disqualifiedLead : LeadDTO | null;
    qualifiedLead : LeadDTO | null;
    opportunity: OpportunityDTO | null;
    interestCode : string | null;
    paymentPlans : PaymentPlanDTO[] = [];
    unit:UnitDTO|null ;
    masterUnit:MasterUnitDTO|null;
    eoiAmount: number | null;
    
}