import * as express from "express";
import * as faker from "faker";
import * as _ from "lodash";
import { fakerWhitelist } from "../fakerWhitelist";
import { IFakerDataRequest, parseQueryString } from "../queryParser";

export const createFakerRoutes = () => {
  const router = express.Router();

  Object.keys(faker)
  .filter(key => fakerWhitelist.find(entry => entry === key))
  .forEach(key => {

      const generationFunctions = Object.keys(faker[key]).map((subKey)  => {
          return {
              [subKey]: faker[key][subKey]
          };
      })
      .reduce((result, current) => {
          return Object.assign(result, current);
      }, {});

      const elementFaker = (subKey) => generationFunctions[subKey]();

      router.get(`/${key}`, (req, res, next) => {
          const query: IFakerDataRequest = parseQueryString(req);

          const payload = [];

          _.times(query.count, () => {
              const payloadItem = Object.keys(generationFunctions)
                  .map(element => {
                      return {
                          [element]: elementFaker(element)
                      };
                  })
                  .reduce((result, current) => {
                      return Object.assign(result, current);
                  }, {});

              payload.push(payloadItem);
          });

          res.status(200).send(payload);
      });

      router.get(`/${key}/:subKey`, (req, res, next) => {
          const query: IFakerDataRequest = parseQueryString(req);

          const subkey = req.params.subKey;
          const fn = faker[key][subkey];

          if (typeof fn === "function") {
              const payload = [];

              _.times(query.count, () => {
                  payload.push(fn());
              });

              res.status(200).send(payload);
          } else {
              res.status(400).send({error: `Invalid element specified: ${subkey}`});
          }
      });
  });

  return router;
};
