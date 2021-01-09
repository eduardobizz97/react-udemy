import Person from "./Person/Person";
import "./App.css";
import { Component } from "react";

class App extends Component {
  
  state = {
    persons: [
      { name: "Eduardo", edad: 23 },
      { name: "Vivi", edad: 20 },
    ],
  };
  
  switchNameHandler = ( nombreNuevo) => {
    
    this.setState({
      persons: [
        { name: nombreNuevo, edad: 23 },
        { name: "Vivi2", edad: 20 },
      ]
    });
  };

  nameChangeHandler = ( event ) => {
    
    this.setState({
      persons: [
        { name: event.target.value, edad: 23 },
        { name: "Vivi2", edad: 20 },
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler.bind(this, 'Holabb')}>boton</button>
        <Person 
          name={this.state.persons[0].name}
          click={this.switchNameHandler.bind(this,'Esteban')}
          changed={this.nameChangeHandler}
          >
          Estoy estudiando
        </Person>

      </div>
    );
  };


};

export default App;

/* state = {
  persons: [
    { name: "Eduardo", edad: 23 },
    { name: "Vivi", edad: 20 },
  ],
};

switchNameHandler = () => {
  this.setState({
    persons: [
      { name: "Eduardo2", edad: 23 },
      { name: "Vivi2", edad: 20 },
    ],
  });
};
 */

/* const [ personsState, setPersonsState ] = useState({
  persons: [
    { name: "Eduardo", edad: 23 },
    { name: "Vivi", edad: 20 },

  ],
  
});

const switchNameHandler = () => {

  setPersonsState(
    {
      persons: 
      [
        { name: "Eduardo2", edad: 23 },
        { name: "Vivi2", edad: 20 }
      ],
    }
  ) */