//call router from express

const router = require("express").Router();
const Pin = require("../models/Pin");

//create a pin 
router.post("/", async (req, res) => {
    const newPin = new Pin(req.body)
    //req.body because we are sending everthing from body
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);

    } catch (error) {
        res.status(500).json(error);
    }
})



//get all pins
router.get("/", async (req, res) => {
    try {
        const getPin = await Pin.find()
        res.status(200).json(getPin);

    } catch (error) {
        res.status(500).json(error);

    }
})






//expoer routes

module.exports = router;