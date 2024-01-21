import { AmenityDTO } from "./AmenityDTO";
import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { PaymentPlanInstanceDTO } from "./PaymentPlanInstanceDTO";
import { ReviewDTO } from "./ReviewDTO";
import { UnitDTO } from "./UnitDTO";

export class MarketPlace_MasterUnitDetailsDTO {
    id: string;
    englishName: string;
    arabicName: string;
    arabicDescription: string;
    englishDescription: string;
    startingPrice: number;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    numberOfFloors: number;
    longtude: number;
    latitude: number;
    address: string;
    unitCategoryId: string;
    subUnitCategoryId: string;
    countryId: string;
    governmentId: string;
    developerId: string;
    notes: string | null;
    projectId: string | null;
    areaId: string | null;
    coverPhotoChanged: boolean | null;
    minPrice: number | null;
    defaultPaymentPlanId: string;
    masterUnitSqm: number | null;
    contactId: string | null;
    masterPlanUrl: string | null;
    inventoryAttachments: InventoryAttachmentDTO[] = [];
    layoutAttachments: InventoryAttachmentDTO[] = [];
    reviews: ReviewDTO[] = [];
    amenities: AmenityDTO[] = [];
    uploadedImagesUrls: string[] = [];
    layoutUrls: string[] = [];
    units: UnitDTO[] = [];
    paymentPlanInstances: PaymentPlanInstanceDTO[] = [];
    isFavorite: boolean;
    // reviewCard: ReviewCardDTO | null;
    duration: number;
    depositValue: number;
    installmentValue: number;
    coverPhoto: string | null;
    developerPhoto: string | null;
    projectPhoto: string | null;
    projectName: string | null;
    projectEstimatedDeliveryDate: string | null;
    unitCategoryName: string | null;
    subUnitCategoryName: string | null;
    areaName: string | null;
    governmentName: string | null;
    countryName: string | null;
    startingInstallmentPrice: number = 0;
  }