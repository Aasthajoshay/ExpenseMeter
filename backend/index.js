import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.routes.js';
import cors from 'cors';
import expenseRoutes from './routes/expense.routes.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));


const corsOptions = {
    origin: "http://localhost:5173",
    Credentials : true,
}
app.use('/api/v1/user', userRoute);
app.use('/api/v1/expense' , expenseRoutes);
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});  
app.get("/", (req, res) => {
    res.send("Expense Tracker Backend API is working ✅");
  });
  
app.use(cors(corsOptions));

//routes
