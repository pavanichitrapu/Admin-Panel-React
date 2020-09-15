import React from 'react';
import './App.module.css';
import AccountsPage from './Contaier/AccountsPage/AccountsPage';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <AccountsPage/>
    </div>
  );
}

export default App;
