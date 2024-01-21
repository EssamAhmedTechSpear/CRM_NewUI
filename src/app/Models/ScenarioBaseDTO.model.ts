import { UserDTO } from "./DTOs/PermissionDTOs/UserDTO";

export class ScenarioBaseDTO {
  TypeName: string = "";
  Body: any;
  Dto: any;
  CurrentLoggedInUser: UserDTO|null = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
  StateId: number = 0;
  auditMessage: string = "";
  pageNumber:number=0;
  pageSize:number=0;
  applyFilterValue:string="";
  filterQuery:dto[]=[]
  applyFilterProperties:[]=[]
}
export class dto {
  field:string;
filter:string;
search:string;
}