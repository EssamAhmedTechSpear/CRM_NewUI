export class SharedBaseObjectDTO{
    id :string = "00000000-0000-0000-0000-000000000000";
    createdOn: Date = new Date();
    createdBy: string = "00000000-0000-0000-0000-000000000000";
    modefiedOn: Date = new Date();
    modefiedBy: string = "00000000-0000-0000-0000-000000000000";
    deletedBy: string ="00000000-0000-0000-0000-000000000000";
    deletedOn: Date = new Date();
    statusId: string = "00000000-0000-0000-0000-000000000000";

    
    modefiedByUserName: string ;
    createdByUserName:string;
    
}