
const express = require('express');
const app = express();
const dbConnect = require('./Config/database');
dbConnect();

require("dotenv").config();
const PORT = process.env.PORT || 6000;

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!  Hi i am Aman Kumar ')
})

app.use(express.json())
app.use('/api', require("./routes/createuser"));
app.use('/api', require("./routes/getuser"));


app.listen(PORT, ()=>{
 console.log(`Server Started Successfully at ${PORT}`)
     })
