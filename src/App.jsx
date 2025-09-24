import componentsImg from './assets/components.png';
import reactImg from './assets/react-core-concepts.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';
import { CORE_CONCEPTS } from './data';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header () {
  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p id="titulo">
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build! 
        </p>
      </header>
  )

}
function CoreConcepts ({image, title, description}) {
  return ( 
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )

}
  
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

export function MainGoal () {
  
  return (
    <div className="main-goal-container">
      <p id="frase">
        My main goal: Practice React!
      </p>
      <img src="src/assets/nan.jpg" alt="nan" className="nan-img" />
    </div>
  )
}

export default App;
 