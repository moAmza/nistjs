import { initAuthService } from "../services/auth-service";
import { initUserService } from "../services/user-service";

export const initLazyServices = (repos: "repos") => ({
  auth: () => initAuthService("sad"),
  user: () => initUserService("sad"),
});
