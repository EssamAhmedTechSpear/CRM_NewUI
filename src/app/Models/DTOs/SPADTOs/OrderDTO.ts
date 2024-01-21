import { SelectedUnitDTO } from "../Inventory/SelectedUnitDTO";
import { ActivityAccess } from "./ActivityDTO";
import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { QualifiedLeadDTO } from "./QualifiedLeadDTO";
import { SPAAttachmentDTO } from "./SPAAttachmentDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { TagDTO } from "./TagDTO";

export class OrderDTO extends SPABaseObjectDTO {
 /*    leadSourceId: string;
    opportunityId: string;
    opportunity: OpportunityDTO; */
    report:string|null;
    paidAmount :number|null;
    campaignName :string|null;
    contactId :string|null;
    leadSourceId :string|null;
    contactType :string|null; //enum
    opportunityId :string|null;
    qualifiedLeadId :string|null;
    companyId  :string|null;
    lostReason  :string|null;
    lostReasonDescription  :string|null;
    reservedBy  :string|null;
    tagId  :string|null;
    collectedBy  :string|null;
    contractedBy  :string|null;
    company :CompanyDTO|null ;
    contact   :ContactDTO |null ;
    leadSource  :LeadSourceDTO |null ;
    opportunity  :OpportunityDTO |null ;
    qualifiedLead  :QualifiedLeadDTO |null ;
    selectedUnits :SelectedUnitDTO[]=[]
    sPAAttachments  :SPAAttachmentDTO[]=[]
    tag:TagDTO |null;
    reservedOn  :string|null;
    contractedOn  :string|null;
    collectedOn  :string|null;

    ShowAllHistoryToAssignedPerson: ActivityAccess;


    opportunityName:string|null;

    contactName: string | null;
    companyName: string | null;
    leadSourceName: string | null;
}