export class SPABaseObjectDTO{
    id :string = "00000000-0000-0000-0000-000000000000";
    createdOn: Date = null;
    createdBy: string = "00000000-0000-0000-0000-000000000000";
    modefiedOn: Date = null;
    modefiedBy: string = "00000000-0000-0000-0000-000000000000";
    deletedBy: string ="00000000-0000-0000-0000-000000000000";
    deletedOn: Date = null;
    assignedby: string ="00000000-0000-0000-0000-000000000000";
    assignedTo: string ="00000000-0000-0000-0000-000000000000";
    assignedAt: Date = null;
    statusId: string ;
    createdByTeamId: string | null;
    assignedToTeamId: string | null;

    modefiedByUserName: string ='';
    createdByUserName:string ='';
    assignedToUserName: string ='';
    assignedByUserName: string ='';
    deletedByUserName: string ='';
    assignedToTeamName: string ='';
    // field that get mapped in the front end

    statusName:string|null;
    createdOnDateString:string;
    modefiedOnDateString:string;
    collectedOnDateString:string;
    contractedOnDateString:string;

    
}
