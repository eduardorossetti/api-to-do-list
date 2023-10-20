import Task from "../models/Task";

export default class TaskRepository {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  add(data: Task): Task {
    this.tasks.push(data);
    return data;
  }
  get(): Task[] {
    return this.tasks;
  }

  update(data: Task, position: number) {
    this.tasks[position] = data;
    return data;
  }

  delete(position: number) {
    delete this.tasks[position];
    return position
  }
}
