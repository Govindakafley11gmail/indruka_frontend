export const API_EndPoints = process.env.NEXT_PUBLIC_API_EndPoints;

const TRAVELAGENTSAPI = {
  bookingUser: `${API_EndPoints}/bookings`,
  callBack: `${API_EndPoints}/call-back`,
  contact: `${API_EndPoints}/contact`,
//   policy_risk: `${API_EndPoints}/policy-risk`,
  
};

export default TRAVELAGENTSAPI;