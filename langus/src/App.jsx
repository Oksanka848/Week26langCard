
import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import WordList from './components/WordList/WordList';


export default function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
        <WordList/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}


