import app from "./src/app.js";

const PORT = 3000

const rotes = {
    "/": "API express course!",
    "/books": "Joined in the books rotes",
    "/authors": "Joined in the authors rotes"
}

app.listen(PORT, () => {
    console.log('Server Listening!')
})