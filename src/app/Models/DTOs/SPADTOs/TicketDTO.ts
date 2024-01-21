import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class TicketDTO extends SPABaseObjectDTO {
    fullName: string;
    email: string;
    phoneNumber: string;
    details: string;
    type: number;
}