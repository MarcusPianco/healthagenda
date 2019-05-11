This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Run

Clone this repository  in your local or virtual machine and run the script bellow

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Or using Docker 

### In the Terminal 
### docker build -t h/agenda . && docker run --rm -d -p 3000:3000/tcp h/agenda:latest

### or JUST:
### run: docker-compose up -d


## Some Dependencies used:

        "babel-jest": "24.7.1",
        "bcryptjs": "^2.4.3",
        "bootstrap": "^4.3.1",
        "prop-types": "^15.7.2",
        "react": "^16.8.6",
        "react-dom": "^16.8.6",
        "react-redux": "^7.0.3",
        "react-router-dom": "^5.0.0",
        "react-scripts": "3.0.0",
        "reactstrap": "^8.0.0",
        "redux": "^4.0.1",
        "redux-persist": "^5.10.0"
        
## Dev dependencies used during the production
        "eslint": "^5.16.0",
        "eslint-config-airbnb": "^17.1.0",
        "eslint-plugin-import": "^2.17.2",
        "eslint-plugin-jsx-a11y": "^6.2.1",
        "eslint-plugin-react": "^7.13.0"
        
        
## Problems and bugs

The software still in development, some bugs or others problems could be reported via issues

## Tests
The process of integration test not exist yeat.




## Things to do

### Put persistence data in the project
### Fix bugs related with redux
### Put some strategy to coverage side-efects
### Refactoring structure to duck patter in redux folders organization
## Conect the application with some api or service
