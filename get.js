const axios= require('axios');
axios.post('http://localhost:3000/users',
{
    hn: '1000003', 
    encounterType: '12', 
    encounterId: '12334', 
    printId:'user1', 
    documentData: { 
                    base64string: '1234568797462468745' 
                  } 
})

.then(res =>{
  console.log(res.data)
})
 .catch(error =>{
     console.log(error)
 })