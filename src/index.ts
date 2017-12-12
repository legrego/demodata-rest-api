import * as express from "express";
import * as faker from "faker";
import * as _ from "lodash";
import { fakerWhitelist } from "./fakerWhitelist";
import { parseQueryString, IFakerDataRequest } from "./queryParser";
import { createFakerRoutes } from "./v1/fakerRoutes";

let port: number;

const envPort = parseInt(process.env.PORT, 10);

if (isNaN(envPort)) {
    port = 8020;
} else {
    port = envPort;
}

const app: express.Express = express();

app.use("/v1", createFakerRoutes());

app.listen(port, () => {
    console.log("demodata-api running on port " + port);
});
