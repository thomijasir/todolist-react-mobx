import { autorun, observable, computed } from "mobx";


class Todo{
    @observable value;
    @observable id;
    @observable complete;

    constructor(props) {
        this.value = props;
        this.id = Date.now;
        this.complete = false; 
    }
    
}

class TodoStore{
    @observable todos = [];
    @observable filter = "";

    @computed get filteredTodos(){
        let matchFilter = new RegExp(this.filter,"i");
        return this.todos.filter(responses => !this.filter || matchFilter.test(responses.value))
    }

    createTodos(value){
        this.todos.push(new Todo(value));
    }

    clearComplete(e){
        console.log('ONTODOSTORE',e);
        const inCompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(inCompleteTodos);
    }
}   

const store = new TodoStore;

export default store;