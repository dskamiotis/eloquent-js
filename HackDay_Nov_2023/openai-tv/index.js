// const express = require("express");
// require("dotenv").config();

// const app = express();

// app.use(express.json());




// app.post("/find-complexity", async (req, res) => {
//     try {
//         const options = {
//             method: "POST",
//             headers: {
//                 "Authorization": `Bearer ${process.env.OPEN_AI_KEY}`,
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 model: "gpt-3.5-turbo",
//                 messages: [{ role: "user", message: "Hey Testing Here!"}],
//                 max_tokens: 100
//             })
//         }
//         const response = await fetch("https://api.openai.com/v1/chat/completions", options)
//         const data = await response.json()
//         res.send(data)
//         // return res.status(200).json({
//         //     message: "Working here"
//         // })
//     } catch (error) {
//         console.log("Error not Working Jimmy")
//         // return res.res.status(500).json({
//         //     error: "Internal Server Error Jimmy"
//         // })
//     }
// })

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server OpenAi started on prot ${port}`))


const express = require("express");
require("dotenv").config();
const fetch = require("node-fetch");

const app = express();

app.use(express.json());

app.post("/find-complexity", async (req, res) => {
    try {
        const options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPEN_AI_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: "was napolean better than alexander the great? " }],
                max_tokens: 100
            })
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        console.log(">>>>>>",data); 
        res.json(data);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server OpenAi started on port ${port}`));
