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
            maxSpeed
        });
        await OEM_Specs.save();
        res.send({ "msg": "OEM_Specs's information Saved" })
    } catch (err) {
        res.send({ "msg": err })
    }
})

OEM_SpecsRouter.get("/", async (req, res) => {
    const { price, mileage, color } = req.body
    try {
        if (!price && !color) {
            const [min,max] = mileage.split("-")
            const OEM_Specs = await OEM_SpecsModel.where("mileage").gte(min).lte(max)
            return res.send({ OEM_Specs })
        }
        if (!mileage && !color) {
            const [min,max] = price.split("-")
            const OEM_Specs = await OEM_SpecsModel.where("price" ).gte(min).lte(max)
            return res.send({ OEM_Specs })
        }
        if (!price && !mileage) {
            const OEM_Specs = await OEM_SpecsModel.find({ availableColor:color })
            return res.send({ OEM_Specs })
        }
    } catch (err) {
        res.send({ "msg": err })
    }
})

OEM_SpecsRouter.get("/find/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const post = await OEM_SpecsModel.find({ "_id": id })
        res.send({ "POST": post })
    } catch (err) {
        res.send({ "msg": err })
    }
})

module.exports = {
    OEM_SpecsRouter
}