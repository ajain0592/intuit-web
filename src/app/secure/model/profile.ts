import { BusinessAddress } from "./businessAddress";
import { TaxIdentifiers } from "./taxIdentifiers";

export class BusinessProfile {
    userId: string;
    companyName: string;
    legalName: string;
    businessAddress: BusinessAddress;
    legalAddress:string;
    taxIdentifiers:TaxIdentifiers;
    email: string;
    webSite: string;
}
