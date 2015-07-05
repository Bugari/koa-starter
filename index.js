const koa = require('koa'),
    path = require('path'),
    views = require('koa-views'),
    config = require('config'),
    serve = require('koa-static');

const app = module.exports = koa();

// initialize render helper
app.use(views(config.template.path, config.template.options));

// x-response-time

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

require('./app/routes')(app);

if (!module.parent) app.listen(3000, function(){console.log('Koa server started')});
