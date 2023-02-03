
import React from 'react';
import './App.css';
import './components/Card.css';
import Header from './components/Header';
import Main from './components/main';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}


