import { InventoryBaseObjectDTO } from "./DTOs/Inventory/InventoryBaseObjectDTO";

export class FeatureElementDTO extends InventoryBaseObjectDTO{
  type: number = 0;
  developersIds: number[] = [];
  ProjectIds: number[] = [];
}
