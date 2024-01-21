import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { ProjectServiceDTO } from "./ProjectServiceDTO";
export class ProjectServiceTypeDTO extends InventoryBaseObjectDTO {
    public name: string;
    public projectServices: ProjectServiceDTO[];
}