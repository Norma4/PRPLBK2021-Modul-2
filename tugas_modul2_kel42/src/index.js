import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from "./components/NavBar";

import User from "./assets/images/user.png";

const navigation = [
  { name: 'Dashbor', href: '#', current: false },
  { name: 'Praktikan', href: '#', current: true },
  { name: 'Asisten', href: '#', current: false },
  { name: 'Jadwal', href: '#', current: false },
];


ReactDOM.render(
  <React.StrictMode>
    <NavBar
      navigation = {navigation}
      title = "Praktikum RPLBK 2021"
      user = {User}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

