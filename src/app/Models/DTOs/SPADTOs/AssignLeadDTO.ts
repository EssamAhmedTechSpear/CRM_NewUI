import { ActivityAccess } from "./ActivityDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class AssignLeadDTO extends SPABaseObjectDTO{
    report: string;
    showAllHistoryToAssignedPerson: ActivityAccess;
}