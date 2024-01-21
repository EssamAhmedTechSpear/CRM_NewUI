import { CM_BaseObjectDTO } from "./CM_BaseObjectDTO";

export class SubscriberDTO extends CM_BaseObjectDTO {
    email: string;
    latitude: string | null;
    longtude: string | null;
}