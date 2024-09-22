// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     } ,
//     description: String,
//     image:
//     {
//         type : String,
//         default :
//     " https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM=",

//         set : (v) => v === "" ? " https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM= " : v,
//     } ,
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;



// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     } ,
//     description: String,
//     image:
//     {
//        filename:String,
//        url:{
         
//              type : String,
//         default :
//     " https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM=",

//         set : (v) => v === "" ? " https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM= " : v,
//         }
//     } ,
//     price: Number,
//     location: String,
//     country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    } ,
    description: String,
    image:
    {
       filename:String,
       url:{
 type : String,
        default :
    " https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM=",

        set : (v) => v === "" ? " https://media.istockphoto.com/id/182730617/photo/varkala-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=KOo5jAjXlO-8_YqfmrCgoxuzjqPidd_V9j_HIopbuoM= " : v,
        }
    } ,
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;