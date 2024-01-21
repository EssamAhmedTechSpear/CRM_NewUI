import { SelectedUnitDTO } from "../Inventory/SelectedUnitDTO";
import { ActivityEmailTemplateDTO } from "./ActivityEmailTemplateDTO";
import { OpportunityDTO } from "./OpportunityDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class CloseOpportunityAsWonDTO extends SPABaseObjectDTO {
    opportunityDTO:OpportunityDTO|null;
    selectedUnits:SelectedUnitDTO[] =[];

}
