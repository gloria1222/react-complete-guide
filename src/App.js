import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id:'1',name:'Max',age: 28},
      {id:'2',name:'Li',age: 99},
      {id:'3',name:'Gloria',age: 27},
    ],
    otherState: 'some other value',
    username: 'supermax',
    showPersons:false,
  }

  deletePersonHandler =(personIndex) =>{
    //const persons = this.state.persons.slice();同下
    let persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangedHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>{
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                key={person.id}
                changed={(event)=> this.nameChangedHandler(event, person.id)} />})
          }
        </div>
      );
      btnClass = classes.Yellowgreen;
    }
    
    let assignedClassed = [];
    if (this.state.persons.length <=2){
      assignedClassed.push(classes.pink);//assignedClassed = ['pink']
    }
    if (this.state.persons.length <=1){
      assignedClassed.push(classes.bold);//assignedClassed = ['pink','bold']
    }
    
    return (
        <div className={classes.App}>
          <h1>Hi I'm a React App</h1>
          <p className={assignedClassed.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
} 

export default App;
