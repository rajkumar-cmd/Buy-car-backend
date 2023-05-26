const express = require("express");
const { OEM_SpecsModel } = require("../model/OEM_Specs.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const OEM_SpecsRouter = express.Router();

OEM_SpecsRouter.post("/add", async (req, res) => {
    const { 
        modelName,
        modelYear,
        price,
        availableColor,
        mileage,
        power,
        maxSpeed } = req.body;
    try {
        const OEM_Specs = new OEM_SpecsModel({ 
            modelName,
            modelYear,
            price,
            availableColor,
            mileage,
            power,
            maxSpeed });
        await OEM_Specs.save();
        res.send({ "msg": "OEM_Specs's information Saved" })
    } catch (err) {
        res.send({ "msg": err })
    }
})

OEM_SpecsRouter.get("/", async (req, res) => {
    try {
        const OEM_Specs = await OEM_SpecsModel.find({})
        res.send({ OEM_Specs })
    } catch (err) {
        res.send({ "msg": err })
    }
})

module.exports = {
    OEM_SpecsRouter
}