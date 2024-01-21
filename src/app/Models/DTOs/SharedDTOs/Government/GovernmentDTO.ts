import { CountryDTO } from "../Country/CountryDTO";
import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";

export class GovernmentDTO extends SharedBaseObjectDTO
{
   
    englishName?: string;
    arabicName?: string;
    countryId?: string;
    country: CountryDTO|null;
}