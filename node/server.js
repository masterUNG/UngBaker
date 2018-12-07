const objExpress = require('express')
const objBodyParser = require('body-parser') 
const app = objExpress()

app.use(objBodyParser.json())
app.use(objBodyParser.urlencoded())

app.get('/', (req, res) => {
    res.end('Data From Node Doramon')
})


app.post('/api', (req, res)=>{
    const objFeedback = req.body.objFeedback

    // Value Post to Server and Response Feedback
    const username = req.body.username  
    const password = req.body.password

    res.end('Feedbask from Server ==> username: ' + username + ', password: ' + password)
});


app.listen(3000, () => {
    console.log('Server Node Working')
})

