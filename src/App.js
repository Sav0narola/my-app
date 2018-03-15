import React, { Component } from 'react';
import Button from "./components/Button";
import SimpleText from "./components/SimpleText";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header className="App-header"/>
          <Button buttonName={'+'} color={'#7ED321'}/>
          <Button buttonName={'-'} color={'#D0021B'}/>
          <SimpleText />
      </div>
    );
  }
}

export default App;
