const grades = [
  { label: 'K', value: 'K', level: 'SLS' },
  { label: '1', value: '1', level: 'SLS' },
  { label: '2', value: '2', level: 'SLS' },
  { label: '3', value: '3', level: 'RSS' },
  { label: '4', value: '4', level: 'RSS' },
  { label: '5', value: '5', level: 'RSS' },
  { label: '6', value: '6', level: 'LMS' },
  { label: '7', value: '7', level: 'LMS' },
  { label: '8', value: '8', level: 'LMS' },
  { label: '9', value: '9', level: 'LHS' },
  { label: '10', value: '10', level: 'LHS' },
  { label: '11', value: '11', level: 'LHS' },
  { label: '12', value: '12', level: 'LHS' },
];

const appUrl = { baseline: 'http://localhost:8080' };

const schools = [
  { label: 'LITTLETON HIGH SCHOOL', value: 'LHS' },
  { label: 'LITTLETON MIDDLE SCHOOL', value: 'LMS' },
  { label: 'RUSSELL STREET SCHOOL', value: 'RSS' },
  { label: 'SHAKER LANE SCHOOL', value: 'SLS' },
];

const cities = [{ label: 'Littleton', value: 'Littleton' }];
const states = [{ label: 'Massachussets', value: 'MA' }];

const keys = {
  publishableKey:
    'pk_test_51I5QOxJuvhMix0vIzNnxK95fD4KadqVex6UylU7RG0jUUYQW3hpWF2rOjUonbpceQwtM7RGZ4xSrDvL5BY07a1R300DBtO4EeD',
};

const usa = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'DC', label: 'District Of Columbia' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

const schoolYear = '2021-2022';

export {
  appUrl, grades, schools, keys, usa, schoolYear, cities, states,
};