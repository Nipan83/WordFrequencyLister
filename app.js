var express = require('express')
var path = require('path')
var request = require('request')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var algo = require('./algo')
var app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
const port = process.env.PORT || 3000

app.post('/send', function (req, res) {
  var response = res
  var items
  var url = 'http://terriblytinytales.com/test.txt'

  request.get(url, function (err, res, body) {
	 items = algo.wordCount(body)
	 console.log(items[0][0])
	 response.render('result', {items: items, count: req.body.count})
  })
})

app.get('/', function (req, res) {
  res.render('index')
})
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})
app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})
app.listen(port, function () {
  console.log('server is running')
})

module.exports = app
