export const API_EndPoints = process.env.NEXT_PUBLIC_API_EndPoints;

const eKYC_API_URL = {
  // PartySearch: `${API_EndPoints}/master/search-party`,
  PartyDetail: `${API_EndPoints}/booking`,

  //Customer
  // createCustomer: `${API_EndPoints}/master/onboard/create-customer`,
  // updateCustomer: `${API_EndPoints}/master/onboard/update-customer`,

  // //Address
  // createAddress: `${API_EndPoints}/master/onboard/create-address`,
  // updateAddress: `${API_EndPoints}/master/onboard/update-address`,
  // //Contact
  // createContact: `${API_EndPoints}/master/onboard/create-contact`,
  // updateContact: `${API_EndPoints}/master/onboard/update-contact`,
  // // Employee
  // createEmployment: `${API_EndPoints}/master/onboard/create-employment`,
  // updateEmployement: `${API_EndPoints}/master/onboard/update-employement`,
  // SearchstakeHolder: `${API_EndPoints}/master/stakeholder`,
  // RuralLifeSearch: `${API_EndPoints}/policy-risk/rural-life-search`,
  // PartyImage: `${API_EndPoints}/master/onboard/view-file`,
};
export default eKYC_API_URL;
