import { CountryDTO } from "../Country/CountryDTO";
import { GovernmentDTO } from "../Government/GovernmentDTO";
import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";
import { AreaDTO } from "./AreaDTO";

export class AreaHierarchyDTO extends SharedBaseObjectDTO {
    governments: GovernmentDTO[];
    areas: AreaDTO[];
    selectedArea: AreaDTO= new AreaDTO();
    selectedGovernment: GovernmentDTO= new GovernmentDTO();
    selectedCountry: CountryDTO= new CountryDTO();

    countryId: string;
    governmentId: string;
}