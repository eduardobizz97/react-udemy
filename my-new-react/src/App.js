import Person from "./Person/Person";
import "./App.css";
import { Component } from "react";

class App extends Component {
  
  state = {
    persons: [
      { name: "Eduardo", edad: 23 },
      { name: "Vivi", edad: 20 }
      
    ],
    childs: []

  };

  testFunc = () => {

  }
  
  switchNameHandler = ( nombreNuevo, index ) => {
    const {persons} = this.state
    persons[index] = { name: nombreNuevo, edad: 666 }
    this.setState({
      persons: [...persons]
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

  testRender = () => {
    
  }

  addChildHandler = () => {
    const { childs } = this.state;
    const item =  {name: '',edad: ''}
    this.setState(
      {childs: [...childs, item]}
    )

  }



   
  render() {

    return (

      <div className="App">
        <button onClick={this.addChildHandler}>boton</button>      
        <div>
          {this
            .state
              .childs
                .map( (item, index) =>  {
                  return (
                    <Person name={item.name} edad={item.edad} change={ () => {} }/>
                  )
                })
          }
        </div>
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