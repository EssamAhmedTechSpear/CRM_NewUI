import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { PermissionDTO } from "./PermissionDTO";
import { UserAccessDTO } from "./UserAccessDTO";

export class RoleDTO extends PermissionBaseObjectDTO {
    name: string;
    // Permissions: PermissionDTO[];
    userAccesses: UserAccessDTO[] = [];
}