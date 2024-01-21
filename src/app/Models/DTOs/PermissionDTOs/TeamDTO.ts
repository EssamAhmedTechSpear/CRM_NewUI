import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { UserDTO } from "./UserDTO";

export class TeamDTO extends PermissionBaseObjectDTO {
    name: string;
    teamManagerId: string;
    members: UserDTO[];
    clusterId:string;
    clusterTeam:TeamDTO;
    teamManagerUserName:string;
    applyRotation:boolean=false;

    applayRotationBool:string;
}