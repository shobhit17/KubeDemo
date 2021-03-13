let express = require('express');
let app = express();
app.use(express.json());
app.get('/printParam/:param', (req,res)=>{
    res.send(req.params.param);
})

app.get('/printquery', (req,res)=>{
    console.log(`Recieved request for /printquery`);
    res.send(req.query.param);
})

app.post('/test', (req, res)=>{
    console.log(`Recieved request for /test`);
    res.json(req.body);
})

const PORT = 30010;
app.listen(PORT, function(){
    console.log('Server started at ' + PORT);
});
