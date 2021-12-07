const expres = require('express');
const app = express();

// socket.io uses http server
const server = require('http').Server(app);

// handlebars setup
const exphbs = require('express-handlebars');
var hbs = exphbs.create({
    defaultLayout: 'main',
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// routes
app.get('/', (req, res) => {
    res.render('index.handlebars');
})

server.listen(3000, () => {
    console.log('Server listening on Port 3000');
})