const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Fitness config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Fitness',
        name: 'Ashish'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Us',
        name: 'Ashish'
    })
})

app.get('/workout', (req, res) => {
    res.render('workout', {
        title: 'Workout',
        name: 'Ashish'
    })
})

app.get('/nutrition', (req, res) => {
    res.render('nutrition', {
        title: 'Nutrition',
        name: 'Ashish'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        
        errorMessage: 'Page not found.'
    })
})

app.get('/about', (req, res) => {
    res.render('401', {
        
        errorMessage: 'Check Network connection.'
    })
})

app.get('/nutrition', (req, res) => {
    res.render('401', {
        
        errorMessage: 'Server not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})