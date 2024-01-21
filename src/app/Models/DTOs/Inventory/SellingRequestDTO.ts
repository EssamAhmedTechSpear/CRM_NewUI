import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { UnitCategoryDTO } from "./UnitCategoryDTO";
import { AmenityDTO } from "./AmenityDTO";
import { UnitFeatureDTO } from "./UnitFeatureDTO";
import { PaymentPlanInstanceDTO } from "./PaymentPlanInstanceDTO";
import { MasterUnitDTO } from "./MasterUnitDTO";
import { UnitDTO } from "./UnitDTO";

export class SellingRequestDTO extends InventoryBaseObjectDTO {
    englishUnitName: string;
    arabicUnitName: string;
    arabicUnitDescription: string;
    englishUnitDescription: string;
    customerDescription: string;
    saleType: number;
    locationTree: number;
    projectName: string | null;
    unitCategoryId: string;
    subUnitCategoryId: string;
    areaDistrictId: string;
    address: string;
    longtude: number;
    latitude: number;
    floorNumber: number | null;
    numberOfFloors: number;
    unitAreaSQM: number;
    unitFinishingType: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    cashPrice: number;
    reservationAmount: number;
    defaultPaymentPlanId: string | null;
    unitCurrencyId: string;
    isApproved: boolean;
    contactId: string;
    unitFeatures: UnitFeatureDTO[];
    inventoryAttachments: InventoryAttachmentDTO[];
    masterUnits: MasterUnitDTO[] | null;
    units: UnitDTO[] | null;
    unitCategory: UnitCategoryDTO;
    subUnitCategory: UnitCategoryDTO;
    amenities: AmenityDTO[];
    paymentPlanInstances: PaymentPlanInstanceDTO[];

    coverPhotoChanged: boolean = false;
    deletedImages: string[] = [];


    unitCategoryName: string;
    subUnitCategoryName: string;
    Approvedvalue:string;
    saleTypeName:string;
}