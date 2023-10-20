import Task from "../models/Task";
import TaskRepository from "../repositories/TaskRepository";

const taskRepository = new TaskRepository();

export default class TaskService {
  constructor() {}

  add(data: Task): Task {
    return taskRepository.add(data);
  }

  get(status: string) {
    const result = taskRepository.get();
    const tasks: Task[] = [];
    result.map((obj) => {
      if (obj.status === status) {
        tasks.push(obj);
      }
    });

    return tasks;
  }

  getById(id: string): Task | {} {
    const result = taskRepository.get();
    let task = {};
    result.map((obj) => {
      if (obj.id === id) {
        task = obj;
      }
    });
    return task;
  }

  getIndexById(id_task: string): number {
    let position: number = 9999;
    const result = taskRepository.get();
    result.map((obj, index) => {
      if (obj.id === id_task) {
        position = index;
      }
    });
    return position;
  }

  update(data: Task, id_task: string) {
    const position = this.getIndexById(id_task);
    if (position !== 9999) {
      return taskRepository.update(data, position);
    } else {
      return {};
    }
  }

  delete(id_task : string){
    const position = this.getIndexById(id_task);
    
    if (position !== 9999) {
      return taskRepository.delete(position);
    } else {
      return {};
    }
  }
}
