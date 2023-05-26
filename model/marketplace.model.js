const mongoose=require("mongoose");

const marketplaceSchema=mongoose.Schema({ 
    imageURL:String,
    title:String,
    desc:Array,
    KMs_on_Odometer:Number,
    major_Scratches:String,
    original_Paint:String,
    Number_of_accidents:Number,
    Number_of_previous_buyers:Number,
    registration_Place:String,
    OEM_Spec_ID:String,
    dealer_ID:String
});

const marketplaceModel=mongoose.model("marketplace",marketplaceSchema);

module.exports={
    marketplaceModel
}



// { 
//     "imageURL":"KKK",
//     "title":"KKK",
//     "desc":["jj","ll","oo"],
//     "KMs_on_Odometer":60000,
//     "major_Scratches":"hello",
//     "original_Paint":"Red",
//     "Number_of_accidents":70000,
//     "Number_of_previous_buyers":85000,
//     "registration_Place":"hhjjjkkkk"
// }