import { OrderDTO } from "./OrderDTO";
import { SPAAttachmentDTO } from "./SPAAttachmentDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class ContractedOrderDTO extends SPABaseObjectDTO {
  order:OrderDTO|null;
  sPAAttachment:SPAAttachmentDTO|null;
}