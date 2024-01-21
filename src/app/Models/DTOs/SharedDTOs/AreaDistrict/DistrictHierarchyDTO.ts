import { AreaHierarchyDTO } from "../Area/AreaHierarchyDTO";
import { CountryDTO } from "../Country/CountryDTO";
import { SharedBaseObjectDTO } from "../SharedBaseObjectDTO";
import { AreaDistrictDTO } from "./AreaDistrictDTO";

export class DistrictHierarchyDTO extends SharedBaseObjectDTO {
    areaDistrict: AreaDistrictDTO[];
    selectedDistrict: AreaDistrictDTO= new AreaDistrictDTO();
    countries: CountryDTO[];
    areaHierarchy: AreaHierarchyDTO;
}