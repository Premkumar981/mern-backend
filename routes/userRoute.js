import express from "express";
import { authenticate, authorize } from "../middlewares/auth.js";
import { register, userUpdate, userDelete, showUsers, login } from "../controllers/userController.js";

const Router = express.Router();

Router.post("/register", register);

Router.patch("/:id", authenticate, authorize("admin"), userUpdate);

// Router.delete("/:id", authenticate, authorize("admin"), userDelete);
Router.delete("/:id", userDelete);

// Router.get("/users", authenticate, authorize("admin"), showUsers);
Router.get("/users", showUsers);

Router.post("/login", login);

export default Router;