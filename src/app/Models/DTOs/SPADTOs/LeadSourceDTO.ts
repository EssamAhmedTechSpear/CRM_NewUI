import { LeadDTO } from "./LeadDTO";
import { LeadTypeDTO } from "./LeadTypeDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { OrderDTO } from "./OrderDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class LeadSourceDTO extends SPABaseObjectDTO {
    name: string;
    leadTypeId: string;
    leadType: LeadTypeDTO;
    leads: LeadDTO[];
    opportunities: OpportunityDTO[];
    orders: OrderDTO[];
}