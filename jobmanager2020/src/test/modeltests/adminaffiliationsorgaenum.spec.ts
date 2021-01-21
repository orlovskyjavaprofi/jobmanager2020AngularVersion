import {
  AdminUserAffiliation,
  findKeyForEnumOfUserAdminAffilOrga,
  searchForOrgaMatchKey,
  selectEnumForTheGivenUserAdminOrga,
} from '../../app/shared/model/adminuseraffiliation.enum';

describe('Adminuser enum affliation', () => {
  let EnumForTest: AdminUserAffiliation;

  beforeEach(() => {
    EnumForTest = AdminUserAffiliation.LLC;
  });
  test('case search for enum when given first elem of enum', () => {
    let userProvidedInputText: string = 'limited liability company';
    let testd: string = findKeyForEnumOfUserAdminAffilOrga(
      userProvidedInputText
    );

    expect(searchForOrgaMatchKey(userProvidedInputText)).toBe(0);
  });

  test('case search for string in json stringify and find key for enum as string', () => {
    let userProvidedInputText: string = 'civil law partnership';

    expect(findKeyForEnumOfUserAdminAffilOrga(userProvidedInputText)).toBe(
      'CLP'
    );
  });

  test('case search find enum for civil law partnership', () => {
    let userProvidedInputText: string = 'civil law partnership';

    expect(selectEnumForTheGivenUserAdminOrga(userProvidedInputText)).toBe(
      AdminUserAffiliation.CLP
    );
  });

  test('case search find enum for joint stock company', () => {
    let userProvidedInputText: string = 'joint stock company';

    expect(selectEnumForTheGivenUserAdminOrga(userProvidedInputText)).toBe(
      AdminUserAffiliation.JSC
    );
  });

  test('case search find enum for limited liability company', () => {
    let userProvidedInputText: string = 'limited liability company';

    expect(selectEnumForTheGivenUserAdminOrga(userProvidedInputText)).toBe(
      AdminUserAffiliation.LLC
    );
  });

  test('case search find enum for non profit person or organizationy', () => {
    let userProvidedInputText: string = 'non profit person or organization';

    expect(selectEnumForTheGivenUserAdminOrga(userProvidedInputText)).toBe(
      AdminUserAffiliation.NPO
    );
  });

  test('case search find enum for anon orga invalid input', () => {
    let userProvidedInputText: string = 'anonen orga';

    expect(selectEnumForTheGivenUserAdminOrga(userProvidedInputText)).toBe(
      AdminUserAffiliation.NPO
    );
  });

  test('case search for string in json stringify and find key for enum as string with another search affiliation orga', () => {
    let userProvidedInputText: string = 'joint stock company';
    expect(findKeyForEnumOfUserAdminAffilOrga(userProvidedInputText)).toBe(
      'JSC'
    );
  });

  test('case search for enum  when given last elem of enum', () => {
    let userProvidedInputText: string = 'non profit person or organization';
    expect(searchForOrgaMatchKey(userProvidedInputText)).toBe(3);
  });
  test('case search for enum with wrong input', () => {
    let userProvidedInputText: string = 'dfsdn';
    expect(searchForOrgaMatchKey(userProvidedInputText)).toBe(-1);
  });
});
