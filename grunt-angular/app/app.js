/**
 * Created by Lyj on 2016/7/5.
 */
// var http     = require('http');
var koa      = require('koa');
var logger   = require('koa-logger');
var router   = require('koa-route');
var render   = require('./components/render');
var serve    = require('koa-static');

// Create koa app
var app = koa();

console.log(process.env.NODE_ENV);

// middleware
app.use(logger());

// Route middleware
//app.use(router.get('/', list));
app.use(router.get('/', function *() {
	//this.body = "Hello world!";
	this.body = yield render('../index', {contextPath: ""});
}));

app.use(serve(__dirname + '/www'));

// Create HTTP Server
// http.createServer(app.callback()).listen(3000);
app.listen(3000);
console.log('Server listening on port 3000');
