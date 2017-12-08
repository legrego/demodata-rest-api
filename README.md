# DemoData REST API
A simple REST API for working with Demo Data.
Part of the [DevAPIs.io](https://devapis.io) suite of free development APIs

[![Build Status](https://travis-ci.org/legrego/demodata-rest-api.svg?branch=master)](https://travis-ci.org/legrego/demodata-rest-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/4d3b31800fcd3bcfcb7f/maintainability)](https://codeclimate.com/github/legrego/demodata-rest-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4d3b31800fcd3bcfcb7f/test_coverage)](https://codeclimate.com/github/legrego/demodata-rest-api/test_coverage)

## Details
This is a REST wrapper around the excellent [`faker`](https://github.com/Marak/Faker.js) package by [Marak](https://github.com/Marak)

## Building
Download this repository, and run the following commands:
* `npm install`
* `npm run build`

This will build the service in the `dist` folder, which can then be run:
`node dist/index.js`

Alternatively, you can run this via the ts-node runner for rapid development: `npm run start`
