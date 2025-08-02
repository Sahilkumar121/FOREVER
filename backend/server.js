import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db.js';
import userData from './Model/signup.model.js';
import bycrpt from 'bcrypt'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}))

app.get('/api/userData', async(req,res) => {
    try {
        const data = await userData.find({});
        res.json({
            user: data
        })
    }catch(err){
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

app.post('/api/signup', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ "success": false, "message": "Please provide all information" });
    }


    try {
        const userExist = await userData.findOne({ email });
        if (userExist) {
            return res.status(409).json({
                success: false,
                message: "Email already exist"
            })
        }
        const hashPassword = await bycrpt.hash(password, 5);
        const user = new userData({name, email, password: hashPassword});
        await user.save();

        return res.status(201).json({
            success: true,
            message: "Data succesfuly saved"
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})


app.post('/api/login', async(req,res) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return res.status(400).json({
            success: false,
            message: "User not found"
        })
    }

    try {
        const userExist = await userData.findOne({email});

        if(!userExist) {
            return res.status(404).json({
                success: false,
                message: "Invalid credential"
            })
        }

        const isPasswordValid = await bycrpt.compare(password, userExist.password);

        if(!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid credential"
            })
        }

        res.status(200).json({
            success: true,
            message: "Logged in succesfully",
            user: {
                id: userExist._id,
                email: userExist.email
            }
        })
    }catch(err) {
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
})

app.listen(port, async () => {
    await connectDB();
    console.log(`Server started on port http://localhost:${port}`);
})
