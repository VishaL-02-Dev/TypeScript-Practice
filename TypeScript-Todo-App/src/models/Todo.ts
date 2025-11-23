import{Task} from "./Task.js";

export class Todo{
    private tasks: Task[]=[];

    addTask(task: Task){
        this.tasks.push(task);
    }

    removeTask(id:number){
        this.tasks=this.tasks.filter(task=>task.id !==id);
    }

    getTasks():Task[]{
        return this.tasks;
    }
}