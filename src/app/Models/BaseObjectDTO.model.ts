import { Data } from "@angular/router";

export class BaseObjectDTO {
  Id: string = "";
  StatusId: string = "";
  CreatedOn: Date = new Date();
  ModifiedOn: Date = new Date();
  CreatedBy: string = "";
  ModifiedBy: string = "";
}
