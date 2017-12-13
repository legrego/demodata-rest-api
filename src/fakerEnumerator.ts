import * as faker from "faker";
import { fakerWhitelist } from "./fakerWhitelist";

export const getFakerKeys = () => {
  return Object
    .keys(faker)
    .filter(key => fakerWhitelist.find(entry => entry === key));
};
