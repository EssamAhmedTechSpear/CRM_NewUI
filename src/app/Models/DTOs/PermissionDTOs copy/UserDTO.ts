import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";

export class UserDTO extends PermissionBaseObjectDTO {
    // ClientUserId: string;
    userName: string;
    reportTo: string;
    roleId: string;
    teamId: string | null;
    roleName:string;
    teamName:string;
    statusName:string;
    isTeamLeaderOrClusterMember :Boolean=false;
 isAdmin :Boolean=false;

}
