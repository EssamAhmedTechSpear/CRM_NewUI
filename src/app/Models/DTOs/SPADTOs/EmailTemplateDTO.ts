import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class EmailTemplateDTO extends SPABaseObjectDTO {
    emailFrom: string;
    emailTo: string;
    emailCC: string;
    body: string;
}