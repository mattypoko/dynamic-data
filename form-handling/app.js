const express = require('express')
const expressHandlebars = require('express-handlebars') 
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const handler = require('./lib/handler')

app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')

const port = process.env.port || 3000

app.get('/',(req,res)=>{
   res.render('page',{req})
})
app.get('/mad',(req,res)=>{
    const data = require('./data/mad-data.json')
    res.render('madform',{data})
})
app.get('/newsletter-signup', handler.newsletterSignup)
app.post('/newsletter-signup/process', handler.newsletterSignupProcess)
app.get('/newsletter/list', handler.newsletterSignupList)
app.get('/newsletter/details/:email',handler.newsletterUser)
app.get('/newsletter/delete/:email',handler.newsletterUserDelete)

app.get('/newsletter/thankyou',(req,res) =>{
    res.render('thankyou')
}) 

app.use((req,res) => {
    res.status(404)
    res.render('404')
})

app.use((error,req,res,next) => {
    res.status(500)
    res.render('500') 
}) 

app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`)
    console.log('To close pres Ctrl-C')
})