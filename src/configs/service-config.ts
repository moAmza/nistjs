type AllServiceNames = keyof AllLazyServices;
type AllServices = {
  [field in AllServiceNames]: ReturnType<GetServiceType<field>>;
};

export const configService =
  (initLazyServices: (repos: "repos") => AllLazyServices) =>
  (repos: "repos") => {
    const lazyServices = initLazyServices(repos);

    // @ts-ignore
    const getService = <A extends AllServiceNames>(service: A) =>
      lazyServices[service]()(getService);

    const services = (
      Object.keys(lazyServices) as (keyof typeof lazyServices)[]
    ).reduce((prev, curr) => {
      prev[curr] = getService(curr);
      return prev;
    }, {} as AllServices);

    return services;
  };
