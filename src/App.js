import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Activities from './components/Activities/Activities';
import AboutPage from './components/AboutPage/AboutPage';
import QuestionsPage from './components/QuestionsPage/QuestionsPage';
import JoinPage from './components/JoinPage/JoinPage';
import HomePage from './components/HomePage/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HomePage />
      <AboutPage />
      <Activities />
      <JoinPage />
      <QuestionsPage />
      <Footer />
    </div>
  );
}

export default App;
