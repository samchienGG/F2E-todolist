var app = new Vue({
    el: '#app',
    data: {
        startDate:'',
        endDate:'',
        comment: '',
        newTodo: '',
        addState: false,
        completed: false,
        btndisabled: false,
        starState: false,
        nowClickNum: -1,
        todos: [ 
            {
                id: '345',
                title: '你好',
                completed: false,
                starState: false,
                editState: false,
                startDate: '2018-05-10',
                endDate: '2018-05-15',
                isFile: false,
                comment: '今天完成',
                btndisabled: true
            },
            {
                title:'222',
                starState: false,
                editState: false,
                startDate: '2018-05-10',
                endDate: '2018-05-15',
                comment: 'hi',
                btndisabled: true
            },
            {
                title:'333',
                starState: false,
                editState: false,
                startDate: '2018-04-10',
                endDate: '2018-04-15',
                comment: 'hola',
                btndisabled: true
            },
        ],
        visibility: 'all',
        catchTodo: {},
        catchTitle: '',
        catchStartDate: '',
        catchEndDate: '',
        catchStarState: false,
        catchComment: ''
    },
    methods: {
        addTodo: function() {
            var value = this.newTodo;
            var timestamp = Math.floor(Date.now());
            console.log(value, timestamp);
            var comment = this.comment;
            var startDate = this.startDate;
            var endDate = this.endDate;
            
            if (value == '') {
                alert('輸入主題');
            } else if(startDate == '' || endDate == '') {
                alert('輸入時間');
            }
            else {
                this.todos.push({
                    id: timestamp,
                    title: value,
                    completed: false,
                    starState: false,
                    editState: false,
                    startDate: startDate,
                    endDate: endDate,
                    isFile: false,
                    comment: comment,
                    btndisabled: true
                });
                this.reset();
            }
        },
        saveData: function(index) {
            this.todos[index].editState = !this.todos[index].editState;
            this.todos[index].btndisabled = !this.todos[index].btndisabled;
        },
        starIsActive: function(index) {
            this.todos[index].starState = !this.todos[index].starState;

        },
        addStateIsActive: function() {
            this.addState = !this.addState;

        },
        cancelBtnClick: function() {
            this.reset();
        },
        cancelEdit: function (item, index) {
            this.todos[index].btndisabled = !this.todos[index].btndisabled;
            this.todos[index].editState = !this.todos[index].editState;
            item.title = this.catchTitle;
            item.startDate = this.catchStartDate;
            item.endDate = this.catchEndDate;
            item.starState = this.catchStarState;
            item.comment = this.catchComment;
            this.catchTodo = {};
        },
        reset: function() {
            return  this.startDate = '',
                    this.endDate = '',
                    this.comment = '',
                    this.newTodo = '',
                    this.addState = false
        },
        editCheck: function(item, index) {
            this.todos[index].btndisabled = !this.todos[index].btndisabled;
            this.todos[index].editState = !this.todos[index].editState;
            if (this.nowClickNum == index) {
                this.nowClickNum = -1;
            } else {
                this.nowClickNum = index;
            }
            this.catchTodo = item;
            this.catchTitle = item.title;
            this.catchStartDate = item.startDate;
            this.catchEndDate = item.endDate;
            this.catchStarState = item.starState;
            this.catchComment = item.comment;
        }
    },
    computed: {
        filteredTodo: function () {
            if (this.visibility == 'all') {
                return this.todos;    
            } else if (this.visibility == 'InProgress') {
                var newTodos = [];
                this.todos.forEach(function(item) {
                    if (!item.completed) {
                        newTodos.push(item);
                    }
                })
                return newTodos;
            } else if (this.visibility == 'Completed') {
                var newTodos = [];
                this.todos.forEach(function(item) {
                    if (item.completed) {
                        newTodos.push(item);
                    }
                })
                return newTodos;
            }
            return [];
            
        }
    }
})

var el = document.getElementById('itemsBox');
Sortable.create(el, {
    handle: '.drag-dot',
    animation: 150
});