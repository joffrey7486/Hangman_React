import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss";
import Hangman from './components/Hangman';

const App = () => {
  return (
    <div>
      <h1>Hello World !!</h1>
      <Hangman />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));