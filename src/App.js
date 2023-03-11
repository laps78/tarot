import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page.js';
import Nav from './components/Nav/Nav.js'

function App() {
  const pages = [ 
    {
      name: 'daily',
      children: [],
    },
    {
      name: 'cards',
      children: [],
    }, 
    {
      name: 'about',
      children: [],
    },
  ];
  const [page, setPage] = useState(pages[0]);
  const selectPage = (pageId) => useState(pages[pageId]);
  return (
    <div className="App">
      <Nav setPage={selectPage} />
      <Page children={page.children} />
    </div>
  );
}

export default App;
