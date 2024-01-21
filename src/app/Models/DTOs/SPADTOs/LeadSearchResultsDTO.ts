import { CustomDropdownsValuesDTO } from "../CustomDropdownsValuesDTO";
import { DeveloperDTO } from "../Inventory/DeveloperDTO";
import { ProjectDTO } from "../Inventory/ProjectDTO";
import { TeamDTO } from "../PermissionDTOs/TeamDTO";
import { UserDTO } from "../PermissionDTOs/UserDTO";
import { AreaDTO } from "../SharedDTOs/Area/AreaDTO";
import { GovernmentDTO } from "../SharedDTOs/Government/GovernmentDTO";
import { ContactDTO } from "./ContactDTO";
import { LeadSourceDTO } from "./LeadSourceDTO";
import { LeadTypeDTO } from "./LeadTypeDTO";

export class LeadSearchResultsDTO {
    leadSources: CustomDropdownsValuesDTO[] = [];
    leadTypes: CustomDropdownsValuesDTO[]= [];
    contacts: CustomDropdownsValuesDTO[]= [];
    areas: CustomDropdownsValuesDTO[]= [];
    governments: CustomDropdownsValuesDTO[]= [];
    projects: CustomDropdownsValuesDTO[]= [];
    developers: CustomDropdownsValuesDTO[]= [];
    users: CustomDropdownsValuesDTO[]= [];
    teams: CustomDropdownsValuesDTO[]= [];
}