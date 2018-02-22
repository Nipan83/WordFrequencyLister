# wordFrequencyLister
It is an application that accepts a number input N with a Submit button and on entering a value and pressing submit, a request sent to the backend that returns top N most frequently occurring words in the file  http://terriblytinytales.com/test.txt.


[![Build Status](https://travis-ci.org/Nipan83/wordfrequencylister.svg?branch=master)](https://travis-ci.org/Nipan83/wordfrequencylister.svg?branch=master)

## OVERVIEW
### endpoints

#### GET
#### /
> Displays the home page that accepts a number input N with a Submit button.

#### POST
#### /send
> This endpoint is responsible for the result page that shows the top N most frequently occurring words in the file  http://terriblytinytales.com/test.txt.
> algo.js is responsible for fetching the data from the http://terriblytinytales.com/test.txt page and creating the object with top N key value pair that is returned and rendered to result.ejs page.

### Libraries and plugins used

    #### "babel-core": "^6.26.0",
    #### "babel-istanbul": "^0.12.2",
    #### "body-parser": "~1.18.2",
    #### "cookie-parser": "~1.4.3",
    #### "debug": "~2.6.9",
    #### "ejs": "~2.5.7",
    #### "express": "~4.15.5",
    #### "morgan": "~1.9.0",
    #### "path": "^0.12.7",
    #### "request": "^2.83.0",
    #### "serve-favicon": "~2.4.5"
    #### "chai": "^4.1.2",
    #### "mocha": "^5.0.1",
    #### "standard": "^11.0.0",
    #### "supertest": "^3.0.0"
   



## INSTALLATION 

- Clone the repository `git clone https://github.com/Nipan83/wordFrequencyLister.git
- Install all dependecies `npm install`
- Start the server `npm start`



### Routes 

##### /

 `http://localhost:3000/ 
 
 This route displays the home page that accepts a number input N with a Submit button.
 
 
 ##### /send
 
 `http://localhost:3000/send
 
  This route displays the top N words and their frequency of occurrence in the frontend, in a tabular format
 
 

## TEST

```sh
# To run the mocha test
npm test
```

## AUTHOR 

[@Nipan83](https://github.com/Nipan83) - nipandas83@gmail.com
