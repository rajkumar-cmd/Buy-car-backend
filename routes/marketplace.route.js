const express = require("express");
const { marketplaceModel } = require("../model/marketplace.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const marketplaceRouter = express.Router();

marketplaceRouter.post("/add", async (req, res) => {
    const { 
        imageURL,
        title,
        desc,
        KMs_on_Odometer,
        major_Scratches,
        original_Paint,
        Number_of_accidents,
        Number_of_previous_buyers,
        registration_Place,
        OEM_Spec_ID,
        dealer_ID
        } = req.body;
    try {
        const marketplace = new marketplaceModel({ 
            imageURL,
            title,
            desc,
            KMs_on_Odometer,
            major_Scratches,
            original_Paint,
            Number_of_accidents,
            Number_of_previous_buyers,
            registration_Place,
            OEM_Spec_ID,
            dealer_ID
            });
        await marketplace.save();
        res.send({ "msg": "Marketplace's information Saved" })
    } catch (err) {
        res.send({ "msg": err })
    }
})
marketplaceRouter.get("/", async (req, res) => {
    try {
        const marketplaces = await marketplaces.find({})
        res.send({ marketplaces })
    } catch (err) {
        res.send({ "msg": err })
    }
})

module.exports = {
    marketplaceRouter
}