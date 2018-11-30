const objExpress = require('express')
const objBodyParser = require('body-parser') 
const app = objExpress()

app.use(objBodyParser.json)
app.use(objBodyParser.urlencoded)

app.get('/', (req, res) => {
    res.end('Data From Node')
})


app.get('/api', (req, res)=>{
    const objFeedback = req.body.objFeedback
    res.end('Feedbask from Server ==> ' + objFeedback)
});


app.listen(3000, () => {
    console.log('Server Node Working')
})

