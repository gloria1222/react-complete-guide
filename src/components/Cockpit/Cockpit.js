import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup');
        }
    },[]);//Http request...

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
                ref={toggleBtnRef}
                className={btnClass} 
                onClick={props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;