let express = require('express');
const { MongoClient } = require('mongodb');

let app = express();
app.use(express.json());

const dbURI = process.env.MONGO_URL || "mongodb://localhost:27017/testdb";
const client = new MongoClient(dbURI);
let initCompleted = false;

app.get('/printparam/:param', (req, res) => {
    console.log(`Recieved request for /printparam`);
    res.send(req.params.param);
})

app.get('/printquery', (req, res) => {
    console.log(`Recieved request for /printquery`);
    res.send(req.query.param);
})

app.post('/test', (req, res) => {
    console.log(`Recieved request for /test`);
    res.json(req.body);
})

app.get('/readiness', async (req, res) => {
    console.log('Readiness Check');
    try {
        if (initCompleted) return res.send("Init already completed");
        await init();
        initCompleted = true;
        return res.send("init successful");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }

});

app.get('/liveness', (req, res) => {
    console.log('Liveness Check');
    if (isDbConnected()) {
        console.log('DB connected');
        return res.send('Connected to db');
    }
    else {
        console.log('Liveness is unhealthy');
        res.status(500).send('Application unhealthy');
    }
});

const PORT = 30010;
app.listen(PORT, function () {
    console.log('Server started at ' + PORT);
});

async function init() {
        console.log('Trying to connect ' + dbURI);
        await client.connect();
        console.log('DB connected');
}

function isDbConnected() {
    return !!client && !!client.topology && client.topology.isConnected()
}
init();