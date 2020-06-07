import React from 'react';
import './App.css';
import './components/card-list/card-list.component'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      gods: [],
      searchField: ''
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ gods:users })) 
    .catch(error => { console.log(error) })
  }
  
  handleChange = e => {
   this.setState({ searchField: e.target.value })
  }

  render(){
    const { gods, searchField } = this.state;
    const filteredGods = gods.filter(god => 
      god.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return(
      <div className="App">    
        <h1>God Rolodex</h1> 
        <SearchBox 
          placeholder='Search God' 
          handleChange =  { this.handleChange  }
        />
        <CardList gods={filteredGods}>
        
        </CardList>        
      </div>
      );
    }
  }
  
  export default App;
  