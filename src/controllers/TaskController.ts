import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import multer from "multer";
import TaskService from "../services/TaskService";
import {
  GetSchema,
  GetByIdSchema,
  AddSchema,
  UpdateSchema,
  UpdateSchemaParams,
  DeleteSchema,
} from "../schemas/TaskSchemas";

const taskService = new TaskService();

export default class TaskControllers {
  constructor() {}
  async get(req: Request, res: Response) {
    try {
      const { status } = req.query;
      await GetSchema.validate(req.query);
      const result = taskService.get(status as string);
      res.json(result).status(200);
    } catch (error) {
      res.json({ error });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id_task } = req.params;
      await GetByIdSchema.validate(req.params);
      console.log(id_task);
      const result = taskService.getById(id_task);
      res.json(result).status(200);
    } catch (error) {
      res.json({ error: "invalid id params" }).status(401);
    }
  }

  async add(req: Request, res: Response) {
    
    try {
      await AddSchema.validate(req.body, { strict: true });

      const id = uuidv4();
      req.body.id = id;

      const result = taskService.add(req.body);
      res.json(result).status(201);
    } catch (error) {
      res.json({ error }).status(401);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id_task } = req.params;

      await UpdateSchema.validate(req.body);
      await UpdateSchemaParams.validate(id_task);

      const result = taskService.update(req.body, id_task);

      if (Object.keys(result).length > 0) {
        res.json(result);
      } else {
        res.json({ error: "task not found" }).status(404);
      }
    } catch (error) {
      res.json({ error }).status(400);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id_task } = req.params;

      await DeleteSchema.validate(id_task);

      const result = taskService.delete(id_task);
      res.json(result);
    } catch (error) {
      res.json({ error }).status(401);
    }
  }

  notFound(req: Request, res: Response) {
    res.status(404);
    return res.json({ error: "Route not found!" });
  }
}
