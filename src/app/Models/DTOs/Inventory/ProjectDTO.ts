import { InventoryAttachmentDTO } from "./InventoryAttachmentDTO";
import { InventoryBaseObjectDTO } from "./InventoryBaseObjectDTO";
import { PaymentPlanInstanceDTO } from "./PaymentPlanInstanceDTO";
import { ProjectServiceDTO } from "./ProjectServiceDTO";

export class ProjectDTO extends InventoryBaseObjectDTO {
  englishName: string;
  arabicName: string;
  englishDescription: string;
  arabicDescription: string;
  startingPrice: number;
  startingInstallmentPrice: number;
  estimatedDeliveryDate: string;
  url: string;
  longtude: number;
  latitude: number;
  address: string;
  areaId: string;
  locationTree: any;
  projectType: number;
  developerId: string;
  parentProjectId: string | null;
  parentProject: ProjectDTO;
  developer: any;
  childProjects: ProjectDTO[];
  inventoryAttachments: any[];
  masterUnits: any[];
  projectServices: ProjectServiceDTO[];
  paymentPlans: any[];
  coverPhoto: InventoryAttachmentDTO;
  masterPlanPhoto: InventoryAttachmentDTO;
  MasterPlanPhotoUrl: string = '';
  LogoPhotoUrl: string = '';
  deletedAttachments: string[] = [];
  paymentPlanInstances: PaymentPlanInstanceDTO[] = [];

  area: any;
}
