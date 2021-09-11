const express= require('express')
const router= express.Router();
const blogControllers=require('../controllers/blogControllers')
router.get('/blog',blogControllers.blog_index)
router.post('/blog',blogControllers.blog_created)
 
 router.get('/blogs/create',blogControllers.blog_create)
 router.get('/blogs/:id',blogControllers.blog_details)
 router.delete('/blogs/:id',blogControllers.blog_delete)
 module.exports=router;