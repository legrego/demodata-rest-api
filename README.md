# Holiday REST API
A simple REST API for working with national holidays.
Part of the [DevAPIs.io](https://devapis.io) suite of free development APIs

[![Build Status](https://travis-ci.org/legrego/holiday-rest-api.svg?branch=master)](https://travis-ci.org/legrego/holiday-rest-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/8375d339aa18e29a71a4/maintainability)](https://codeclimate.com/github/legrego/holiday-rest-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8375d339aa18e29a71a4/test_coverage)](https://codeclimate.com/github/legrego/holiday-rest-api/test_coverage)

## Details
This is a REST wrapper around the excellent [`date-holidays`](https://github.com/commenthol/date-holidays) package by [commenthol](https://github.com/commenthol)

## Building
Download this repository, and run the following commands:
* `npm install`
* `npm run build`

This will build the service in the `dist` folder, which can then be run:
`node dist/index.js`

Alternatively, you can run this via the ts-node runner for rapid development: `npm run start`
