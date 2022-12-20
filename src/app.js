const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', { title: 'Weather App', name: 'Andrew Mead' })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me', name: 'Andrew Mead'})
})

app.get('/help', (req, res) => {
    res.render('help', { message: 'Need help? Too bad.', title: 'Help', name: 'Andrew Mead' })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: '24 degrees',
        location: 'Singapore'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', { title: 'Error', errorMessage: 'Help page not found', name: 'Andrew Mead' })
})

app.get('*', (req, res) => {
    res.render('404', { title: 'Error', errorMessage: 'Page not found', name: 'Andrew Mead' })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})