export class InventoryBaseObjectDTO {
  id: string;
  createdOn: Date = new Date();
  createdBy: string = "00000000-0000-0000-0000-000000000000";
  modefiedOn: Date = new Date();
  modefiedBy: string = "00000000-0000-0000-0000-000000000000";
  deletedBy: string = "00000000-0000-0000-0000-000000000000";
  deletedOn: Date = new Date();
  statusId: string = "00000000-0000-0000-0000-000000000000";
  stateId: number = 0;


  statusName: string = '';
  modefiedByUserName: string ;
  createdByUserName:string;
  deletedByUserName:string;

  createdOnDateString:string;
  modefiedOnDateString:string;

}
