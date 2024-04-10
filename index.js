const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

const chatRoutes = require("./routes/chatRoutes");
const waitlistRoutes = require('./routes/waitlistRoutes');
const resendRoutes = require('./routes/resendRoutes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", chatRoutes);
app.use("/api", waitlistRoutes);
app.use("/send-email", resendRoutes);

const port = process.env.PORT || 3000;

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
