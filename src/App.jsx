import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Button, Form, FormGroup, Label, Input, UncontrolledAlert} from 'reactstrap';

@observer
class App extends Component{

    constructor(props){
        super(props);
        this.filter = this.filter.bind(this);
    }
    
    filter(e){
        this.props.store.filter = e.target.value;
        console.log(e.target.value);
        if(e.which === 13){
            e.target.value = "";
        }
    }

    createNew(e){
        if(e.which === 13){
            this.props.store.createTodos(e.target.value);
            e.target.value = "";
        }
    }

    toggelComplete(todo){
        todo.complete = !todo.complete;
    }

    handleButton(e){
        e.preventDefault;
        this.props.store.clearComplete(e);
    }

    render(){
        const filterSeacrh  = this.props.store.filteredTodos;
        const filtering     = this.props.store.filter;
        const result        = this.props.store.todos;

        const list = filterSeacrh.map(response =>(
            <li key={response.id}>
                <input type="checkbox" onChange={this.toggelComplete.bind(this, response)} value={response.complete} checked={response.complete}/>
               {' '+response.value}
            </li>
        ));
        return(
        <div className="container ">
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <h2>Todo List MobX + React</h2>
                    <p className="lead">Sample test application todolist, using react and MOBX isn't Cool?</p>
                    <UncontrolledAlert color="info">
                        Enter for Add Todo List
                    </UncontrolledAlert>
                     <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Input type="text" onKeyPress={this.createNew.bind(this)} placeholder="Add Todo List" />
                        </FormGroup>
                        <FormGroup className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <Input type="text" placeholder="Seacrh" onChange={this.filter} />
                        </FormGroup>
                        <Button color="primary" onClick={this.handleButton.bind(this)}>Clear Todo Check List</Button>
                    </Form>
                    <br/>
                    {filtering}
                    <ul>{list}</ul>
                </div>
            </div>
        </div>
        );
    }
}

export default App;