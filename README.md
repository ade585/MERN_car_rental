#  :blue_car: Rentcar

Hello guys, Presenting a MERN app with backend of NestJS and React Frontend with graphQL API. The application is a car renting service from which you can choose your favourite cars and rent them from a location near you using the map under each car which is integrated via leafletJS. 

## :ticket: Demo

A link for the demo is given below:

:link: https://car-rental-nestjs.herokuapp.com


_.env variables_

```bash
REACT_APP_APOLLO_URI=http://localhost:4000
```

## 🔥 Features


### :stars: API fetching
- Cars fetched via graphQL API and stored on Redux store
- Car fetching (Users can filter between their favorite cars)

### :heavy_check_mark: Responsive UI
- Eye catchy user interface
- Minimalistic UX for better application usage flow


### :earth_asia: Map integration
- Beautiful map displayed below each individual car's page
- LeafletJS used with markers to mark relevant locations

## :camera: Screenshots

### Landing page
![](https://github.com/hunter10471/MERN_car_rental/blob/master/screenshots/ss1.png)

### Home page
![](https://github.com/hunter10471/MERN_car_rental/blob/master/screenshots/ss2.png)

### Car page
![](https://github.com/hunter10471/MERN_car_rental/blob/master/screenshots/ss3.png)

### Map
![](https://github.com/hunter10471/MERN_car_rental/blob/master/screenshots/ss4.png)


## :key: Client Dependencies

```JSON
"dependencies":{
 "@apollo/client": "^3.6.9",
    "@fortawesome/fontawesome-svg-core": "^6.1.1",
    "@fortawesome/free-solid-svg-icons": "^6.1.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@reduxjs/toolkit": "^1.8.3",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.11.42",
    "@types/react": "^18.0.14",
    "@types/react-dom": "^18.0.5",
    "@types/react-redux": "^7.1.24",
    "@types/react-responsive": "^8.0.5",
    "@types/redux-logger": "^3.0.9",
    "graphql": "^16.5.0",
    "leaflet": "^1.8.0",
    "leaflet-defaulticon-compatibility": "^0.1.1",
    "react": "^18.2.0",
    "react-burger-menu": "^3.0.8",
    "react-dom": "^18.2.0",
    "react-leaflet": "^4.0.1",
    "react-loader-spinner": "^5.1.5",
    "react-modal": "^3.15.1",
    "react-multi-carousel": "^2.8.0",
    "react-redux": "^8.0.2",
    "react-responsive": "^9.0.0-beta.10",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "redux-logger": "^3.0.6",
    "styled-components": "^5.3.5",
    "twin.macro": "^2.8.2",
    "typescript": "^4.7.4",
    "web-vitals": "^2.1.4"
  },

  "devDependencies": {
    "@types/brainhubeu__react-carousel": "^2.0.5",
    "@types/react-leaflet": "^2.8.2",
    "@types/react-modal": "^3.13.1",
    "@types/styled-components": "^5.1.25",
    "@typescript-eslint/eslint-plugin": "^5.30.3",
    "@typescript-eslint/parser": "^5.30.3",
    "autoprefixer": "^10.4.7",
    "eslint": "^8.19.0",
    "eslint-plugin-react": "^7.30.1",
    "postcss": "^8.4.14",
    "tailwindcss": "^3.1.4"
  }

```

## :construction_worker: Server dependencies

```JSON

  "dependencies": {
    "@nestjs/apollo": "^10.0.16",
    "@nestjs/common": "^8.0.0",
    "@nestjs/config": "^2.1.0",
    "@nestjs/core": "^8.0.0",
    "@nestjs/graphql": "^10.0.16",
    "@nestjs/platform-express": "^8.0.0",
    "@nestjs/serve-static": "^3.0.0",
    "@nestjs/typeorm": "^8.1.4",
    "apollo-server-express": "^3.9.0",
    "class-transformer": "^0.5.1",
    "class-validator": "^0.13.2",
    "graphql": "^16.5.0",
    "mysql": "^2.18.1",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.2.0",
    "typeorm": "^0.3.7"
    }

    "devDependencies": {
    "@nestjs/cli": "^8.0.0",
    "@nestjs/schematics": "^8.0.0",
    "@nestjs/testing": "^8.0.0",
    "@types/express": "^4.17.13",
    "@types/jest": "27.5.0",
    "@types/node": "^16.0.0",
    "@types/supertest": "^2.0.11",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "eslint": "^8.0.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "jest": "28.0.3",
    "prettier": "^2.3.2",
    "source-map-support": "^0.5.20",
    "supertest": "^6.1.3",
    "ts-jest": "28.0.1",
    "ts-loader": "^9.2.3",
    "ts-node": "^10.0.0",
    "tsconfig-paths": "4.0.0",
    "typescript": "^4.3.5"
  },
  ```



## 🏗️ How to Set up `rentcar` for Development

1. Clone the repository

```bash
git clone https://github.com/hunter10471/MERN_car_rental.git
```

2. Change the working directory

```bash
cd MERN_car_rental
```

3. Install dependencies

```bash
npm install # or, yarn install
```

4. Run the app

```bash
npm run dev # or, yarn dev
```

That's All!!! Now open [localhost:4000](http://localhost:4000/) to see the app.


## 🍔 Built With
_These are just some major resources used in the project, there are others too that can be found in the dependencies section_
- [React JS](https://nextjs.org/): The most popular framework around
- [TailwindCss](https://tailwindcss.com/) A utility-first CSS framework packed with classes
- [Heroku](http://heroku.com/): Easiest hosting for a MERN app
- [Redux/@reduxjs/toolkit](https://redux-toolkit.js.org/) For persisting data and easy access to store
- [Material-UI](https://mui.com/) All the icons were taken from this amazing library
- [Eslint](https://eslint.org/) All the front end and backend code is linted using ESlint to prevent any errors and follow a singular code pattern
- [React-router](https://reactrouter.com/) Page transitions and redirections done right



## 🛡️ License
This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.



