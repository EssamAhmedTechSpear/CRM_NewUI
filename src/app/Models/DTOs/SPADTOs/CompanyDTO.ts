import { AreaDTO } from "../SharedDTOs/Area/AreaDTO";
import { CountryDTO } from "../SharedDTOs/Country/CountryDTO";
import { ContactDTO } from "./ContactDTO";
import { LeadDTO } from "./LeadDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class CompanyDTO extends SPABaseObjectDTO {
    companyName: string;
    countryRegion: string;
    website: string;
    businessPhone: string;
    email: string;
    primaryContactId: string;
    areaId: string;
    contacts: ContactDTO[];
    leads: LeadDTO[];
    country : CountryDTO;
    area : AreaDTO;
    

    countryName : string;
    areaName : string;
}