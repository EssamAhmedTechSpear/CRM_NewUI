import { ActivityEmailTemplateDTO } from "./ActivityEmailTemplateDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class ActivityDTO extends SPABaseObjectDTO {
    duration: number | null;
    location: string | null;
    activitySubject: string | null;
    nextCallDate: string | null;
    message: string | null;
    emailObjective: string | null;
    activityType: ActivityType;
    comment: string | null;
    activityEmailTemplateId: string | null;
    activityEmailTemplate: ActivityEmailTemplateDTO;
    relatedEntityId: string | null;
    activityTypeName: string | null;
}

export enum ActivityAccess{
 OnlyHisHistory,
 All,
 None
}
export enum ActivityType
{
    Whatsapp,
    Zoom,
    Meeting,
    Call,
    Email,
    Visit,
    Audit,
    Note
}
