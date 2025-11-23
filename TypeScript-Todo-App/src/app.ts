import { Todo } from "./models/Todo.js";
import { TodoManager } from "./services/todoManager.js";

const todo = new Todo();
const manager = new TodoManager(todo);

document.getElementById("addBtn")?.addEventListener("click", () => {
    const input = document.getElementById("taskInput") as HTMLInputElement;
    if (input.value.trim() !== "") {
        manager.add(input.value);
        input.value = "";
    }
});

manager.render();

console.log('Todo app loaded');