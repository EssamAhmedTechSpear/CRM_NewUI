import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { MasterUnitDTO } from "./MasterUnitDTO";
import { SellingRequestDTO } from "./SellingRequestDTO";
import { UnitFeatureDTO } from "./UnitFeatureDTO";

export class UnitDTO extends InventoryBaseObjectDTO {
  unitID: string;
  developerCode: string;
  masterUnitId: string;
  sellingRequestId: string | null;
  cashCurrencyId: string;
  cashPrice: number;
  priceWithoutFeatures: number;
  floorNumber: number;
  reservationAmount: number;
  unitAreaSQM: number;
  englishDescription: string | null;
  arabicDescription: string | null;
  unitFinishingType: number;
  deliveryDate: string | null;
  saleType: number;
  masterUnit: MasterUnitDTO;
  sellingRequest: SellingRequestDTO | null;
  unitFeatures: UnitFeatureDTO[];
  inventoryAttachments: InventoryAttachmentDTO[];
  deletedImages: string[] = [];
  SaleTypeName: string = '';
  saleTypeName: string = '';
  finishingTypeName: string = '';
  developerName: string = '';
  projectName: string = ''; 

}