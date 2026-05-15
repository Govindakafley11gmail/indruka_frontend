
export const API_EndPoints = process.env.NEXT_PUBLIC_API_EndPoints;

const POLICY_API_URL = {
  create_policy: `${API_EndPoints}/policy`,
  list_policy: `${API_EndPoints}/policy_under_party`,
  policy_details: `${API_EndPoints}/policy_details`,
  policy_risk: `${API_EndPoints}/policy-risk`,
  nominee:  `${API_EndPoints}/nominee`,
  stakeholder: `${API_EndPoints}/stakeholder`,
  calculate_premium: `${API_EndPoints}/policy-premium-cover/calculate`,
  approve_quotation: `${API_EndPoints}/premium-schedules/generate`,
  premium_schedules: `${API_EndPoints}/premium-schedules`,

  premium_collection: `${API_EndPoints}/payments`,
  issue_policy: `${API_EndPoints}/issue-policy`,
  terminate_policy: `${API_EndPoints}/terminate_policy`,

  bonus_accruals : `${API_EndPoints}/bonus_accruals`,
};

export default POLICY_API_URL;