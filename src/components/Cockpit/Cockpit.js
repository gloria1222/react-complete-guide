import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClassed = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Yellowgreen;
    }

    if (props.persons.length <=2){
      assignedClassed.push(classes.pink);//assignedClassed = ['pink']
    }
    if (props.persons.length <=1){
      assignedClassed.push(classes.bold);//assignedClassed = ['pink','bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClassed.join(' ')}>This is really working!</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;