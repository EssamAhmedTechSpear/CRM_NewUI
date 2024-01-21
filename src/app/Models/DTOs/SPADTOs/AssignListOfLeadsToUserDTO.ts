import { ActivityAccess } from "./ActivityDTO";
import { AssignLeadDTO } from "./AssignLeadDTO";
import { LeadIdWithReportDTO } from "./LeadIdWithReportDTO";

export class AssignListOfLeadsToUserDTO{
    leads:LeadIdWithReportDTO[];
    assignedTo :string;
    showAllHistoryToAssignedPerson: ActivityAccess;
    successfullyAssigndLeads:AssignLeadDTO[];
}

