import { useState } from 'react';
import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import Examples from './components/Examples.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <CoreConcept/>
        <Examples/>
      </main>
      <MainGoal></MainGoal>
    </>
  );
}


export default App;