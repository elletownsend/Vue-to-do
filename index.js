new Vue({
    el: "#app",
    data: {
        todos: [
            { text: "Clean desk", id: Date.now() },
            { text: "Tidy room", id: Date.now() + 1 },
            { text: "Study", id: Date.now() + 2 },
            { text: "Reading", id: Date.now() + 3 }
        ]
    },
    methods: {

        addTodo(event) {
            const text = event.target.value;
            this.todos.push({ text, id: Date.now() });
            event.target.value = "";
        },
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }
});
