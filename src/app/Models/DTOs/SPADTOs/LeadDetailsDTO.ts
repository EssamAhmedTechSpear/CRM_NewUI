import { ActivityAccess, ActivityDTO } from "./ActivityDTO";
import { CompanyDTO } from "./CompanyDTO";
import { ContactDTO } from "./ContactDTO";
import { InterestDTO } from "./InterestDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";
import { TagDTO } from "./TagDTO";

export class LeadDetailsDTO extends SPABaseObjectDTO {
    projectId: Array<string> = [];
    interestsUpdated: boolean = false;
    report: string;
    campaignName: string;
    contactId: string;
    leadSourceId: string;
    contactType: number|string;
    opportunityId: string;
    companyId: string;
    scheduleDate:Date;
    company: CompanyDTO;
    tagId: string | null;
    contact: ContactDTO;
    tag: TagDTO;
    leadSource: LeadSourceDTO;
    opportunity: OpportunityDTO;
    showAllHistoryToAssignedPerson: ActivityAccess;
    interests: InterestDTO[];
    paidAmount: number;
    assignedToTeamManagerId : string |null;
    lastOpenDate: Date | null;
    LastOpenBy: string = "00000000-0000-0000-0000-000000000000";
     activities: ActivityDTO [];
}
