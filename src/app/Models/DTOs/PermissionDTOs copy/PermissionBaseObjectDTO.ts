import { Strings } from "src/app/APIs/Strings";

export class PermissionBaseObjectDTO {
  id: string | null;
  createdOn: Date | null;
  createdBy: string | null;
  deletedBy: string | null;
  deletedOn: string | null;
  modefiedOn: Date | null;
  modefiedBy: string | null;
  statusId: string | null = Strings.statusIDs.Active;
  createdByTeamId: string | null;
  assignedToTeamId: string | null;
  assignedTo: string | null;
 

  modefiedByUserName: string ;
  createdByUserName:string;
}
