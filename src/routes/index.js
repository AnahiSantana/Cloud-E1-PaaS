const router = require('express').Router();
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const autorRoute = require('./autor');

router.use('/autor', autorRoute);

const toneAnalyzer = new ToneAnalyzerV3({
    version: '2017-09-21',
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.URL,
    disableSslVerification: true,
  });
  
router.post('/',async (req,res)=>{

    console.log(req.body);

    if(!req.body.text){
      return res.send({"Error":"Missing text tag"})
    }
    const toneParams = {
        toneInput: { 'text': req.body.text },
        content_type: 'application/json',
        };

        toneAnalyzer.tone(toneParams)
        .then(toneAnalysis => {
        res.send(JSON.stringify(toneAnalysis.result.document_tone, null, 2));
        })
        .catch(err => {
        res.send('error:', err);
        });
});
module.exports = router;