# weather-app

## Running the project

### Requirements
Nodejs >= 4.4.7
npm >= 3.10.8

### Install project dependencies
```bash
$ npm install
```

### Build production version & run
```bash
$ npm run demo
```
Open http://localhost:8080

### Build dev version & start development
```bash
$ npm run start
```

###Run unit tests
```bash
$ npm run test
```
###Run unit tests in watch mode
```bash
$ npm run test:watch
```

##Description
Due to time limitations some functionality is has not been completed:
- weather data is pulled only from one provider (WORLD_WEATHER)
- missing "loading" indicator when searching for cities
- only one action creator is covered by unit tests
- the design, as also look & feel of the widget are relatively poor
