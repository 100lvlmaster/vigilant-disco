import { App } from "./app";
import "reflect-metadata";
///
require("dotenv").config();
const app = new App();
///
app.start(+process.env.PORT);
