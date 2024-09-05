#  :blue_car: Rentcar

Hello guys, Presenting a MERN app with backend of NestJS and React Frontend with graphQL API. The application is a car renting service from which you can choose your favourite cars and rent them from a location near you using the map under each car which is integrated via leafletJS. 

## :ticket: Demo

A link for the demo is given below:

:link: https://car-rental-nestjs.herokuapp.com


_.env variables_

```bash
REACT_APP_APOLLO_URI=http://localhost:3000
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

4. Build 
```bash
npm run heroku-postbuild
```

4. Run the app

```bash
npm run start:dev
```

http://localhost:3000/graphql


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



