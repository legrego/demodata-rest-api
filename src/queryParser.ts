import {Request} from "express-serve-static-core";
import * as _ from "lodash";
import { isNumber } from "util";

export interface IFakerDataRequest {
  count: number;
}

export const parseQueryString: (req: Request) => IFakerDataRequest = (req: Request) => {
  let count = parseInt(req.query.count, 10);

  if (isNaN(count)) {
    count = 1;
  }

  count = _.clamp(count, 1, 1000);

  return {
    count
  };
};
