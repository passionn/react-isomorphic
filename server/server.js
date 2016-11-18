
var koa=require('koa');
var app=new koa();
var views=require('koa-views');
var server=require('koa-static');
var logger=require('koa-logger');
//var router=require('./routes/router');
var bodyparse=require('koa-bodyparser');
var path=require('path');

import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext, RoutingContext } from 'react-router'
import routes from '../app/router'

app.use(logger());
app.use(bodyparse());

console.log('path:----',path.resolve( __dirname,'../'));
console.log(path.resolve(__dirname,'../app'));

app.use(server(path.resolve(__dirname,'../')));

/*app.use(views(__dirname + '/views', {
  map: {
    html: 'ejs'
  }
}));

app.use(router.routes())
	.use(router.allowedMethods());*/


app.use(async (ctx,next)=>{
	match({ routes:routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
	    if (error) {
	      ctx.status=500;
	    } else if (redirectLocation) {

	      	ctx.redirect(302, redirectLocation.pathname + redirectLocation.search)

	    } else if (renderProps) {
	    	ctx.status=200;
	    	const appHtml = renderToString(<RouterContext {...renderProps}/>)

	      	ctx.body=renderPage(appHtml);
	    } else {
	    	ctx.status=404;
	    }


	});

	await next();
});

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <div id=root>${appHtml}</div>
    <script src="/js/bundle.js"></script>
   `
}



/*app.use(async (ctx,next)=>{
	ctx.body = 'Hello World';
});*/

app.listen(3000,()=>{console.log('server start 3000');});



