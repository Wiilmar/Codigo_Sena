import mongoose from "mongoose";

const urlConnection = "mongodb://127.0.0.1/cargar-imagenes-yt"

export function connectToDB() {
    mongoose
        .connect(urlConnection)
        .then(() => console.log("DataBase Connect"))
        .catch(error => console.error("Database ERROR", error))
}