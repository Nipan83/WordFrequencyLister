# wordFrequencyLister
Its an application that accepts a number input N with a Submit button and on entering a value and pressing submit, a request sent to the backend that returns top N most frequently occurring words in the file  http://terriblytinytales.com/test.txt.


[![Build Status](https://travis-ci.org/Nipan83/wordfrequencylister.svg?branch=master)](https://travis-ci.org/Nipan83/wordfrequencylister.svg?branch=master)

## OVERVIEW
### endpoints

#### /
> Displays the home page that accepts a number input N with a Submit button.
> 

#### /send
> This endpoint is responsible for the result page that shows the top N most frequently occurring words in the file  http://terriblytinytales.com/test.txt.
> algo.js is responsible for fetching the data from the http://terriblytinytales.com/test.txt page and creating the object with top N key value pair that is returned and rendered to result.ejs page.




## INSTALLATION 

- Clone the repository `git clone https://github.com/darpanjbora/node-auth-api.git`
- Install all dependecies `npm install`
- Start the server `npm start`



### Routes 

##### /

 `http://localhost:3005/ 
 
 This routes sisplays the home page that accepts a number input N with a Submit button.
 
 
 ##### POST JSON patch
 
 `http://localhost:3005/send
 
  This routes displays the top N words and their frequency of occurrence in the frontend, in a tabular format
 
 

## TEST

```sh
# To run the mocha test
npm test

## AUTHOR 

[@Nipan83](https://github.com/Nipan83) - nipandas83@gmail.com
