export const initAuthService =
  (repos: any) => (getService: GetServiceType<"user" | "auth">) => {
    return {
      register: () => "registered" as "registered",
      login: () => getService("user").getUser(),
    };
  };
