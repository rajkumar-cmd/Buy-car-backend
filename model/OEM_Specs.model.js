const mongoose=require("mongoose");

const OEM_SpecsSchema=mongoose.Schema({
    modelName:String,
    modelYear:Number,
    price:Number,
    availableColor:Array,
    mileage:Number,
    power:Number,
    maxSpeed:Number
});

const OEM_SpecsModel=mongoose.model("OEM_Specs",OEM_SpecsSchema);

module.exports={
    OEM_SpecsModel
}