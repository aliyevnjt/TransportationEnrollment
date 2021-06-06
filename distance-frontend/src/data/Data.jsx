// FIXME get it from DB
const grades = [
  { label: 'K', value: 'K', level: 'SLS' },
  { label: 'T', value: 'T', level: 'SLS' },
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

// FIXME get it from DB
const headers = [
  { label: 'Admin Year', key: 'adminYear' },
  { label: 'First Name', key: 'fname' },
  { label: 'Middle Name', key: 'mName' },
  { label: 'Last Name', key: 'lname' },
  { label: 'Birth Date', key: 'birthDate' },
  { label: 'Grade', key: 'grade' },
  { label: 'School', key: 'school' },
  { label: 'Distance From School', key: 'distanceFromSchool' },
  { label: 'Enrollment Status', key: 'enrollmentStatus' },
  { label: 'Address', key: 'address' },
  { label: 'City', key: 'city' },
  { label: 'State', key: 'state' },
  { label: 'Zip Code', key: 'zip' },
  { label: 'Parent Name', key: 'parentName' },
  { label: 'Parent Email Address', key: 'parentEmailAddress' },
  { label: 'Parent Phone Number', key: 'parentPhoneNumber' },
  { label: 'Created Date', key: 'createDate' },
  { label: 'Unique ID', key: 'uniqueID' },
  { label: 'Registration Status', key: 'registrationStatus' },
  // { label: 'Homeless', key: 'homeless' },
  // { label: 'Id', key: 'id' },
  // { label: 'Unit', key: 'unit' },
];
// FIXME get it from DB
const schools = [
  { label: 'LITTLETON HIGH SCHOOL', value: 'LHS' },
  { label: 'LITTLETON MIDDLE SCHOOL', value: 'LMS' },
  { label: 'RUSSELL STREET SCHOOL', value: 'RSS' },
  { label: 'SHAKER LANE SCHOOL', value: 'SLS' },
];

const paymentType = [
  { label: 'Cash', value: 'CASH' },
  { label: 'Check', value: 'CHECK' },
  { label: 'Money Order', value: 'MONEY_ORDER' },
  { label: 'Unibank', value: 'UNIBANK' },
];

const cities = [{ label: 'Littleton', value: 'Littleton' }];
const states = [{ label: 'Massachussets', value: 'MA' }];

const locality = {
  city: 'Littleton',
  state: 'Massachussets',
  zipCode: '01460',
};

// FIXME too many conversions. this info must be in the schoolYear table
// we'll enable other years later. super admin can create a new year with add button
const schoolYears = [
  { label: 'School Year 2021-2022', value: 'FY22', adminYear: '2021' },
  // { label: 'School Year 2022-2023', value: 'FY23', adminYear: '2022' },
  // { label: 'School Year 2023-2024', value: 'FY24', adminYear: '2023' },
  // { label: 'School Year 2024-2025', value: 'FY25', adminYear: '2024' }
];
// FIXME get it from DB
const registration = [
  { label: 'Open', value: 'Open' },
  { label: 'Closed', value: 'Closed' },
];
// FIXME get it from DB
const enrollmentStatus = [
  { label: 'Free', value: 'free' },
  { label: 'Paid', value: 'paid' },
];

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

// TODO not needed. Should be populated from default admin settings value
const schoolYear = '2021-2022';
const adminYear = '2021';

export {
  adminYear,
  grades,
  schools,
  usa,
  schoolYear,
  cities,
  states,
  schoolYears,
  headers,
  registration,
  locality,
  enrollmentStatus,
  paymentType
};
