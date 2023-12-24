const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const port = 3000;
const staticPath =  path.join(__dirname,'../public');
const tempale_path =  path.join(__dirname,'../templates/views');
const partials_path =  path.join(__dirname,'../templates/partials');
// Handlebars template engine
app.set('view engine', 'hbs');
app.set('views', tempale_path);
hbs.registerPartials(partials_path)
    // 
// use middleware
app.use(express.static(staticPath))

app.get('/',(req,res) => {
    res.render('index')
})
app.get('/about',(req,res) => {
    res.render('about')
})
app.get('/weather',(req,res) => {
    res.render('weather')
})
app.get('*',(req,res) => {
    res.render('404')
})

app.listen(port,(req,res) => {
    console.log('server running 3000');
})