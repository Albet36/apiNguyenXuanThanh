import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";
export const register = async (req, res) => {
  const hashedPass = await bcrypt.hash(req.body.password, 12);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  export const login = async (req, res) => {
    const { username } = req.body;
    // console.log(username,password);
    try{
      const oldUser = await User.findOne({ username });
      if (!oldUser) {
        return res.status(404).json({ message: "Người dùng không tồn tại" });
      }
      const isPasswordCorrect = await bcrypt.compare(req.body.password, oldUser.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Mật khẩu không đúng" });
      }
        const accessToken = jwt.sign(
        {
            id: oldUser._id,
            isAdmin: oldUser.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { ...others } = oldUser._doc;  
        res.status(200).json({...others,accessToken});

    }catch(err){
      // res.status(500).json(err)
      console.log(err);
    }

}