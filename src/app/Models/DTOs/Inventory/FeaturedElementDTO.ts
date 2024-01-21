import { FeaturedElementDetailsDTO } from "./FeaturedElementDetailsDTO";
import { FeaturedEntityDTO } from "./FeaturedEntityDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";

export class FeaturedElementDTO extends InventoryBaseObjectDTO {
  entityName: string;
  featuredElementsDetails: FeaturedElementDetailsDTO[] = [];
  featuredEntities: FeaturedEntityDTO[] = [];
}
