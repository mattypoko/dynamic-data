let eList = require('../data/emails.json')
const fs = require("fs")

exports.newsletterSignup = (req,res) => {
    res.render('newsletter-signup', { csrf: 'supersecret'})
}

exports.newsletterSignupProcess = (req,res) => {
    eList.users.push(newUser)
    var json = JSON.stringify(eList)
    fs.writeFileSync('./data/emails.json',json,'utf8',()=>{})
    res.redirect(303,'/newsletter/thankyou')
}

exports.newsletterSignupList = (req,res)=>{
    res.render('userspage',{"users":eList.users})
}

exports.newsletterUser = (req,res) =>{
    var userDetails = eList.users.filter((user)=>{
        return user.email == req.params.email
    })
    res.render('userdetails',{"users": userDetails})
}

exports.newsletterUserDelete = (req,res) => {
    newList.users = eList.users.filter((user)=>{
        return user.email != req.params.email
    })

    var json = JSON.stringify(newList)

    fs.writeFile('./data/emails.json',json,'utl8',()=>{})

    res.send('<a href="/newsletter/list">Go Back</a>')
    
}