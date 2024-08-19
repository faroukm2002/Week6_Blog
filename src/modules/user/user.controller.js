import bcrypt from 'bcrypt';
import userModel from "../../../database/models/user.model.js"

const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) return res.json({ message: 'User already exists' });

    const hash = bcrypt.hashSync(password, parseInt(process.env.SALTROUND_KEY));
    await userModel.insertMany({ name, email, password: hash });

    res.json({ message: 'Success' });
}

const signIn = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {
            res.json({ message: 'Password incorrect' });
    } else {
        res.json({ message: 'User not found or Password Incorrect' });
    }
}

export {
    signUp,
    signIn
}
