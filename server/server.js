const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(body-parser.json());



const PORT = 3005
app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`);
});