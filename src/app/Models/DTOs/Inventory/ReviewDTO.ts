import { DeveloperDTO } from "./DeveloperDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { MasterUnitDTO } from "./MasterUnitDTO";
import { ProjectDTO } from "./ProjectDTO";

export class ReviewDTO extends InventoryBaseObjectDTO {
    reviewTitle: string | null;
    numberOfLikes: number | null;
    numberOfDislikes: number | null;
    reviewValue: number;
    description: string;
    contactId: string;
    contactEnglishName: string;
    contactArabicName: string;
    projectId: string | null;
    masterUnitId: string | null;
    developerId: string | null;
    masterUnit: MasterUnitDTO | null;
    developer: DeveloperDTO | null;
    project: ProjectDTO | null;
}