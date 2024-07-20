//authenticated route;
const LOGIN_URL: string = "/auth/login";
const REGISTER_URL: string = "/auth/register";
const RESET_PASSWORD_URL: string = "/auth/rest_password";
const FORGET_PASSWORD_URL: string = "/auth/forget_password";
const VERIFICATION_URL: string = "/auth/verification";
const VERIFIED_URL: string = "/auth/verified";

//HOMEPAGE CONSTANTS
const HOME_URL: string = "/";
const ABOUT_URL: string = "/about";
const CONTACT_URL: string = "/contact";
const PRIVACY_POLICY_URL: string = "/privacy_policy";
const TERMS_OF_SERVICE_URL: string = "/terms_of_service";
const FAQ_URL: string = "/faq";

// DASHBOARD_URL constants
const DASHBOARD_URL: string = "/dashboard";
const COURSES_URL: string = "/dashboard/courses";
const LEADERSHIP_URL: string = "/dashboard/leadership";
const LOGBOOK_URL: string = "/dashboard/logbook";
const PROFILE_URL: string = "/dashboard/profile";
const QUALIFICATION_URL: string = "/dashboard/qualifications";
const RESEARCH_URL: string = "/dashboard/research";
const SETTINGS_URL: string = "/dashboard/settings";
const TEACHING_URL: string = "/dashboard/teaching";
const QUALITY_IMPROVEMENTS_URL: string = "/dashboard/quality_improvement";
const MEDICAL_LOGBOOK_URL: string = "/dashboard/logbook/medical_logbook";
const SURGICAL_LOGBOOK_URL: string = "/dashboard/logbook/surgical_logbook";
const COURSES_ADD_FEEDBACK_URL: string = "/dashboard/courses/add_feedback";
const LOGBOOK_ACQUIRED_URL: string = "/dashboard/logbook/logbook_aquired";
const TEACHING_REQUIRED_URL: string = "/dashboard/teaching/teaching_aquired";
const QUALITY_IMPROVEMENT_CLINICAL_AUDIT_URL: string =
  "/dashboard/quality_improvement/clinical_audit";
const QUALITY_IMPROVEMENT_CASE_REVIEW_URL: string =
  "/dashboard/quality_improvement/case_review";
const RESEARCH_REQUIRED_URL: string = "/dashboard/research/research_aquired";

//SUPERVISOR CONSTANTS
const SUPERVISOR_DASHBOARD_URL: string = "/supervisor";
const SUPERVISOR_USER_URL: string = "/supervisor/users";

export const protectedRoutes = [
  DASHBOARD_URL,
  COURSES_URL,
  LEADERSHIP_URL,
  LOGBOOK_URL,
  PROFILE_URL,
  QUALIFICATION_URL,
  RESEARCH_URL,
  SETTINGS_URL,
  TEACHING_URL,
  QUALITY_IMPROVEMENTS_URL,
  MEDICAL_LOGBOOK_URL,
  SURGICAL_LOGBOOK_URL,
  COURSES_ADD_FEEDBACK_URL,
  LOGBOOK_ACQUIRED_URL,
  TEACHING_REQUIRED_URL,
  QUALITY_IMPROVEMENT_CLINICAL_AUDIT_URL,
  QUALITY_IMPROVEMENT_CASE_REVIEW_URL,
  RESEARCH_REQUIRED_URL,
  SUPERVISOR_DASHBOARD_URL,
  SUPERVISOR_USER_URL,
  PROFILE_URL,
];

export const trialRoutes = [
  DASHBOARD_URL,
  QUALIFICATION_URL,
  MEDICAL_LOGBOOK_URL,
  SURGICAL_LOGBOOK_URL,
  LOGBOOK_ACQUIRED_URL,
  PROFILE_URL,
];
export const basicRoutes = [
  ...trialRoutes, // Include trial routes
];

export const premiumRoutes = [
  ...basicRoutes, // Include basic routes
  COURSES_URL,
  COURSES_ADD_FEEDBACK_URL,
  RESEARCH_URL,
  TEACHING_URL,
  TEACHING_REQUIRED_URL,
];

export const infiniteRoutes = [
  ...premiumRoutes, // Include premium routes
  LEADERSHIP_URL,
  RESEARCH_REQUIRED_URL,
];

export const authRoutes = [
  LOGIN_URL,
  REGISTER_URL,
  FORGET_PASSWORD_URL,
  RESET_PASSWORD_URL,
  VERIFICATION_URL,
  VERIFIED_URL,
];
export const publicRoutes = [
  HOME_URL,
  ABOUT_URL,
  CONTACT_URL,
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
  FAQ_URL,
];

export {
  LOGIN_URL,
  REGISTER_URL,
  RESET_PASSWORD_URL,
  FORGET_PASSWORD_URL,
  VERIFICATION_URL,
  VERIFIED_URL,
  DASHBOARD_URL,
  COURSES_URL,
  LEADERSHIP_URL,
  LOGBOOK_URL,
  PROFILE_URL,
  QUALIFICATION_URL,
  RESEARCH_URL,
  SETTINGS_URL,
  TEACHING_URL,
  QUALITY_IMPROVEMENTS_URL,
  MEDICAL_LOGBOOK_URL,
  SURGICAL_LOGBOOK_URL,
  COURSES_ADD_FEEDBACK_URL,
  LOGBOOK_ACQUIRED_URL,
  TEACHING_REQUIRED_URL,
  QUALITY_IMPROVEMENT_CLINICAL_AUDIT_URL,
  QUALITY_IMPROVEMENT_CASE_REVIEW_URL,
  RESEARCH_REQUIRED_URL,
  SUPERVISOR_DASHBOARD_URL,
  SUPERVISOR_USER_URL,
  HOME_URL,
  ABOUT_URL,
  CONTACT_URL,
  PRIVACY_POLICY_URL,
  TERMS_OF_SERVICE_URL,
  FAQ_URL,
};
