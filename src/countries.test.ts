import countries from './countries';

describe('Countries Data', () => {
  it('should map data correctly to Country objects', () => {
    const expectedCountry = {
      code: 'VN',
      label: 'Viet Nam',
      flag: '/flags/VN.svg',
    };
    console.log('countries', countries);
    
    expect(countries).toContainEqual(expectedCountry);
  });
});