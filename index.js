const express = require("express")
const fs = require("fs")
const app = express()
const path = require('path')
app.set( 'view engine','ejs')
app.use(express.static(path.join(__dirname,"public"))) 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req , res)=>{
    fs.readdir('./content',(err , files)=>{
        res.render('index' , {files:files})
    })
})

app.post("/create",(req , res ,next)=>{
    const title = req.body.title3;
    const content = req.body.content3;
    fs.writeFile(`./content/${title.split(' ').join('')}.txt`,content,(err)=>{
        res.redirect('/')
    })
    
})
app.listen(3000)