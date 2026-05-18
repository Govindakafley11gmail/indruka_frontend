

const POLICY_API_URL = {
  create_policy: `/policy`,
  list_policy: `/policy_under_party`,
  policy_details: `/policy_details`,
  policy_risk: `/policy-risk`,
  nominee:  `/nominee`,
  stakeholder: `/stakeholder`,
  calculate_premium: `/policy-premium-cover/calculate`,
  approve_quotation: `/premium-schedules/generate`,
  premium_schedules: `/premium-schedules`,

  premium_collection: `/payments`,
  issue_policy: `/issue-policy`,
  terminate_policy: `/terminate_policy`,

  bonus_accruals : `/bonus_accruals`,
};

export default POLICY_API_URL;