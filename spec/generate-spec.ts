import fs = require("fs");
import path = require("path");
import _flatten = require("lodash/flatten");
import * as faker from "faker";
import {getFakerKeys} from "../src/fakerEnumerator";
import { lchmod } from "fs";

const specTemplatePath = path.join(__dirname, "/openapi-spec-tpl.yaml");
const pathTemplatePath = path.join(__dirname, "/openapi-path-tpl.yaml");

const specTemplate = fs.readFileSync(specTemplatePath).toString("utf-8");
const pathTemplate = fs.readFileSync(pathTemplatePath).toString("utf-8");

function createPathSpec(pathName: string, tag: string) {
  const pathSpec = pathTemplate.replace("%%PATH_NAME%%", pathName).replace("%%TAG%%", tag);
  const padding = "  ";

  return pathSpec.split("\n").map(line => `${padding}${line}`).join("\n");
}

const paths = getFakerKeys()
  .map(key => {
    const subpaths = Object.keys(faker[key]).map(subKey => {
      const subModule = faker[key][subKey];
      if (typeof subModule === "function") {
        return createPathSpec(`/${key}/${subKey}`, key);
      }
      return null;
    }).filter(val => !!val);

    return [createPathSpec(`/${key}`, key)].concat(subpaths);
  });

const pathsString = "" +
`paths:
${_flatten(paths).join("\n")}
`;

const fileContents = specTemplate.replace("%%PATH_DATA_HERE%%", pathsString);

const outputFile = path.join(__dirname, "../src/openapi-spec.yaml");
fs.writeFileSync(outputFile, fileContents);

console.log("Done");
