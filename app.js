const express = require('express')
const cors = require('cors')
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');

const router = require('./src/routes')
const path = require('path');

const { json, urlencoded } = express
const app = express()

const host = process.env.IP  || '0.0.0.0'
const port = process.env.PORT || 4500

const corsOptions = { origin: '*', optionsSuccessStatus: 200 }

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    iam_apikey: process.env.API_KEY,
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
});

app.use(json())
app.use(urlencoded({ extended: false }))


app.use(cors(corsOptions))

app.use(router)

app.use('/home',(req,res) => { res.sendFile(path.join(__dirname+'/src/html/index.html')); })
app.use('/', (req, res) => { res.send(`I don't Love Docker & Kubernetes & NodeJs`);})

app.listen(port,host, () => { console.log(`Server listening on port ${port} in the host ${host}`); })

