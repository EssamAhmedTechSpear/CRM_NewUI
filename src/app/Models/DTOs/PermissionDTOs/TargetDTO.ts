import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { UserDTO } from "./UserDTO";

export class TargetDTO extends PermissionBaseObjectDTO {
    userID: string;
    month: string;
    year: string;
    value:number;
    user:UserDTO;

    userName:string="";
    formatCreatedOnDate:string="";  
}