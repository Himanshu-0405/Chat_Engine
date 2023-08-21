const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app=express();
app.use(express.json())
app.use(cors({origin: true}));
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    console.log(username);
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "343b6d07-9be2-46c5-9a53-b7eb3abdd8bf" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        console.log('some error');
        return res.status(e.response.status).json(e.response.data);
    }
});
app.listen(3001);