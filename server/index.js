import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import postsRoutes from "./routes/posts.js";

const app = express();


app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use("/posts", postsRoutes);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://<username>:<password>@cluster0.masul.mongodb.net/SOCIAL-MEDIA?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => error.message);

mongoose.set("useFindAndModify", false);