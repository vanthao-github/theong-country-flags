import data from './data.json';

export interface Country {
  code: string;
  label: string;
  flag: string;
}

const countries: Country[] = data.map((country: any) => ({
  code: country.code,
  label: country.label,
  flag: `/flags/${country.code}.svg`,
}));
export default countries;
