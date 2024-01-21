import { LeadDTO } from "./LeadDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { OrderDTO } from "./OrderDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class TagDTO extends SPABaseObjectDTO {
    name: string;
    orders: OrderDTO[];
    opportunities: OpportunityDTO[];
    leads: LeadDTO[];
}