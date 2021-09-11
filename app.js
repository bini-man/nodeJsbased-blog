const express=require('express')
const { stubTrue } = require('lodash')
const mongoose=require('mongoose')
const app=express()
const blogRoutes= require('./router/Blogroutes')
const morgan= require('morgan')
const { urlencoded } = require('express')
app.set('view engine','ejs')
app.listen(3000)
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
const dburl='mongodb+srv://bini-man:biniMAN@cluster0.jux0f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology:true}).then((result)=>console.log("db connected")).catch((err)=>console.log(err))
app.use(morgan('tiny'))
app.use(blogRoutes)
app.get('/about',(req,res)=>{
    res.render('about',{title: 'about'});
})
app.use((req,res)=>{
    res.render('404',{title: '404'})
})