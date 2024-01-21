export class LeadSearchResultDTO {
    id: string;
    report:string|null;
    leadSourceName: string | null;
    leadTypeName: string | null;
    assignedToTeamId: string | null;
    assignedToTeamName: string | null;
    assignedToId: string | null;
    assignedToUserName: string | null;
    assignedById: string | null;
    assignedByUserName: string | null;
    createdById: string | null;
    createdByUserName: string | null;
    modifiedById: string | null;
    modifiedByUserName: string | null;
    statusName: string | null;
    statusId: string | null;
    createdOn: string;
    campaignName: string | null;
    contactPhoneNumber: string | null;
    contactName: string | null;
    contactId: string | null;
    contactTypeName:string|null;


    // fields not in backend modek
    createdOnDate:string|null
}