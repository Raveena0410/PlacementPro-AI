const mongoose=require('mongoose');
const { PiPlugsConnectedBold } = require('react-icons/pi');
const connectb=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('mongodb connected"')
    })
    .catch((err)=> {
        console.log(err);
    })
}
module.exports=PiPlugsConnectedBold;