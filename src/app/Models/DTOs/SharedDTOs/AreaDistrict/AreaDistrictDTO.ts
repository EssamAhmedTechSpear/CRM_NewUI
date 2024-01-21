import { AreaDTO } from "../Area/AreaDTO";
import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";

export class AreaDistrictDTO extends SharedBaseObjectDTO {
    englishName: string;
    arabicName: string | null;
    longtude: number;
    latitude: number;
    englishDescription: string | null;
    arabicDescription: string | null;
    minimumMeterPrice: number;
    maximumMeterPrice: number;
    minimumRentPrice: number;
    maximumRentPrice: number;
    areaId: string;
    area: AreaDTO;
}