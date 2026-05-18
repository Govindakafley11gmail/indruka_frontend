
const ACL_API_URL = {
  Login: `/users/login`,
  LogOut: `/users/logout`,

  //USER MANAGEMENT
  //1. Users
  User: `/users`,

  //2. Roles
  Role: `/roles`,
  //3. Permissions
  Permission: `/permissions`,

  //branches
  Branches: `/master/branches`,
  //department
  Department: `/master/departments`,
  Salutation: `/master/salutation`,

  //Nationality
  Nationality: `/master/nationality`,
  //Gender
  Gender: `/master/gender`,
  //Maritial-status
  maritialStatus: `/master/marital-status`,
  //Bank
  bank: `/master/banks`,
  //indentification number
  indentificationType: `/master/identification-type`,
  businessType: `/master/business-type`,
  //Country
  country: `/master/country`,
  //Dzongkhag
  dzongkhag: `/master/dzongkhag`,
  //gewog
  gewog: `/master/gewogs/by/dzongkhag`,
  //Occupations
  occupations: `/master/occupations`,
  //Employer Type
  legalConstitution: `/master/legal-constitution`,

  accountGroup: `/account-group`,
  accountType: `/account-type`,
  
  policyLob: `/lobs`,
  policyProducts: `/products`,
  policyProductsByLob: `/products/productByLob`,

  branches: `/master/branches`,

  //reports
  reports: `/reports`,

  bookings:  `/bookings`,

  documents: `/documents`

};

export default ACL_API_URL;
