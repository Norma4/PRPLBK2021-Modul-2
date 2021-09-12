import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from "./components/NavBar";
import Table from "./components/Table";

import User from "./assets/images/user.png";
import Man from "./assets/images/man.png";
import Woman from "./assets/images/woman.png";

const navigation = [
  { name: 'Dashbor', href: '#', current: false },
  { name: 'Praktikan', href: '#', current: true },
  { name: 'Asisten', href: '#', current: false },
  { name: 'Jadwal', href: '#', current: false },
];

const people = [
  {
    name: 'Muhamad Irham Maulana',
    group: '42',
    email: 'irham@mail.com',
    image: Man,
  },
  {
    name: 'Norma Sakinah',
    group: '42',
    email: 'norma@mail.com',
    image: Woman,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <NavBar
      navigation = {navigation}
      title = "Praktikum RPLBK 2021"
      user = {User}
    />
    <Table
      people = {people}
      department = "Teknik Komputer"
      college = "Universitas Diponegoro"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

