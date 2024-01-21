import { CustomDropdownsValuesDTO } from "../CustomDropdownsValuesDTO";
import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { UserIdentityDTO } from "./UserIdentityDTO";
export class AssignUsersTeamsDTO extends PermissionBaseObjectDTO {

    users:UserIdentityDTO[];
    usersDropDown:CustomDropdownsValuesDTO[];

    teamId:string;


}