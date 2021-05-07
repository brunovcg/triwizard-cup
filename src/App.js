import './styles/App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { Component } from 'react';


class App extends Component {

  state ={
       students: [],
       chosenStudents: [],
       chosenHouses: [],
       loading: true,
  }

  testeConsole(){
    console.log(this.state.students)

   
  }



  componentDidMount(){
    const {students} = this.state
    fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then(response=> response.json())
    .then((response)=> this.setState({students: [...students,response], loading: false}))    
  }

 


  chooseStudents = () => {

    const {students} = this.state

    let chosen1 = Math.ceil(Math.random() * students[0].length-1);

    let chosen2 = Math.ceil(Math.random() * students[0].length-1);
    
    let chosen3 = Math.ceil(Math.random() * students[0].length-1);

    if (students[0][chosen1].house !== students[0][chosen2].house && 
      students[0][chosen2].house !== students[0][chosen3].house && 
      students[0][chosen1].house !== students[0][chosen3].house) { 
        
        this.setState(
        {chosenStudents : [students[0][chosen1],students[0][chosen2],students[0][chosen3]],
        chosenHouses : [students[0][chosen1].house,students[0][chosen2].house,students[0][chosen3].house]})} 

    else {this.chooseStudents()}
        
  }

 

  render(){

    const {chosenStudents} = this.state
    return (

      <div className="App">

        <header>
          <Header/>   
        </header>

        <main>
          <button onClick={() => {this.chooseStudents()}} className="button">SHUFFLE</button>
          <CardList 
            chosen={chosenStudents}
          />
        </main>
        
      </div>
    );
  }
}

export default App;
