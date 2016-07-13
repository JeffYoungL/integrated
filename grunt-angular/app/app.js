/**
 * Created by Lyj on 2016/7/5.
 */
var http     = require('http');
var koa      = require('koa');
var logger   = require('koa-logger');
var route    = require('koa-route');
var routes   = require('./routes');
var serve    = require('koa-static');
var stylus   = require('koa-stylus');
var session = require('koa-session');

// Create koa app
var app = koa();
app.keys = ['some secret hurr'];
app.use(session(app));

// middleware
app.use(logger());
app.use(stylus('./public'));
app.use(serve('./public'));

// Route middleware
app.use(route.get('/', routes.list));
// app.use(route.get('/offline.manifest',route.offlineCache));
app.use(function* (next){
    yield next;
    if ('/favicon.ico' == this.path) return;
    var n = this.session.views || 0;
    this.session.views = ++n;
    this.session.loginid = null;
});
app.use(route.get('/todo/new', routes.add));
app.use(route.get('/todo/:id', routes.show));
app.use(route.get('/todo/delete/:id', routes.remove));
app.use(route.get('/todo/edit/:id', routes.edit));
app.use(route.get('/todo/order/:id', routes.order));
app.use(route.post('/todo/create', routes.create));
app.use(route.post('/todo/update', routes.update));
app.use(route.post('/todo/updateOrder', routes.updateOrder));
app.use(route.get('/locate', routes.locate));


// Create HTTP Server
http.createServer(app.callback()).listen(3000);
console.log('Server listening on port 3000');
