import { CurrencyDTO } from "../SharedDTOs/Currency/CurrencyDTO";
import { AdsAttachmentDTO } from "./AdsAttachmentDTO";
import { AdsBaseObjectDTO } from "./AdsBaseObjectDTO";

export class AdsManagmentDTO extends AdsBaseObjectDTO {
    englishName: string;
    arabicName: string;
    englishDescription: string;
    arabicDescription: string;
    adsUrl: string;
    isGlobal: number;
    imageChanged: boolean = false;
    mobileImageChanged: boolean = false;
    companyName: string;
    currencyId: string;
    currency: CurrencyDTO;
    startDate: string;
    endDate: string;
    costPerDay: number;
    taxValue: number;
    totalCost: number;
    developerId: string | null;
    projectId: string | null;
    countryId: string | null;
    governmentId: string | null;
    areaId: string | null;
    areaDistrictId: string | null;
    adType: number;
    deletedImages: string[];
    adsAttachments: AdsAttachmentDTO[];
}