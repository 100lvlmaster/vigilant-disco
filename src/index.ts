import express from "express";
import bodyParser from "body-parser";
import { RegisterUserDto } from "./dto/register.dto";
import { AuthController } from "./controllers/auth.controller";
import { UserController } from "./controllers/user.controller";
import { DeleteUserDto, UpdateUserDto } from "./dto/user.input.dto";
import { UserEntity } from "./entity/user.entity";
import { Connection, createConnection } from "typeorm";
import "reflect-metadata";
let connection: Connection;

//
const app = express();
const authController = new AuthController();
const userController = new UserController();
///
app.use(bodyParser.urlencoded());
app.use(express.json());
///

app.get("/", (req, res) => {
  return res.status(200).json("OK");
});
///
// app.post("/register", async (req, res) => {
//   const user = req.body as RegisterUserDto;
//   await authController.registerUser(user);
//   return res.status(200).json("OK");
// });
// //
// app.post("/login", async (req, res) => {
//   const user = req.body as RegisterUserDto;
//   const doesExist = await authController.loginUser(user);
//   if (!doesExist) {
//     return res.status(401).send("User does not exist");
//   }
//   return res.status(200).json("Logged in successfully");
// });
// ///
// app.post("/delete", async (req, res) => {
//   const user = req.body as DeleteUserDto;
//   const doesExist = await userController.deleteUser(user.id);
//   if (!doesExist) {
//     return res.status(401).send("User does not exist");
//   }
//   return res.status(200).json("Logged in successfully");
// });
// app.post("/update", async (req, res) => {
//   const user = req.body as UpdateUserDto;
//   const doesExist = await userController.updateUser(user);
//   if (!doesExist) {
//     return res.status(401).send("User does not exist");
//   }
//   return res.status(200).json("Logged in successfully");
// });

// app.use(bodyParser());
const initDB = async (): Promise<Connection> => {
  connection = await createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "navin",
    password: "topsecret",
    database: "bizpilot",
    // logging: true,
    synchronize: true,
    entities: [UserEntity],
  });
  return connection;
};

app.listen(8000, async () => {
  connection = await initDB();
  console.log("server is running");
});
