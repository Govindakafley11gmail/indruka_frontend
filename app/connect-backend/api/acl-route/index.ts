export const API_EndPoints = process.env.NEXT_PUBLIC_API_EndPoints;

const ACL_API_URL = {
  Login: `${API_EndPoints}/users/login`,
  LogOut: `${API_EndPoints}/users/logout`,

  //USER MANAGEMENT
  //1. Users
  User: `${API_EndPoints}/users`,

  //2. Roles
  Role: `${API_EndPoints}/roles`,
  //3. Permissions
  Permission: `${API_EndPoints}/permissions`,

  //branches
  Branches: `${API_EndPoints}/master/branches`,
  //department
  Department: `${API_EndPoints}/master/departments`,
  Salutation: `${API_EndPoints}/master/salutation`,

  //Nationality
  Nationality: `${API_EndPoints}/master/nationality`,
  //Gender
  Gender: `${API_EndPoints}/master/gender`,
  //Maritial-status
  maritialStatus: `${API_EndPoints}/master/marital-status`,
  //Bank
  bank: `${API_EndPoints}/master/banks`,
  //indentification number
  indentificationType: `${API_EndPoints}/master/identification-type`,
  businessType: `${API_EndPoints}/master/business-type`,
  //Country
  country: `${API_EndPoints}/master/country`,
  //Dzongkhag
  dzongkhag: `${API_EndPoints}/master/dzongkhag`,
  //gewog
  gewog: `${API_EndPoints}/master/gewogs/by/dzongkhag`,
  //Occupations
  occupations: `${API_EndPoints}/master/occupations`,
  //Employer Type
  legalConstitution: `${API_EndPoints}/master/legal-constitution`,

  accountGroup: `${API_EndPoints}/account-group`,
  accountType: `${API_EndPoints}/account-type`,
  
  policyLob: `${API_EndPoints}/lobs`,
  policyProducts: `${API_EndPoints}/products`,
  policyProductsByLob: `${API_EndPoints}/products/productByLob`,

  branches: `${API_EndPoints}/master/branches`,

  //reports
  reports: `${API_EndPoints}/reports`,

  bookings:  `${API_EndPoints}/bookings`,

  documents: `${API_EndPoints}/documents`

};

export default ACL_API_URL;
