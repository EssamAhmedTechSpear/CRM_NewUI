import { SelectedUnitDTO } from "../Inventory/SelectedUnitDTO";
import { StatusDTO } from "../StatusDTO";
import { ActivityAccess, ActivityDTO } from "./ActivityDTO";
import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { LeadTypeDTO } from "./LeadTypeDTO";
import { SPAAttachmentDTO } from "./SPAAttachmentDTO";
import { TagDTO } from "./TagDTO";

type NewType = StatusDTO;

export class OrderDetailsDTO {
    id: string;
    statusId: string;

    contactId:string;

    leadSourceId :string;
    opportunityId :string;
    qualifiedLeadId :string;
    companyId: string;
    lostReason: string;
    tagId: string;
    lostReasonDescription: string;
    report: string;
    campaignName: string;
    createdOn: Date = new Date();
    createdBy: string | null;
    modefiedOn: Date = new Date();
    modefiedBy: string | null;
    assignedTo: string | null;
    assignedby: string | null;
    assignedAt:Date = new Date();
    createdByTeamId: string | null;
    assignedToTeamId: string | null;
    reservedOn: string | null;
    reservedBy: string | null;
    contractedOn: string | null;
    contractedBy: string | null;
    collectedOn: string | null;
    collectedBy: string | null;
    paidAmount: number | null;
    leadSource: LeadSourceDTO;
    leadType: LeadTypeDTO;
    status: StatusDTO;
    contact: ContactDTO;
    contactType :string|null; //enum
    ShowAllHistoryToAssignedPerson: ActivityAccess;

    company: CompanyDTO;
    tag: TagDTO;
    activities: ActivityDTO[];
    selectedUnits: SelectedUnitDTO[];
    spaAttachments: SPAAttachmentDTO[];
}