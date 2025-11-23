export class Task{
    constructor(
        public id : number,
        public title: string,
        public completed : boolean = false 
    ) {}

    toggle(){
        this.completed=!this.completed;
    }
    
    describe(): string {
        return this.completed 
            ? `[✔] ${this.title}`
            : `[ ] ${this.title}`;
    }
}