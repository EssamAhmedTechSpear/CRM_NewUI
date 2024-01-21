import { LeadSourceDTO } from "./LeadSourceDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class LeadTypeDTO extends SPABaseObjectDTO {
    name: string;
    leadSources: LeadSourceDTO[];
}