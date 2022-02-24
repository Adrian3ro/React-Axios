import React, {useState} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [chiste, setChiste] = useState("");

  const ObtenerChiste= () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then(
      (response) => {
        //console.log(response);
        setChiste(response.data.value);
      }
    );
  };

  return (
    <div className="App">

      <header className="App-header">
        <h1>I ❤ Axios</h1>
        <br/>
        <button onClick={ObtenerChiste} > Click aqui para un nuevo chiste</button>
        <br/>
        {chiste}
      </header>
    </div>
  );
}

export default App;
