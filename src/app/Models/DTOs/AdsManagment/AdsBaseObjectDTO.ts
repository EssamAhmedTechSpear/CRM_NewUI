
export class AdsBaseObjectDTO {
    id: string;
    createdOn: string;
    createdBy: string = "00000000-0000-0000-0000-000000000000";
    modefiedOn: string;
    modefiedBy: string = "00000000-0000-0000-0000-000000000000";
    deletedBy: string = "00000000-0000-0000-0000-000000000000";
    deletedOn: string;
    statusId: string;
    stateId: number = 0;
   
}