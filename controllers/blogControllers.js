const Blog= require('../models/blog')
const blog_index = (req,res) => {
    Blog.find().sort("asc").then((result)=>{
        res.render('index',{title: 'Home',blogs:result});
    }).catch((error)=>console.log(error))
}
const blog_details = (req,res) => {
    const id= req.params.id
     Blog.findById(id).then((result)=>{
         res.render('detail',{title:'Blog Details',blog:result})
     }).catch((error)=>{
         
     })
}
const blog_delete = (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result =>{
        res.json({redirect:'/blog'})
    })
    .catch(err=>{
        console.log(err)
    })
}
const blog_created = (req,res) => {
    const blog=new Blog(req.body)
    blog.save().then((result)=>{
         res.redirect('/blog')
    }).catch((error)=>{
        res.status(404).render('404',{title: '404'})
    })
}
const blog_create = (req,res) => {
    res.render('create',{title: 'Create Blog'});
}
module.exports={blog_index,blog_details,blog_delete,blog_created,blog_create}
