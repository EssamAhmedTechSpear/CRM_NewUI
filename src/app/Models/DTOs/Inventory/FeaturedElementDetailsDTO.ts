import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class FeaturedElementDetailsDTO extends InventoryBaseObjectDTO {
  featuredElementId: string;
  featuredElementEntityId: string;
  order: number;
}
