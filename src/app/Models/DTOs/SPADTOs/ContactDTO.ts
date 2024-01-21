import { CountryDTO } from "../SharedDTOs/Country/CountryDTO";
import { CompanyDTO } from "./CompanyDTO";
import { LeadDTO } from "./LeadDTO";
import { SPAAttachmentDTO } from "./SPAAttachmentDTO";
import { SPABaseObjectDTO } from "./SPABaseObjectDTO";

export class ContactDTO extends SPABaseObjectDTO {
  arabicFullName: string;
  englishFullName: string;


  jobTitle: string;
  birthDate: string | null;
  countryId: string | null;
  governmentId: string | null;
  areaId: string | null;
  primaryPhoneNumber: string;
  otherPhoneNumber: string;
  email: string;
  isMarketPlace: boolean;
  clientUserId: string | null;
  companyId: string | null;
  company: CompanyDTO | null;
  imageChanged: boolean;
  leads: LeadDTO[];
  spaAttachment: SPAAttachmentDTO | null;
  countryObj:CountryDTO | null;
  apartment: string;
  floor: string;
  first_name: string;
  last_name: string;
  street: string;
  building: string;
  phone_number: string;
  shipping_method: string;
  postal_code: string;
  city: string;
  country: string;
  state: string;
  // the next fields are used in CSV Sample Export
  profilePic:string;
  companyName:string;
  companyWebsite:string;
  conpanyPhone:string;

}

