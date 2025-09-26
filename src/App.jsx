import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';

  
function App() {

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul style={{display: 'flex'}}> 
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
           <CoreConcepts {...CORE_CONCEPTS[2]} />
           <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
      </main>
      <MainGoal></MainGoal>
    </div>
  );
}


export default App;
 