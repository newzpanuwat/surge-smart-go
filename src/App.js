import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" id="your_photo" alt="logo" />
        <img 
        style={{ width: 150, height: 150}}
        src="https://www.dol.go.th/suphanburi/PublishingImages/Pages/%E0%B8%9D%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3/blank-profile-picture-973460_960_720.png" />
        <input id="cid_1" placeholder="เลขบัตรประชาชน"></input>
        <input id="fullname_en" placeholder="ชื่อ-นา่มสกุล(อังกฤษ)"></input>
        <input id="fullname_th" placeholder="ชื่อ-นามสกุล(ไทย)"></input>
        <input id="gender" placeholder="เพศ"></input>
        <input id="dob" placeholder="วันเกิด"></input>
        <input id="issuer" placeholder="สถานที่ออกบัตร"></input>
        <input id="issue_date" placeholder="วันที่ออกบัตร"></input>
        <input id="issue_exp" placeholder="วันหมดอายุ"></input>
        <textarea id="address" placeholder="ที่อยู่"></textarea>
      </header>
    </div>
  );
}

export default App;
