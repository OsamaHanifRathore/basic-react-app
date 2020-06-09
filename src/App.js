import React from 'react';
import './App.css';
import './hello.css'

function App({name}) {
  return <div>hello <strong>{name}</strong>
  <h1>Intro To react</h1>
  <ul className="name">
  <li>Pakistan</li>
  <li>India</li>
  <li>Bangladesh</li>
  </ul>

  <ol>
  <li>Samsung</li>
  <li>Huawie</li>
  <li>Oppo</li>
  </ol>

  <br/>
  5 + 3 = {5 + 3}
  </div>
}

export default App;