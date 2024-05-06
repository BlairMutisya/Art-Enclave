import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Location from './Location';
import Contacts from './Contacts';
import MyCollection from './MyCollection';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [collection, setCollection] = useState([]);