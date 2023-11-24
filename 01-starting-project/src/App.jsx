
import {CORE_CONCEPTS} from './data.js';
import Header from './component/Header/Header.jsx';
import { CoreConcept } from './component/CoreConcept.jsx';
import TabButton from './component/TabButton.jsx';

function App() {
  function handleSelect(selectedButton){
    // selectButton => 'components', 'jsx', 'props', state'
    console.log(selectedButton)
   }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept 
            title ={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>  
          </menu>
          Dynamic Content 
        </section>
      </main>
    </div>
  );
}

export default App;
