import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class ProjectServiceDTO extends InventoryBaseObjectDTO {
    public name: string;
    public value: number;
    public quantity: number;
    public projectServiceTypeId: string;
    public ProjectId: string;
}