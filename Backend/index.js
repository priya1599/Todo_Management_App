

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const projectRouter = require('./src/routes/projectRoutes');
const authRoutes = require('./src/routes/authRoutes')
const bodyParser = require('body-parser');
// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse JSON bodies

app.use(cors());
app.use(bodyParser.json());

app.use("/api/project", projectRouter);
app.use("/api/auth", authRoutes);

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connection successful!'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Basic route to verify server is running
app.get('/', (req, res) => {
  res.send('Welcome to home page  ');
});

// Define the port from .env or use 5000
const PORT = process.env.PORT || 5000;

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
















// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// // const { default: connectDB } = require('./src/config/db');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();

// //Middlewares
// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());

// //Routes

// //Home Route
// app.get("/", (req, res)=>{
//     res.status(200).send("welcome to the home page")
// })

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));
// const PORT = process.env.PORT || 8000;

// app.listen(PORT, ()=>{
    
//     console.log(`server is listening on port ${PORT}`);
// })






// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const bodyParser = require('body-parser');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes


// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
