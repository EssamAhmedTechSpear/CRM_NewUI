export class LeadSearchDTO {
    leadSourceId: string | null;
    leadTypeId: string | null;
    assignedToTeamId: string | null;
    assignedToId: string | null;
    assignedById: string | null;
    createdById: string | null;
    projectId: string | null;
    developerId: string | null;
    areaId: string | null;
    governmentId: string | null;
    statusId: string | null;
    createdOnDateFrom: string | null;
    createdOnDateTo: string | null;
    campaignName: string | null;
    contactPhoneNumber: string | null;
    orderBy:number = 0;
    pageNumber: number;
    pageSize: number;
    leadSearchType :LeadSearchTypeDTO;
    searchInLeadsTypes:SearchInLeadsTypesDTO;
}
enum LeadSearchTypeDTO {
    Fresh,
    Pool,
    NotCommunicated,
    Unseen
}

 export enum SearchInLeadsTypesDTO
{
    Leads,
    QualifiedLeads,
    DisqualifiedLeads
}

export enum SearchLeadsOrderBy{
    noOrder,
    lastcreated,
    newcreated,
    reportAsc,
    reportDesc,
    compaignNameAsc,
    compaignNameDesc,
}