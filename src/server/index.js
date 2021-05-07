// API Env.

const dotenv = require('dotenv');
dotenv.config();
const PORT = 8081

// Environment Variables

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');

// Starting Up Server Instance

const app = express()

// Cors Installation
/* Reference : [ https://classroom.udacity.com/ ]
                Front End Web Development Advanced Nanodegree Program
                2. Build Tools & Single Page Web Apps
                Lesson 4 : Final Touches
                Exercise: API Call Challenge platform*/

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

// API Defination

const MeaningCloudAPILink = 'https://api.meaningcloud.com/sentiment-2.1?'
const MeaningCloudAPIKey = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Request Method
app.post('/api', async (req, res) => {
    userInput = req.body.url;
    const apiLink = `${MeaningCloudAPILink}key=${MeaningCloudAPIKey}&url=${userInput}&lang=en`

    const response = await fetch(apiLink)
    const apiData = await response.json()
    console.log(apiData)
    res.send(apiData)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})