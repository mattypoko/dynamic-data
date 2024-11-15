
const express = require('express') 
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
 
app.set('view engine','handlebars')

const port = process.env.port || 3000

app.get('/about', (request, response) => { // error
    res.render('about')
})
app.get('/nightlife', (request, response) => {
    response.type('text/plain')
    response.send('Miami at Night')
})

app.use( (request,response) => {
    response.status(404)
    response.render('404')
})
app.use( (error, request, response, next) => {
    response.status(500)
    response.render('500 Server Error')
})

app.listen(port, ()=> {
    console.log('Express is running on http://localhost:${port};')
    console.log('press Ctrl-C to terminate.')
})