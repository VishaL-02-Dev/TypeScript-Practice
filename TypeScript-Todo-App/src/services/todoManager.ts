import { Todo } from "../models/Todo";
import { Task } from "../models/Task";

export class TodoManager {
    constructor(private todo: Todo) {}

    add(title: string) {
        const id = Date.now();
        const task = new Task(id, title);
        this.todo.addTask(task);
        this.render();
    }

    toggle(id: number) {
        const task = this.todo.getTasks().find(t => t.id === id);
        if (task) task.toggle();
        this.render();
    }

    delete(id: number) {
        this.todo.removeTask(id);
        this.render();
    }

    render() {
        const list = document.getElementById("task-list")!;
        list.innerHTML = "";

        this.todo.getTasks().forEach(task => {
            const div = document.createElement("div");
            div.className = "task";

            div.innerHTML = `
                <span>${task.describe()}</span>
                <button class="toggle-btn">Done</button>
                <button class="delete-btn">Delete</button>
            `;

            div.querySelector(".toggle-btn")?.addEventListener("click", () => {
                this.toggle(task.id);
            });

            div.querySelector(".delete-btn")?.addEventListener("click", () => {
                this.delete(task.id);
            });

            list.appendChild(div);
        });
    }
}
