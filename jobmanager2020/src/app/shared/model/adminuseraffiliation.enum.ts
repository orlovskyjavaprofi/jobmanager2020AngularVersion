import { RecentuserjobapplComponent } from 'src/app/components/recentuserjobappl/recentuserjobappl.component';

export enum AdminUserAffiliation {
  LLC = 'limited liability company',
  JSC = 'joint stock company',
  CLP = 'civil law partnership',
  NPO = 'non profit person or organization',
}

export function findKeyForEnumOfUserAdminAffilOrga(
  inputForSearchedText: string
): string {
  let result: string = '';
  let matchfound: boolean = false;
  let rawjsonstring: string = JSON.stringify(
    AdminUserAffiliation,
    function (key, value) {
      if (value === inputForSearchedText) {
        result = key;
        return value;
      } else {
        return value;
      }
    }
  );

  return result;
}
export function searchForOrgaMatchKey(inputForSearchedText: string): number {
  let resultindex: number = 0;

  resultindex = Object.values(AdminUserAffiliation).indexOf(
    inputForSearchedText as AdminUserAffiliation
  );

  return resultindex;
}

export function selectEnumForTheGivenUserAdminOrga(
  inputForSearchedText: string
): AdminUserAffiliation {
  switch (inputForSearchedText) {
    case 'civil law partnership': {
      return AdminUserAffiliation.CLP;
      break;
    }
    case 'joint stock company': {
      return AdminUserAffiliation.JSC;
      break;
    }
    case 'limited liability company': {
      return AdminUserAffiliation.LLC;
      break;
    }
    case 'non profit person or organization': {
      return AdminUserAffiliation.NPO;
      break;
    }
    default:
      return AdminUserAffiliation.NPO;
      break;
  }
}
