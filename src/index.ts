// import { configServices } from './configs/config-services';

import { initLazyServices } from "../builder/src/inits/init-services";
import { configService } from "./configs/service-config";

configService(initLazyServices)("repos").auth.register();
