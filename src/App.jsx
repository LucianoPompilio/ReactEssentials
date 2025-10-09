import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import MainGoal from './components/MainGoal.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  let tabContent = 'Please click a button'
  function  handleSelect (selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic); 
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
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p> Please select a topic.</p>}
           {selectedTopic && (
            <div id="tab-content"style={{ color: 'black' }}>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
          </div>
          )}
        </section>
      </main>
      <MainGoal></MainGoal>
    </div>
  );
}


export default App;