var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('viewengine', 'jade');
app.use(express.favicon());
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if('development' == app.get('env')){
	app.use(express.errorHandler());
}

app.get('/flight1', routes.flight1);
app.get('/flight2', routes.flight2);