import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css';

const Home = () => {
  const inputText = useRef(null);
  const resultText = useRef(null);

  const countWords = () => {
    const text = inputText.current.value;
    const arrText = text.toLowerCase().replaceAll('.', '').split(' ').sort();
    let results = [];
    arrText.forEach(word => {
      if (!results[word]) {
         results[word] = 0;
      }
      results[word] += 1;
    });

    let resultTextStr = '';
    Object.keys(results).forEach(word => {
      resultTextStr += `${word} (${results[word]}), `;
    });

    resultText.current.value = resultTextStr;
  }

  const resetBox = () => {
    inputText.current.value = '';
    resultText.current.value = '';
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Word Counter</h2>
        <h2><Link to='/movie'>Movie</Link></h2>
      </header>

      <div id='content'>
        <form method='POST'>
          <textarea ref={inputText} id='text' rows={6}></textarea>
          <div className='btn-action'>
            <button onClick={resetBox} type='button'>Reset</button>
            <button onClick={countWords} type='button'>Count Words</button>
          </div>
        </form>

        <div id='result-container'>
          <h3>Result:</h3>
          <textarea id='result' ref={resultText} rows={5} readOnly={true}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Home;