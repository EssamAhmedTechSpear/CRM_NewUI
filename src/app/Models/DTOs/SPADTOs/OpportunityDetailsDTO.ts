import { CustomDropdownsValuesDTO } from "../CustomDropdownsValuesDTO";
import { StatusDTO } from "../StatusDTO";
import { ActivityAccess, ActivityDTO } from "./ActivityDTO";
import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { InterestDTO } from "./InterestDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { LeadTypeDTO } from "./LeadTypeDTO";
import { OrderDTO } from "./OrderDTO";
import { QualifiedLeadDTO } from "./QualifiedLeadDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { TagDTO } from "./TagDTO";

export class OpportunityDetailsDTO extends SPABaseObjectDTO {
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
    leadSource: LeadSourceDTO;
    leadType:LeadTypeDTO
    tagId: string | null;
    company: CompanyDTO;
    contact: ContactDTO;
    tag: TagDTO;
    status:StatusDTO
    order: OrderDTO;
    interests: InterestDTO[];
    activities:ActivityDTO[];
    countryDropDown:CustomDropdownsValuesDTO[]=[];
}