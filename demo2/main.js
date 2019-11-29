var app = new Vue({
    el: '#app',
    data: {
        list: [],
        inputValue: ''
    },
    methods: {
        add: function () {
            this.list.push(this.inputValue)
        },
        remove: function (index) {
            this.list.splice(index, 1)
        },
        clear: function () {
            this.list = []
        }
    }
})