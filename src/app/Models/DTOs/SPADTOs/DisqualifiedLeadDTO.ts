import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { TagDTO } from "./TagDTO";

export class DisqualifiedLeadDTO extends SPABaseObjectDTO {
    report: string;
    campaignName: string;
    contactId: string;
    leadSourceId: string;
    contactType: number;
    opportunityId: string;
    companyId: string;
    company: CompanyDTO;
    tagId: string | null;
    contact: ContactDTO;
    tag: TagDTO;
    leadSource: LeadSourceDTO;
    opportunity: OpportunityDTO;
}