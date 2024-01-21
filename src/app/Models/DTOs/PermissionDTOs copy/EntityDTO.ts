import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { UserAccessDTO } from "./UserAccessDTO";

export class EntityDTO extends PermissionBaseObjectDTO {
    name: string;
    userAccesses: Array<UserAccessDTO> = [];
}