import React, { useState } from 'react';
import Hero from './components/Hero';
import AuthoritySection from './components/AuthoritySection';
import DiscoverSection from './components/DiscoverSection';
import Quiz from './components/Quiz';
import LeadCapture from './components/LeadCapture';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [quizScore, setQuizScore] = useState({ A: 0, B: 0, C: 0, D: 0 });

  const startQuiz = () => {
    setCurrentView('quiz');
    window.scrollTo(0, 0);
  };

  const onQuizComplete = (score) => {
    setQuizScore(score);
    setCurrentView('lead');
    window.scrollTo(0, 0);
  };

  const onLeadCaptureComplete = () => {
    setCurrentView('result');
    window.scrollTo(0, 0);
  };

  const getProfile = () => {
    // A = Diretiva, B = Acolhedora, C = Evitativa, D = Centralizadora
    let maxScore = -1;
    let maxProfile = 'A';
    for (const [profile, score] of Object.entries(quizScore)) {
      if (score > maxScore) {
        maxScore = score;
        maxProfile = profile;
      }
    }
    return maxProfile;
  };

  return (
    <div className="app-container">
      {currentView === 'landing' && (
        <div className="fade-in">
          <Hero onStart={startQuiz} />
          <AuthoritySection onStart={startQuiz} />
          <DiscoverSection />
          <Footer />
        </div>
      )}

      {currentView === 'quiz' && (
        <div className="fade-in">
          <Quiz onComplete={onQuizComplete} />
        </div>
      )}

      {currentView === 'lead' && (
        <div className="fade-in">
          <LeadCapture onComplete={onLeadCaptureComplete} />
        </div>
      )}

      {currentView === 'result' && (
        <div className="fade-in">
          <Result profileCode={getProfile()} />
        </div>
      )}
    </div>
  );
}

export default App;
