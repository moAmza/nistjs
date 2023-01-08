type AllLazyServices = ReturnType<
  typeof import("./inits/init-services").initLazyServices
>;
type GetServiceType<A extends keyof AllLazyServices> = <B extends A>(
  service: B
) => ReturnType<ReturnType<AllLazyServices[B]>>;
