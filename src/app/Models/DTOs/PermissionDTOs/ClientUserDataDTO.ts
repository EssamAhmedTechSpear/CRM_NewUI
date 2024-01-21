import { PermissionBaseObjectDTO } from "./PermissionBaseObjectDTO";
import { UserDTO } from "./UserDTO";
export class ClientUserDataDTO extends PermissionBaseObjectDTO {

    sub: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    UserDTO: UserDTO;

}