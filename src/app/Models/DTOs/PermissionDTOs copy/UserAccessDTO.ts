import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";

export interface UserAccessDTO extends PermissionBaseObjectDTO {
    entityId: string;
    permissionId: string;
    roleId: string;
    scopeId: number;
}