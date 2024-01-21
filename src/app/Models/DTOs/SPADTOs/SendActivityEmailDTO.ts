import { ActivityType } from "./ActivityDTO";

export class SendActivityEmailDTO {
  Body:string;
  Comment:string | null;
  Subject:string;
  Message: string | null;
  SendEmail:string;
  ReceiveEmail:string;
  Duration:number;
  NextCallDate:Date | null;
  ActivityType :number;
  Address :string;
  RelatedEntityId: string;
}


