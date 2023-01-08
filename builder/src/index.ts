// import { configServices } from './configs/config-services';

import { configService } from "../configs/service-config";
import { initLazyServices } from "./inits/init-services";

configService(initLazyServices)("repos").auth.register();
