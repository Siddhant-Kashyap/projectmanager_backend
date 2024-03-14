const express = require('express')
const connectDB = require('./utils/dbConnection')
const userRoutes = require('./routes/user.route')
const taskRoutes= require('./routes/task.routes')

const app = express();
app.use(express.json());
const PORT = 8001;

connectDB();

app.use('/api/users', userRoutes);
app.use('/api/task',taskRoutes)

app.listen(PORT, () => {
    console.log("Server is up and running");
});
