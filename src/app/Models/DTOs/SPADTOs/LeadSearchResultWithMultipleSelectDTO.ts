export class LeadSearchResultWithMultipleSelectDTO {
    leadSourceIds: string[] | null;
    leadTypeIds: string[] | null;
    assignedToTeamIds: string[] | null;
    assignedToIds: string[] | null;
    assignedByIds: string[] | null;
    createdByIds: string[] | null;
    projectIds: string[] | null;
    developerIds: string[] | null;
    areaIds: string[] | null;
    governmentIds: string[] | null;
    statusIds: string[] | null;
    createdOnDateFrom: string | null;
    createdOnDateTo: string | null;
    campaignName: string | null;
    contactPhoneNumber: string | null;
    orderBy:number = 0;
    pageNumber: number;
    pageSize: number;
    leadSearchTypes :LeadSearchTypeDTO[]=[];
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