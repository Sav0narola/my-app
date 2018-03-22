import React, { Component } from 'react';
import Button from "./components/Button";
import SimpleText from "./components/SimpleText";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header className="head"/>
          <div className="flex-frame">
              <Button className="flex-item" buttonName={'+'} btnColor={'#7ED321'}/>
              <Button className="flex-item" buttonName={'-'} btnColor={'#D0021B'}/>
              <SimpleText />
          </div>
      </div>
    );
  }
}

export default App;
