import React, { Component } from 'react';
import Analyser from './component/analyser/analyser.component';
import FormBox from './component/formBox/formBox.component';
import Button from './component/button/button.component';
import Tag from './component/tag/tag.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      level: 1,
      answer: 0,
      guess: '',
      response: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
  }

  generateNum = ({answer, level}) => {
    if (answer===0) {
        var num = Math.floor(Math.random() * level * 100 +1);
        this.setState({
          answer: num
        })
    }
  }
  nextLevel() {
    var levelVal = this.state.level + 1;
    this.setState({
      level: levelVal,
      guess: '',
      answer: 0
     })
  }
  handleSubmit() {
    this.setState({
      response: Analyser(this.state.answer, this.state.guess)
    })
    if(this.state.answer === parseInt(this.state.guess,10)) {this.nextLevel() }
  }

  render() {
    var {answer, level, guess, response} = this.state;
    //console.log(answer, level, guess, response);
    this.generateNum({answer, level});
    return(
      <div className="main">
      <div className="main-body">
        <h1 className="title">Guess the Number Game</h1>
        <h2 className="level">{`Level ${level}`}</h2>
        <FormBox
          name='text'
          type='text'
          handleChange={e=> this.setState({guess: e.target.value})}
          value={guess}
          label={`Enter number from 0 to ${ level*100 }`}
          required
        />
        <Button onClick={this.handleSubmit}>Submit</Button>
        <div className="response-box">
          <Tag response={response}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
