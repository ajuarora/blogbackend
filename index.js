import express from "express";
import mongoose from "mongoose";
import blogRoute from "./routes/blog_route";
import userRoute from "./routes/user_route";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/api", (req, res) => {
    res.status(200).json({ message: "i am runing" });
});

app.use("/blog", blogRoute);
app.use("/user", userRoute);

mongoose.connect("mongodb+srv://microminimus2020:Stupid01@cluster0.lnnxyvv.mongodb.net/BlogDB?retryWrites=true&w=majority")
    .then(() => app.listen(port))
    .then(() => console.log(`Connected ${port}`));