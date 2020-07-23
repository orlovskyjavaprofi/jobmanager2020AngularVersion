import { CompanySizeTypes } from './companysizes';
import { CompanyTypes } from './companytypes';
import { SalutationTypes } from './salutationtypes';
export class JobApplication {
  userJobApplicationDate: string = 'Day.Month.Year';
  userJobApplicationCountry: string = 'default country';
  userJobApplicationCityName: string = 'default city';
  userJobApplicationIndustry: string = 'default industry';
  userCompanySizeType: CompanySizeTypes = CompanySizeTypes.Small;
  userCompanyType: CompanyTypes = CompanyTypes.Public;
  emailOfCompanyRecipient: string = 'default email';
  companyRecipientSalutation: SalutationTypes = SalutationTypes.Mrs;

  public constructor(
    userInputForJobApplicationDate: string,
    userInputForJobApplicationCountry: string,
    userInputForJobApplicationCity: string,
    userInputForJobApplicationCompanyIndustry: string,
    userInputForCompanySize: CompanySizeTypes,
    userInputForCompanyType: CompanyTypes,
    userInputForCompanyEmailRecipient: string,
    userInputForCompanyRecipientSalutation: SalutationTypes
  ) {
    this.userJobApplicationDate = userInputForJobApplicationDate;
    this.userJobApplicationCountry = userInputForJobApplicationCountry;
    this.userJobApplicationCityName = userInputForJobApplicationCity;
    this.userJobApplicationIndustry = userInputForJobApplicationCompanyIndustry;
    this.userCompanySizeType = userInputForCompanySize;
    this.userCompanyType = userInputForCompanyType;
    this.emailOfCompanyRecipient = userInputForCompanyEmailRecipient;
    this.companyRecipientSalutation = userInputForCompanyRecipientSalutation;
  }

  getDateWhenJobApplicationWasSend(): string {
    return this.userJobApplicationDate;
  }

  getCouontryNameWhereJobApplicationSend(): string {
    return this.userJobApplicationCountry;
  }
  getCityNameWhereJobApplicationSend(): string {
    return this.userJobApplicationCityName;
  }

  getIndustryWhereJobApplicationSend(): string {
    return this.userJobApplicationIndustry;
  }

  getCompanySizeWhereJobApplicationSend(): CompanySizeTypes {
    return this.userCompanySizeType;
  }

  getCompanyTypeWhereJobApplicationSend(): CompanyTypes {
    return this.userCompanyType;
  }

  getEmailOfJobApplicationRecipient(): string {
    return this.emailOfCompanyRecipient;
  }

  getCompanyRecipientSalutationType(): SalutationTypes {
    return this.companyRecipientSalutation;
  }
}
