var app = new Vue({
    el: '#app',
    data: {
        todo: "",
        list: []
    },
    methods: {
        addToDo() {
            this.list.push(
                {
                    todo: this.todo,
                    done: false
                }
            )
        },
        deletetodo(index) {
            this.list.splice(index, 1)
        }
    }
})