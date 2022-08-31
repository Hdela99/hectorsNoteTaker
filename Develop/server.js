const express = require(`express`);
// const dbJSON = require(`/db.json`);
const apiRoutes = require("./public/routes/apiRoutes");
const htmlRoutes = require("./public/routes/htmlRoutes");


//initialize express
const app = express();
const PORT = process.env.PORT || 3001;
//let express know we will be using JSON. 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(`public`));
//homepage get 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
// Develop\public\routes\htmlRoutes.js
// Develop\server.js
// Develop\db\db.json
