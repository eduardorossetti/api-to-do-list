import { NextFunction, Request, Response, Router } from "express";
import TaskControllers from "../controllers/TaskController";
import storage from "../utils/storage";
import multer from "multer";

const taskController = new TaskControllers();
const router = Router();

const upload = multer({storage})


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    //validate the token to identify the existence of the user
    next();
  } else {
    res.json({error: "unauthenticated user"}).status(400);
  }
}; //test middleware

router
  .get("/task", taskController.get)
  .get("/task/:id_task", taskController.getById)
  .post("/task", upload.single('file'), taskController.add)
  .put("/task/:id_task", taskController.update)
  .delete("/task/:id_task", taskController.delete)
  .get("*", taskController.notFound);

export default router;
