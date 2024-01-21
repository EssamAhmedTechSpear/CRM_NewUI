import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { UserIdentityDTO } from "./UserIdentityDTO";
export class AssignUsersRolesDTO extends PermissionBaseObjectDTO {

    users:UserIdentityDTO[];
    roleId:string;
}