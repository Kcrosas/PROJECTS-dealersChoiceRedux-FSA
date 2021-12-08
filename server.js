const { models: { Rider, Motorcycles}, seed} = require ('./db')
const express = require('express')
const app = express(); 
const path = require('path')

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname,'index.html')))

app.get('/riders', async(req,res,next) => {
    try { res.send(await Rider.findAll())}
    catch (error) { next (error)
    }})
app.get('/riders/:id', async(req,res,next) => {
    try { res.send(await Rider.findByPk(req.params.id))}
    catch (error) { next (error)
    }})

app.get('/motorcycles', async(req,res,next) => {
    try { res.send(await Motorcycles.findAll())}
    catch (error) { next (error)
    }})

app.get('/motorcycles/:id', async(req,res,next) => {
    try { res.send(await Motorcycles.findByPk(req.params.id))}
    catch (error) { next (error)
    }})

const bootup = async() => {
    try {
        await seed(); 
        const port = process.env.PORT || 8000 
        app.listen(port, ()=>console.log(`Local port is ${port}`))
    }
    catch (error) {
        console.log(error)
    }
}

bootup()

