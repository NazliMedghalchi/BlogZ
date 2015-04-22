/**
*		Module	 dependencies
*/
var express = require ('express')
		, stylus = require ('stylus')
		, nib = require ('nib')
var app = express()
function compile (str, path){
	return stylus (str)
			. set ('filename', path)
			. use (nib())
}
app.set('views', __dirname + '/views');
app.set('view engin', 'jade');
app.use(express.logger('dev'));
app.use(styllus.middleware(
{		src: __dirname + '/public'
	,	compile : compile
}
));

app.use(express.static(__dirnanme + '/public'))
app.get('/', function (req, res) {
	res.end ('Hi there!')
});
app.listen (3000);