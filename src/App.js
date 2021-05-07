import './styles/App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { Component } from 'react';



class App extends Component {

  state ={
       students: [],
       chosenStudents: [],
       chosenHouses: [],
  }

  componentDidMount(){
    const {students} = this.state
    fetch("https://hp-api.herokuapp.com/api/characters/students")
    .then(response=> response.json())
    .then((response)=> this.setState({students: [...students,response]}))    
  }

  shuffle =()=>{
    const {students} = this.state
    return Math.ceil(Math.random() * students[0].length-1)}

  chooseStudents = () => {

    const {students} = this.state

    let chosen1 = this.shuffle();

    let chosen2 = this.shuffle();
    
    let chosen3 = this.shuffle();

    if (students[0][chosen1].house !== students[0][chosen2].house && 
      students[0][chosen2].house !== students[0][chosen3].house && 
      students[0][chosen1].house !== students[0][chosen3].house) 
      
      {  
        this.setState(
          {chosenStudents : [
            students[0][chosen1],
            students[0][chosen2],
            students[0][chosen3]],
          chosenHouses : [
            students[0][chosen1].house,
            students[0][chosen2].house,
            students[0][chosen3].house]}
        )
      } 

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
          <CardList chosen={chosenStudents}/>
        </main>
        
      </div>
    );
  }
}

export default App;
