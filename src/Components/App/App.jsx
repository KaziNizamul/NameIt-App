import React from 'react';
import Header from '../Header/Header';
import ResultContainer from '../Results/Results';
import SearchBox from '../Search/Search';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component{

    state = {
      headerText: 'NameIt!',
      headerExpanded: true,
      suggestedNames: []
    }

    handleInputChange = (inputText) => {
      this.setState({
        headerExpanded: inputText.length > 0 ? false : true,
        suggestedNames: inputText ? name(inputText) : []

      })
    }   
    

    render() {
        return (
          <div>
            <Header
              headTitle={this.state.headerText}
              headerExpanded={this.state.headerExpanded}
            />
            <SearchBox handleInputChange={this.handleInputChange} />
            <ResultContainer suggestedNames={this.state.suggestedNames}/>
          </div>
        );
    }
}

// function App() {
//     return <h1> This is my functional component ! </h1>
// }

export default App;

