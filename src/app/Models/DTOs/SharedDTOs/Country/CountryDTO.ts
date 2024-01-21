import { GovernmentDTO } from "../Government/GovernmentDTO";
import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";

export class CountryDTO extends SharedBaseObjectDTO
{
    code?: string;
    currencyId?: string;
    arabicName?: string;
    englishName?: string;
    currencyName?: string;
    governments?: GovernmentDTO[] = [];

}