//call router from express

const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
    try {
        //generate new password/bcrypt=>salt/hash/compare etc
        //salt
        const salt = await bcrypt.genSalt(10);

        //hash password + salt
        const hashedPassword = await bcrypt.hash(req.body.password, salt);


        //create new users
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })

        //save user and send response

        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);

    }
})



//login
router.post("/login", async (req, res) => {
    try {
        //find user
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(400).json("Wrong username or password");


        //validate password if correct 
        //compare req.body.password === user.password(we found above)
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Invalid Credentials");
        //return user
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);

    }
})




//expoer routes

module.exports = router;