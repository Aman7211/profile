const mongoose= require('mongoose');
require('dotenv').config();  // by using this whatever we have defined under the environment file all get 
// loaded to the process object and we can fetch that data using the process object

// ...................................................................

// Note : if we have to feed the configuation that we have put on environment file in our process object
// then we have to use .env library
// hence if we have to use .env library then we have to write the command
//   npm i dotenv

const dbConnect = async() =>{        // ensure the connection between your apllication and db.
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
    useUnifiedTopology: true    })
    .then(()=>{console.log("Db connection is successful")})
     .catch((error)=>{console.log("issue in db connection")
    console.log(error.message);
    process.exit(1);
})

    } 



// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://Aman7211:Aman9821@cluster0.sdtbi1b.mongodb.net/gofoodmern?retryWrites=true&w=majority';
// const mongoDB = async() =>{
//     await mongoose.connect(mongoURI,{ useNewUrlParser : true }, async(err,result)=>{
//        if(err) console.log("----",err)
//        else{
//         console.log("connected successfully");

//         // for reading the database
//         const fetched_data = await mongoose.connection.db.collection("food_detail");
//         fetched_data.find({}).toArray(async function ( err,data){
//             const foodcategory = await mongoose.connection.db.collection("food_category");
//             foodcategory.find({}).toArray(function (err,catdata){
//             if(err){
//             console.log(err);}
//             else{
//                 global.food_items = data;
//                global.foodcategory= catdata;
//             }
//         })
//        })
//     } })
// }
// module.exports = mongoDB;



module.exports = dbConnect;