import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

  
function App() {
  let tabContent = 'Please click a button'
  function  handleSelect (selectedButton) {
    tabContent = selectedButton;
    console.log(tabContent); 
  }
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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('Jsx')}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
      <MainGoal></MainGoal>
    </div>
  );
}


export default App;