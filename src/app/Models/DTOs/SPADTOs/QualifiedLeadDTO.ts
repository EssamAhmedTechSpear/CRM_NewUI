import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { InterestDTO } from "./InterestDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { TagDTO } from "./TagDTO";

export class QualifiedLeadDTO extends SPABaseObjectDTO {
    report: string;
    campaignName: string;
    contactId: string;
    leadSourceId: string;
    contactType: number;
    opportunityId: string | null;
    companyId: string | null;
    paidAmount: number | null;
    tagId: string | null;
    company: CompanyDTO;
    contact: ContactDTO;
    tag: TagDTO;
    leadSource: LeadSourceDTO;
    opportunity: OpportunityDTO;
    interests: InterestDTO[];
}