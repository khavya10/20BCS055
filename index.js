const express=require('express');
app=express()
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/trainbookingsystem')

const traindetails=new mongoose.Schema({
    companyName:String,
    ownerName:String,
    rollNo:String,
    ownerEmail:String

})

const traindetail=mongoose.model('Train',traindetails)

const a="";
const b="";
const c="";
const d="";
const e="";
// const ip=GET http://104.211.219.98/train/register;
const myReg = new XMLHttpRequest('http://104.211.219.98/train/auth/');
// myReg.onload = function( ) {
//     const data = JSON. parse( this?responseText);
//     console. log(data);
// };
// myReg.onerror = function(err) {
//     console. log( 'ERROR!" err)
// };
// myReg.open( 'get','http://104.211.219.98/train/auth/', true)
// myReg. setRequestHeader( 'Accept' application/ison')
// myReg.send()

app.post('/',(req,res)=>{

    var va=new traindetail({
        myre


    })
    va.save()
    console.log(va)

})

  
 







app.listen(3000, () => {
    console.log(`Example app listening on port `)
  })

  