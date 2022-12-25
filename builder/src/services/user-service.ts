export const initUserService =
  (repos: any) => (getService: GetServiceType<"auth">) => {
    return {
      getUser: () => "user",
    };
  };
