import { ActivityAccess } from "./ActivityDTO";
import { AssignLeadDTO } from "./AssignLeadDTO";
import { LeadIdWithReportDTO } from "./LeadIdWithReportDTO";

export class AssignListOfLeadsToTeamDTO{
    leads:LeadIdWithReportDTO[];
    assignedToTeamId :string;
    successfullyAssigndLeads:AssignLeadDTO[];
}

