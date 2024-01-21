import { AreaDTO } from "../SharedDTOs/Area/AreaDTO";
import { SharedAttachmentDTO } from "../SharedDTOs/Attachment/SharedAttachmentDTO";
import { AmenityDTO } from "./AmenityDTO";
import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { PaymentPlanDTO } from "./PaymentPlanDTO";
import { PaymentPlanInstanceDTO } from "./PaymentPlanInstanceDTO";
import { ProjectDTO } from "./ProjectDTO";
import { SellingRequestDTO } from "./SellingRequestDTO";
import { UnitCategoryDTO } from "./UnitCategoryDTO";
import { UnitDTO } from "./UnitDTO";

export class MasterUnitDTO extends InventoryBaseObjectDTO {
    englishName: string = "";
  arabicName: string = "";
  arabicDescription: string = "";
  englishDescription: string = "";
  startingPrice: number = 0;
  numberOfBedrooms: number = 0;
  numberOfBathrooms: number = 0;
  numberOfFloors: number = 0;
  longtude: number = 0;
  latitude: number = 0;
  address: string = "";
  locationTree: any;
  unitCategoryId: string ;
  subUnitCategoryId?: string ;
  propertytype?: string;
  saleType: SaleType;
  developertype: string = "";
  type: boolean = false;
  notes: string | null = null;
  projectId: string | null = null;
  areaId: string | null = null;
  defaultPaymentPlanId: string ;
  unitCategory: UnitCategoryDTO = new UnitCategoryDTO();
  subUnitCategory: UnitCategoryDTO = new UnitCategoryDTO();
  project: ProjectDTO = new ProjectDTO();
  area: AreaDTO = new AreaDTO();
  minPrice: number | null = null;
  masterUnitSqm: number|null;
  masterUnitCode:number|null;
  resale: boolean | null = null;
  units: UnitDTO[] = [];
  inventoryAttachments: InventoryAttachmentDTO[] = [];
  sharedAttachments: SharedAttachmentDTO[] = [];
  paymentPlanInstances: PaymentPlanInstanceDTO[] = [];
  amenities: AmenityDTO[] = [];
  coverPhotoChanged: boolean = false;
  deletedImages: string[] = [];
  isClicked: boolean = false;
  underMarketPrice : boolean = false;
  coverPhoto:string;
  developerPhoto: string;
  InstallmentValue: number;
  reviews:any[]=[];
}
export enum SaleType
{
    Primary,
    Resale,
    Rent,
    Fund,
}