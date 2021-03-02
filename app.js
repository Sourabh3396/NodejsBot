const express = require('express'); 
const app = express(); 
  
// Getting Request 
app.get('/', (req, res) => { 
  
    // Sending the response 
    res.send('Hello World!') 
     
    // Ending the response  
    res.end() 
}) 



app.post('/bot', (req, res) => {
 // console.log("Data", req.body)

 



      res.send({
          msg: "Hello !!"
      })
});

  
// Establishing the port  
const PORT = process.env.PORT ||4000; 
  
// Executing the sever on given port number 
app.listen(PORT, console.log( 
  `Server started on port ${PORT}`));