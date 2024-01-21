import { ActivityAccess } from "./ActivityDTO";
import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { InterestDTO } from "./InterestDTO";
import { LeadDTO } from "./LeadDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { OrderDTO } from "./OrderDTO";
import { QualifiedLeadDTO } from "./QualifiedLeadDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { TagDTO } from "./TagDTO";

export class OpportunityDTO extends SPABaseObjectDTO {
    report: string;
    campaignName: string;
    contactId: string;
    leadSourceId: string;
    contactType: number;
    orderId: string | null;
    qualifiedLeadId: string | null;
    companyId: string | null;
    paidAmount: number | null;
    lostReason: string | null;
    lostReasonDescription: string | null;
    ShowAllHistoryToAssignedPerson: ActivityAccess;
    tagId: string | null;
    company: CompanyDTO;
    contact: ContactDTO;
    tag: TagDTO;
    leadSource: LeadSourceDTO;
    order: OrderDTO;


    contactName: string | null;
    companyName: string | null;
    leadSourceName: string | null;

    qualifiedLead: QualifiedLeadDTO;
    interests: InterestDTO[];
}