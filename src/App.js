import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="cid_1" placeholder="CID"></input>
        <input id="fullname_en" placeholder="FULLNAME EN"></input>
        <input id="fullname_th" placeholder="FULLNAME TH"></input>
        <input id="gender" placeholder="GENDER"></input>
        <input id="dob" placeholder="DATE OF BIRTH"></input>
        <input id="issuer" placeholder="ISSUER"></input>
        <input id="issue_date" placeholder="ISSUE DATE"></input>
        <textarea id="address" placeholder="ADDRESS"></textarea>
      </header>
    </div>
  );
}

export default App;
